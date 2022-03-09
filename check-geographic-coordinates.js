const isNumber = (number) => typeof number === "number";

const longitude = (value) => {
  return !!(isNumber(value) && value >= -180 && value <= 180);
};

const latitude = (value) => {
  return !!(isNumber(value) && value >= -90 && value <= 90);
};

const coordinates = (longitude, latitude) => {
  return longitude(lon) && latitude(lat);
};

module.exports = {
  longitude,
  latitude,
  coordinates,
};
