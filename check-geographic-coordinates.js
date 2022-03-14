const isNumber = (number) => typeof number === "number";

const longitude = (value) => {
  value = typeof value === "string" ? parseFloat(value) : value;

  return !!(isNumber(value) && value >= -180 && value <= 180);
};

const latitude = (value) => {
  value = typeof value === "string" ? parseFloat(value) : value;
  return !!(isNumber(value) && value >= -90 && value <= 90);
};

const coordinates = (lon, lat) => {
  return longitude(lon) && latitude(lat);
};

module.exports = {
  longitude,
  latitude,
  coordinates,
};
