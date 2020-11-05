import { host } from "../config";

export function getPhotoUrlById(id, size) {
    return `${host}api/photo/${id}/image${size ? "/" + size : ""}`;
}