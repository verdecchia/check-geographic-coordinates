const checkGeo = require("../dist");

const {
  LATITUDE_MIN,
  LATITUDE_MAX,
  WRONG_PARAMETER_ARRAY,
} = require("./constants");

describe("Test right latitude MIN and MAX limits", () => {
  test.each([
    ["MIN int", LATITUDE_MIN.int],
    ["MIN float", LATITUDE_MIN.float],
    ["MIN intString", `${LATITUDE_MIN.int}`],
    ["MIN intFloat", `${LATITUDE_MIN.float}`],
    ["MAX int", LATITUDE_MAX.int],
    ["MAX float", LATITUDE_MAX.float],
    ["MAX intString", `${LATITUDE_MAX.int}`],
    ["MAX intFloat", `${LATITUDE_MAX.float}`],
  ])("check latitude %p, to be true", (p, value) => {
    expect(checkGeo.latitude(value)).toBe(true);
    expect(checkGeo.isLatitude(value)).toBe(true);
    expect(checkGeo.isValidLatitude(value)).toBe(true);
  });
});

describe("Test wrong latitude MIN amd MAX limits off by 0.1", () => {
  test.each([
    ["MIN int -0.1", LATITUDE_MIN.int - 0.1],
    ["MIN float -0.1", LATITUDE_MIN.float - 0.1],
    ["MIN intString -0.1", `${LATITUDE_MIN.int - 0.1}`],
    ["MIN floatString -0.1", `${LATITUDE_MIN.float - 0.1}`],
    ["MAX int +0.1", LATITUDE_MAX.int + 0.1],
    ["MIN float +0.1", LATITUDE_MAX.float + 0.1],
    ["MAX intString +0.1", `${LATITUDE_MAX.int + 0.1}`],
    ["MIN floatString +0.1", `${LATITUDE_MAX.float + 0.1}`],
  ])("check latitude %p, to be false", (p, value) => {
    expect(checkGeo.latitude(value)).toBe(false);
  });
});

describe("Test wrong latitude MIN amd MAX limits off by 1", () => {
  test.each([
    ["MIN int -0.1", LATITUDE_MIN.int - 1],
    ["MIN float -0.1", LATITUDE_MIN.float - 1],
    ["MIN intString -0.1", `${LATITUDE_MIN.int - 1}`],
    ["MIN floatString -0.1", `${LATITUDE_MIN.float - 1}`],
    ["MAX int +0.1", LATITUDE_MAX.int + 1],
    ["MIN float +0.1", LATITUDE_MAX.float + 1],
    ["MAX intString +0.1", `${LATITUDE_MAX.int + 1}`],
    ["MIN floatString +0.1", `${LATITUDE_MAX.float + 1}`],
  ])("check latitude %p, to be false", (p, value) => {
    expect(checkGeo.latitude(value)).toBe(false);
    expect(checkGeo.isLatitude(value)).toBe(false);
    expect(checkGeo.isValidLatitude(value)).toBe(false);
  });
});

describe("test wrong latitude, invalid parameter (null, undefined, wrong string, etc)", () => {
  test.each(WRONG_PARAMETER_ARRAY)(
    "check longitude %p to be false",
    (p, value) => {
      expect(checkGeo.latitude(value)).toBe(false);
      expect(checkGeo.isLatitude(value)).toBe(false);
      expect(checkGeo.isValidLatitude(value)).toBe(false);
    }
  );
});
