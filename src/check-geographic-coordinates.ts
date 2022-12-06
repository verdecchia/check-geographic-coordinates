const _isNumber = (number: string | number): boolean =>
  typeof number === "number";

export const longitude = (value: string | number): boolean => {
  value = typeof value === "string" ? parseFloat(value) : value;

  return !!(_isNumber(value) && value >= -180 && value <= 180);
};

export const latitude = (value: string | number): boolean => {
  value = typeof value === "string" ? parseFloat(value) : value;
  return !!(_isNumber(value) && value >= -90 && value <= 90);
};

export const coordinates = (
  lon: string | number,
  lat: string | number
): boolean => {
  return longitude(lon) && latitude(lat);
};
