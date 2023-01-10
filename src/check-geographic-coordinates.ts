const _isNumber = (number: string | number): boolean =>
  typeof number === "number";

export const longitude = (value: string | number): boolean => {
  value = typeof value === "string" ? parseFloat(value) : value;

  return !!(_isNumber(value) && value >= -180.0 && value <= 180.0);
};

export const latitude = (value: string | number): boolean => {
  value = typeof value === "string" ? parseFloat(value) : value;
  return !!(_isNumber(value) && value >= -90.0 && value <= 90.0);
};

export const coordinates = (
  lon: string | number,
  lat: string | number
): boolean => {
  return longitude(lon) && latitude(lat);
};

/* is/are aliases */

export const isLatitude = (value: string | number): boolean => latitude(value);
export const isLongitude = (value: string | number): boolean =>
  longitude(value);
export const areCoordinates = (lon: string | number, lat: string | number) =>
  coordinates(lon, lat);

/* isValid/areValid aliases */

export const isValidLatitude = (value: string | number): boolean =>
  latitude(value);
export const isValidLongitude = (value: string | number): boolean =>
  longitude(value);
export const areValidCoordinates = (
  lon: string | number,
  lat: string | number
) => coordinates(lon, lat);
