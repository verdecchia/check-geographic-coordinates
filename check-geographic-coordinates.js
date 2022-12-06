"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coordinates = exports.latitude = exports.longitude = void 0;
const _isNumber = (number) => typeof number === "number";
const longitude = (value) => {
    value = typeof value === "string" ? parseFloat(value) : value;
    return !!(_isNumber(value) && value >= -180 && value <= 180);
};
exports.longitude = longitude;
const latitude = (value) => {
    value = typeof value === "string" ? parseFloat(value) : value;
    return !!(_isNumber(value) && value >= -90 && value <= 90);
};
exports.latitude = latitude;
const coordinates = (lon, lat) => {
    return (0, exports.longitude)(lon) && (0, exports.latitude)(lat);
};
exports.coordinates = coordinates;
