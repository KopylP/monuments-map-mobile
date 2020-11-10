import Axios from "axios";

export default class GeocoderService {
  constructor(acceptLanguage) {
    this._acceptLanguage = acceptLanguage;
    this._url = "https://nominatim.openstreetmap.org/";
  }

  getAddressInformationFromLatLng = async (lat, lon) => {
    const resp = await Axios.get(this._url + "reverse", {
      params: {
        "accept-language": this._acceptLanguage,
        lat,
        lon,
        format: "json"
      },
    });
    return resp.data;
  };
}
