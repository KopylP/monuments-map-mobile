export function getPhotoUrlWithSize(url, size = null) {
    return `${url}${size ? "/" + size : ""}`;
}