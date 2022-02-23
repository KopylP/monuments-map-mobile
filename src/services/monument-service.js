import axios from "axios";
import { categories } from "../local-data/categories";

const CancelToken = axios.CancelToken;

export default class MonumentService {
  constructor(host, cultureCode = "uk-UA") {
    this._cultureCode = cultureCode;
    this._host = host;
    this._baseURL = `${this._host}api/`;
    this._axios = axios.create({
      baseURL: this._baseURL,
      headers: {
        Accept: "*",
        "X-version": "2.0",
      },
    });
  }

  async _getRequest(path, params = {}, cancelCallback = (p) => p) {
    let _params = {
      ...params,
    };
    _params["cultureCode"] = this._cultureCode;
    const response = await this._axios.get(path, {
      params: _params,
      cancelToken: new CancelToken(function executor(c) {
        cancelCallback(c);
      }),
    });
    return response;
  }

  async _getRequestData(path, params = {}, cancelCallback = (p) => p) {
    const response = await this._getRequest(path, params, cancelCallback);
    return response.data;
  }

  async _getRequestWithoutCulture(
    path,
    params = {},
    cancelCallback = (p) => p
  ) {
    const response = await this._axios.get(path, {
      params,
      cancelToken: new CancelToken(function executor(c) {
        cancelCallback(c);
      }),
    });
    return response.data;
  }

  getAllMonuments = async (hidden = true) => {
    return await this._getRequestData(`monument/`, true, { hidden });
  };

  async getMonumentsByFilter(
    {
      cities = [],
      statuses = [],
      conditions = [],
      yearsRange = null, // [from, to]
      tags = [],
    },
    cancelCallback
  ) {
    const monuments = await this._getRequestData(
      "monument",
      {
        cities,
        statuses,
        conditions,
        startYear: yearsRange && yearsRange[0],
        endYear: yearsRange && yearsRange[1],
        tags,
      },
      cancelCallback
    );

    return monuments.map(this._mapMonuments);
  }

  async getPaginatedMonumentsByFilter(
    {
      cities = [],
      statuses = [],
      conditions = [],
      yearsRange, // [from, to]
      tags = [],
    },
    cancelCallback,
    paginatedOptions = {
      pageSize: 10,
      pageNumber: 1,
    }
  ) {
    const response = await this._getRequest(
      "monument",
      {
        cities,
        statuses,
        conditions,
        startYear: yearsRange && yearsRange[0],
        endYear: yearsRange && yearsRange[1],
        pageSize: paginatedOptions.pageSize,
        pageNumber: paginatedOptions.pageNumber,
        tags,
      },
      cancelCallback
    );

    var monuments = response.data.map(this._mapMonuments);
    var pagination = JSON.parse(response.headers["x-pagination"]);

    return {
      data: monuments,
      pagination: pagination,
    };
  }

  getMonumentById = async (id) => {
    return await this._getRequestData(`monument/${id}`);
  };

  getAllStatuses = async (cancelCallback) => {
    return await this._getRequestData(
      "status/",
      {},
      (cancelCallback = (p) => p)
    );
  };

  getAllConditions = async (cancelCallback) => {
    return await this._getRequestData(
      "condition/",
      {},
      (cancelCallback = (p) => p)
    );
  };

  getAllCities = async () => {
    return await this._getRequestData("city/");
  };

  getMonumentPhoto = async (monumentPhotoId) => {
    return await this._getRequestData(`monumentphoto/${monumentPhotoId}`);
  };

  getParticipants = async () => {
    return await this._getRequestData(`participant`);
  };

  async getPhotoIds(monumentId) {
    return await this._getRequestData(`monument/${monumentId}/photo/ids`);
  }

  getMonumentPhotos = async (monumentId) => {
    return await this._getRequestData(`monument/${monumentId}/monumentPhotos`);
  };

  getPhoto = async (id, size, base64 = true, webp = true) => {
    return await this._getRequestWithoutCulture(
      `photo/${id}/image/${size}?base64=${base64}&webp=${webp}`
    );
  };

  getFullSizePhoto = async (id, base64 = true, webp = true) => {
    return await this._getRequestWithoutCulture(
      `photo/${id}/image/${1000}?base64=${base64}&webp=${webp}`
    ); // TODO Update Api
  };

  getCategories = async () => {
    return await Promise.resolve(categories);
  }

  _mapMonuments = (p) => ({
    slug: p.slug,
    name: p.name,
    id: p.id,
    isEasterEgg: p.tags != null && p.tags.includes("easter_egg"),
    latitude: p.latitude,
    longitude: p.longitude,
    majorPhotoImageId: p.majorPhotoImageId,
    condition: p.condition,
    id: p.id,
    year: p.year,
    period: p.period,
    majorPhotoImageUrl: p.majorPhotoImageUrl
  });
}
