const checkGeo = require("../../check-geographic-coordinates");

const {
  LONGITUDE_MIN,
  LONGITUDE_MAX,
  WRONG_PARAMETER_ARRAY,
} = require("./constants");

describe("Test right longitude MIN and MAX limits", () => {
  test.each([
    ["MIN int", LONGITUDE_MIN.int],
    ["MIN float", LONGITUDE_MIN.float],
    ["MIN intString", `${LONGITUDE_MIN.int}`],
    ["MIN intFloat", `${LONGITUDE_MIN.float}`],
    ["MAX int", LONGITUDE_MAX.int],
    ["MAX float", LONGITUDE_MAX.float],
    ["MAX intString", `${LONGITUDE_MAX.int}`],
    ["MAX intFloat", `${LONGITUDE_MAX.float}`],
  ])("check longitude %p, to be true", (p, value) => {
    expect(checkGeo.longitude(value)).toBe(true);
    expect(checkGeo.isLongitude(value)).toBe(true);
    expect(checkGeo.isValidLongitude(value)).toBe(true);
  });
});

describe("Test wrong longitude MIN amd MAX limits off by 0.1", () => {
  test.each([
    ["MIN int -0.1", LONGITUDE_MIN.int - 0.1],
    ["MIN float -0.1", LONGITUDE_MIN.float - 0.1],
    ["MIN intString -0.1", `${LONGITUDE_MIN.int - 0.1}`],
    ["MIN floatString -0.1", `${LONGITUDE_MIN.float - 0.1}`],
    ["MAX int +0.1", LONGITUDE_MAX.int + 0.1],
    ["MIN float +0.1", LONGITUDE_MAX.float + 0.1],
    ["MAX intString +0.1", `${LONGITUDE_MAX.int + 0.1}`],
    ["MIN floatString +0.1", `${LONGITUDE_MAX.float + 0.1}`],
  ])("check longitude %p, to be false", (p, value) => {
    expect(checkGeo.longitude(value)).toBe(false);
    expect(checkGeo.isLongitude(value)).toBe(false);
    expect(checkGeo.isValidLongitude(value)).toBe(false);
  });
});

describe("Test wrong longitude MIN amd MAX limits off by 1", () => {
  test.each([
    ["MIN int -0.1", LONGITUDE_MIN.int - 1],
    ["MIN float -0.1", LONGITUDE_MIN.float - 1],
    ["MIN intString -0.1", `${LONGITUDE_MIN.int - 1}`],
    ["MIN floatString -0.1", `${LONGITUDE_MIN.float - 1}`],
    ["MAX int +0.1", LONGITUDE_MAX.int + 1],
    ["MIN float +0.1", LONGITUDE_MAX.float + 1],
    ["MAX intString +0.1", `${LONGITUDE_MAX.int + 1}`],
    ["MIN floatString +0.1", `${LONGITUDE_MAX.float + 1}`],
  ])("check longitude %p, to be false", (p, value) => {
    expect(checkGeo.longitude(value)).toBe(false);
    expect(checkGeo.isLongitude(value)).toBe(false);
    expect(checkGeo.isValidLongitude(value)).toBe(false);
  });
});

describe("test wrong longitude, invalid parameter (null, undefined, wrong string, etc)", () => {
  test.each(WRONG_PARAMETER_ARRAY)(
    "check longitude %p to be false",
    (p, value) => {
      expect(checkGeo.longitude(value)).toBe(false);
      expect(checkGeo.isLongitude(value)).toBe(false);
      expect(checkGeo.isValidLongitude(value)).toBe(false);
    }
  );
});
