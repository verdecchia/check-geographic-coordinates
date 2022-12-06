const each = require("jest-each").default;
const checkGeo = require("../../check-geographic-coordinates");

const {
  LONGITUDE_MIN,
  LONGITUDE_MAX,
  LATITUDE_MIN,
  LATITUDE_MAX,
  WRONG_PARAMETER_ARRAY,
  CITIES,
} = require("./constants");

describe("Test right coordinates limits int/float", () => {
  each([
    [
      "longitude MAX (int), latitude MAX (int)",
      LONGITUDE_MAX.int,
      LATITUDE_MAX.int,
    ],
    [
      "longitude MAX (float), latitude MAX (float)",
      LONGITUDE_MAX.float,
      LATITUDE_MAX.float,
    ],
    [
      "longitude MAX (int), latitude MAX (float)",
      LONGITUDE_MAX.int,
      LATITUDE_MAX.float,
    ],
    [
      "longitude MAX (float), latitude MAX (int)",
      LONGITUDE_MAX.float,
      LATITUDE_MAX.int,
    ],

    [
      "longitude MIN (int), latitude MIN (int)",
      LONGITUDE_MIN.int,
      LATITUDE_MIN.int,
    ],
    [
      "longitude MIN (float), latitude MIN (float)",
      LONGITUDE_MIN.float,
      LATITUDE_MIN.float,
    ],
    [
      "longitude MIN (int), latitude MIN(float)",
      LONGITUDE_MIN.int,
      LATITUDE_MIN.float,
    ],
    [
      "longitude MIN (float), latitude MIN (int)",
      LONGITUDE_MIN.float,
      LATITUDE_MIN.int,
    ],
  ]).test("check coordinates %p, to be true", (p, longitude, latitude) => {
    expect(checkGeo.coordinates(longitude, latitude)).toBe(true);
  });
});

describe("Test right coordinates limits intString/floatString", () => {
  each([
    [
      "longitude MAX (intString), latitude MAX (intString)",
      `${LONGITUDE_MAX.int}`,
      LATITUDE_MAX.int,
    ],
    [
      "longitude MAX (floatString), latitude MAX (floatString)",
      LONGITUDE_MAX.float,
      LATITUDE_MAX.float,
    ],
    [
      "longitude MAX (intString), latitude MAX (floatString)",
      LONGITUDE_MAX.int,
      LATITUDE_MAX.float,
    ],
    [
      "longitude MAX (floatString), latitude MAX (intString)",
      LONGITUDE_MAX.float,
      LATITUDE_MAX.int,
    ],

    [
      "longitude MIN (intString), latitude MIN (intString)",
      LONGITUDE_MIN.int,
      LATITUDE_MIN.int,
    ],
    [
      "longitude MIN (floatString), latitude MIN (floatString)",
      LONGITUDE_MIN.float,
      LATITUDE_MIN.float,
    ],
    [
      "longitude MIN (int), latitude MIN(float)",
      LONGITUDE_MIN.int,
      LATITUDE_MIN.float,
    ],
    [
      "longitude MIN (float), latitude MIN (int)",
      LONGITUDE_MIN.float,
      LATITUDE_MIN.int,
    ],
  ]).test("check coordinates %p, to be true", (p, longitude, latitude) => {
    expect(checkGeo.coordinates(longitude, latitude)).toBe(true);
  });
});

describe("Test wrong coordinates limits int/float with longitude off by 0.1", () => {
  each([
    [
      "longitude MAX (int + 0.1), latitude MAX (int)",
      LONGITUDE_MAX.int + 0.1,
      LATITUDE_MAX.int,
    ],
    [
      "longitude MAX (float + 0.1), latitude MAX (float)",
      LONGITUDE_MAX.float + 0.1,
      LATITUDE_MAX.float,
    ],
    [
      "longitude MAX (int + 0.1), latitude MAX (float)",
      LONGITUDE_MAX.int + 0.1,
      LATITUDE_MAX.float,
    ],
    [
      "longitude MAX (float + 0.1), latitude MAX (int)",
      LONGITUDE_MAX.float + 0.1,
      LATITUDE_MAX.int,
    ],

    [
      "longitude MIN (int -0.1), latitude MIN (int)",
      LONGITUDE_MIN.int - 0.1,
      LATITUDE_MIN.int,
    ],
    [
      "longitude MIN (float -0.1), latitude MIN (float)",
      LONGITUDE_MIN.float - 0.1,
      LATITUDE_MIN.float,
    ],
    [
      "longitude MIN (int - 0.1), latitude MIN(float)",
      LONGITUDE_MIN.int - 0.1,
      LATITUDE_MIN.float,
    ],
    [
      "longitude MIN (float - 0.1), latitude MIN (int)",
      LONGITUDE_MIN.float - 0.1,
      LATITUDE_MIN.int,
    ],
  ]).test("check coordinates %p, to be true", (p, longitude, latitude) => {
    expect(checkGeo.coordinates(longitude, latitude)).toBe(false);
  });
});

describe("Test wrong coordinates limits int/float with latitude off by 0.1", () => {
  each([
    [
      "longitude MAX (int), latitude MAX (int + 0.1)",
      LONGITUDE_MAX.int,
      LATITUDE_MAX.int + 0.1,
    ],
    [
      "longitude MAX (float), latitude MAX (float + 0.1)",
      LONGITUDE_MAX.float,
      LATITUDE_MAX.float + 0.1,
    ],
    [
      "longitude MAX (int), latitude MAX (float + 0.1)",
      LONGITUDE_MAX.int,
      LATITUDE_MAX.float + 0.1,
    ],
    [
      "longitude MAX (float), latitude MAX (int + 0.1)",
      LONGITUDE_MAX.float,
      LATITUDE_MAX.int + 0.1,
    ],

    [
      "longitude MIN (int), latitude MIN (int - 0.1)",
      LONGITUDE_MIN.int,
      LATITUDE_MIN.int - 0.1,
    ],
    [
      "longitude MIN (float), latitude MIN (float - 0.1)",
      LONGITUDE_MIN.float,
      LATITUDE_MIN.float - 0.1,
    ],
    [
      "longitude MIN (int), latitude MIN(float - 0.1)",
      LONGITUDE_MIN.int,
      LATITUDE_MIN.float - 0.1,
    ],
    [
      "longitude MIN (float), latitude MIN (int - 0.1)",
      LONGITUDE_MIN.float,
      LATITUDE_MIN.int - 0.1,
    ],
  ]).test("check coordinates %p, to be true", (p, longitude, latitude) => {
    expect(checkGeo.coordinates(longitude, latitude)).toBe(false);
  });
});

describe("Test wrong coordinates limits intString/floatString with longitude off by 0.1", () => {
  each([
    [
      "longitude MAX (int + 0.1), latitude MAX (int)",
      `${LONGITUDE_MAX.int + 0.1}`,
      `${LATITUDE_MAX.int}`,
    ],
    [
      "longitude MAX (float + 0.1), latitude MAX (float)",
      `${LONGITUDE_MAX.float + 0.1}`,
      `${LATITUDE_MAX.float}`,
    ],
    [
      "longitude MAX (int + 0.1), latitude MAX (float)",
      `${LONGITUDE_MAX.int + 0.1}`,
      `${LATITUDE_MAX.float}`,
    ],
    [
      "longitude MAX (float + 0.1), latitude MAX (int)",
      `${LONGITUDE_MAX.float + 0.1}`,
      `${LATITUDE_MAX.int}`,
    ],

    [
      "longitude MIN (int -0.1), latitude MIN (int)",
      `${LONGITUDE_MIN.int - 0.1}`,
      `${LATITUDE_MIN.int}`,
    ],
    [
      "longitude MIN (float -0.1), latitude MIN (float)",
      `${LONGITUDE_MIN.float - 0.1}`,
      `${LATITUDE_MIN.float}`,
    ],
    [
      "longitude MIN (int - 0.1), latitude MIN(float)",
      `${LONGITUDE_MIN.int - 0.1}`,
      `${LATITUDE_MIN.float}`,
    ],
    [
      "longitude MIN (float - 0.1), latitude MIN (int)",
      `${LONGITUDE_MIN.float - 0.1}`,
      `${LATITUDE_MIN.int}`,
    ],
  ]).test("check coordinates %p, to be true", (p, longitude, latitude) => {
    expect(checkGeo.coordinates(longitude, latitude)).toBe(false);
  });
});

describe("Test wrong coordinates limits intString/floatString with latitude off by 0.1", () => {
  each([
    [
      "longitude MAX (int), latitude MAX (int + 0.1)",
      `${LONGITUDE_MAX.int}`,
      `${LATITUDE_MAX.int + 0.1}`,
    ],
    [
      "longitude MAX (float), latitude MAX (float + 0.1)",
      `${LONGITUDE_MAX.float}`,
      `${LATITUDE_MAX.float + 0.1}`,
    ],
    [
      "longitude MAX (int), latitude MAX (float + 0.1)",
      `${LONGITUDE_MAX.int}`,
      `${LATITUDE_MAX.float + 0.1}`,
    ],
    [
      "longitude MAX (float), latitude MAX (int + 0.1)",
      `${LONGITUDE_MAX.float}`,
      `${LATITUDE_MAX.int + 0.1}`,
    ],

    [
      "longitude MIN (int), latitude MIN (int - 0.1)",
      `${LONGITUDE_MIN.int}`,
      `${LATITUDE_MIN.int - 0.1}`,
    ],
    [
      "longitude MIN (float), latitude MIN (float - 0.1)",
      `${LONGITUDE_MIN.float}`,
      `${LATITUDE_MIN.float - 0.1}`,
    ],
    [
      "longitude MIN (int), latitude MIN(float - 0.1)",
      `${LONGITUDE_MIN.int}`,
      `${LATITUDE_MIN.float - 0.1}`,
    ],
    [
      "longitude MIN (float), latitude MIN (int - 0.1)",
      `${LONGITUDE_MIN.float}`,
      `${LATITUDE_MIN.int - 0.1}`,
    ],
  ]).test("check coordinates %p, to be true", (p, longitude, latitude) => {
    expect(checkGeo.coordinates(longitude, latitude)).toBe(false);
  });
});

describe("test wrong 'latitude', 'longitude', 'longitude and latitude', invalid parameter (null, undefined, wrong string, etc)", () => {
  each(WRONG_PARAMETER_ARRAY).test(
    "check latitude, longitude, 'latitude and longitude' lo %p to be false",
    (p, value) => {
      expect(checkGeo.coordinates(value, value)).toBe(false);
      expect(checkGeo.coordinates(LONGITUDE_MAX, value)).toBe(false);
      expect(checkGeo.coordinates(value, LATITUDE_MAX)).toBe(false);
    }
  );
});

describe("test right cities, latitude and longitude", () => {
  each(CITIES).test("check %p coordinates to be true", (p, value) => {
    expect(checkGeo.coordinates(value.longitude, value.latitude)).toBe(true);
  });
});


