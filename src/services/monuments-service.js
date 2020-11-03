import axios from "axios";
// import LocalStorageService from "./local-storage-service"; 

export default class MonumentsService {
  constructor(host) {
    this._host = host;
    this._baseURL = `${this._host}`;
    this._axios = axios.create({
      baseURL: this._baseURL,
      headers: {
        Accept: "*",
      },
    });
  }

  async _getRequest(path, params = {}) {
    const response = await this._axios.get(path, {
      params
    });
    return response.data;
  }

  // getPlans = async () => {
  //   const plans = await this._getRequest("plans");
  //   return plans;
  // }

}
