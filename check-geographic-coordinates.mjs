const _isNumber = (number) => typeof number === "number";
export const longitude = (value) => {
    value = typeof value === "string" ? parseFloat(value) : value;
    return !!(_isNumber(value) && value >= -180 && value <= 180);
};
export const latitude = (value) => {
    value = typeof value === "string" ? parseFloat(value) : value;
    return !!(_isNumber(value) && value >= -90 && value <= 90);
};
export const coordinates = (lon, lat) => {
    return longitude(lon) && latitude(lat);
};
