const _isNumber = (number) => typeof number === "number";
export const longitude = (value) => {
    value = typeof value === "string" ? parseFloat(value) : value;
    return !!(_isNumber(value) && value >= -180.0 && value <= 180.0);
};
export const latitude = (value) => {
    value = typeof value === "string" ? parseFloat(value) : value;
    return !!(_isNumber(value) && value >= -90.0 && value <= 90.0);
};
export const coordinates = (lon, lat) => {
    return longitude(lon) && latitude(lat);
};
/* is/are aliases */
export const isLatitude = (value) => latitude(value);
export const isLongitude = (value) => longitude(value);
export const areCoordinates = (lon, lat) => coordinates(lon, lat);
/* isValid/areValid aliases */
export const isValidLatitude = (value) => latitude(value);
export const isValidLongitude = (value) => longitude(value);
export const areValidCoordinates = (lon, lat) => coordinates(lon, lat);
