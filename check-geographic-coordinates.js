"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areValidCoordinates = exports.isValidLongitude = exports.isValidLatitude = exports.areCoordinates = exports.isLongitude = exports.isLatitude = exports.coordinates = exports.latitude = exports.longitude = void 0;
const _isNumber = (number) => typeof number === "number";
const longitude = (value) => {
    value = typeof value === "string" ? parseFloat(value) : value;
    return !!(_isNumber(value) && value >= -180.0 && value <= 180.0);
};
exports.longitude = longitude;
const latitude = (value) => {
    value = typeof value === "string" ? parseFloat(value) : value;
    return !!(_isNumber(value) && value >= -90.0 && value <= 90.0);
};
exports.latitude = latitude;
const coordinates = (lon, lat) => {
    return (0, exports.longitude)(lon) && (0, exports.latitude)(lat);
};
exports.coordinates = coordinates;
/* is/are aliases */
const isLatitude = (value) => (0, exports.latitude)(value);
exports.isLatitude = isLatitude;
const isLongitude = (value) => (0, exports.longitude)(value);
exports.isLongitude = isLongitude;
const areCoordinates = (lon, lat) => (0, exports.coordinates)(lon, lat);
exports.areCoordinates = areCoordinates;
/* isValid/areValid aliases */
const isValidLatitude = (value) => (0, exports.latitude)(value);
exports.isValidLatitude = isValidLatitude;
const isValidLongitude = (value) => (0, exports.longitude)(value);
exports.isValidLongitude = isValidLongitude;
const areValidCoordinates = (lon, lat) => (0, exports.coordinates)(lon, lat);
exports.areValidCoordinates = areValidCoordinates;
