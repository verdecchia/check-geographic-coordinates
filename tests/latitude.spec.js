const each = require("jest-each").default;

const checkGeo = require("../check-geographic-coordinates");

const {
  LATITUDE_MIN,
  LATITUDE_MAX,
  WRONG_PARAMETER_ARRAY,
} = require("./constants");

describe("Test right latitude MIN and MAX limits", () => {
  each([
    ["MIN int", LATITUDE_MIN.int],
    ["MIN float", LATITUDE_MIN.float],
    ["MIN intString", `${LATITUDE_MIN.int}`],
    ["MIN intFloat", `${LATITUDE_MIN.float}`],
    ["MAX int", LATITUDE_MAX.int],
    ["MAX float", LATITUDE_MAX.float],
    ["MAX intString", `${LATITUDE_MAX.int}`],
    ["MAX intFloat", `${LATITUDE_MAX.float}`],
  ]).test("check latitude %p, to be true", (p, value) => {
    expect(checkGeo.latitude(value)).toBe(true);
  });
});

describe("Test wrong latitude MIN amd MAX limits off by 0.1", () => {
  each([
    ["MIN int -0.1", LATITUDE_MIN.int - 0.1],
    ["MIN float -0.1", LATITUDE_MIN.float - 0.1],
    ["MIN intString -0.1", `${LATITUDE_MIN.int - 0.1}`],
    ["MIN floatString -0.1", `${LATITUDE_MIN.float - 0.1}`],
    ["MAX int +0.1", LATITUDE_MAX.int + 0.1],
    ["MIN float +0.1", LATITUDE_MAX.float + 0.1],
    ["MAX intString +0.1", `${LATITUDE_MAX.int + 0.1}`],
    ["MIN floatString +0.1", `${LATITUDE_MAX.float + 0.1}`],
  ]).test("check latitude %p, to be false", (p, value) => {
    expect(checkGeo.latitude(value)).toBe(false);
  });
});

describe("Test wrong latitude MIN amd MAX limits off by 1", () => {
  each([
    ["MIN int -0.1", LATITUDE_MIN.int - 1],
    ["MIN float -0.1", LATITUDE_MIN.float - 1],
    ["MIN intString -0.1", `${LATITUDE_MIN.int - 1}`],
    ["MIN floatString -0.1", `${LATITUDE_MIN.float - 1}`],
    ["MAX int +0.1", LATITUDE_MAX.int + 1],
    ["MIN float +0.1", LATITUDE_MAX.float + 1],
    ["MAX intString +0.1", `${LATITUDE_MAX.int + 1}`],
    ["MIN floatString +0.1", `${LATITUDE_MAX.float + 1}`],
  ]).test("check latitude %p, to be false", (p, value) => {
    expect(checkGeo.latitude(value)).toBe(false);
  });
});

describe("test wrong latitude, invalid parameter (null, undefined, wrong string, etc)", () => {
  each(WRONG_PARAMETER_ARRAY).test(
    "check longitude %p to be false",
    (p, value) => {
      expect(checkGeo.latitude(value)).toBe(false);
    }
  );
});
