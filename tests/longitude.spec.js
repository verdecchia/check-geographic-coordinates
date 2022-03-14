const each = require("jest-each").default;

const checkGeo = require("../check-geographic-coordinates");

const { LONGITUDE_MIN, LONGITUDE_MAX } = require("./constants");

describe("Test right longitude MIN and MAX limits", () => {
  each([
    ["MIN int", LONGITUDE_MIN.int],
    ["MIN float", LONGITUDE_MIN.float],
    ["MIN intString", `${LONGITUDE_MIN.int}`],
    ["MIN intFloat", `${LONGITUDE_MIN.float}`],
    ["MAX int", LONGITUDE_MAX.int],
    ["MAX float", LONGITUDE_MAX.float],
    ["MAX intString", `${LONGITUDE_MAX.int}`],
    ["MAX intFloat", `${LONGITUDE_MAX.float}`],
  ]).test("check longitude %p, to be true", (p, value) => {
    expect(checkGeo.longitude(value)).toBe(true);
  });
});

describe("Test wrong longitude MIN amd MAX limits off by 0.1", () => {
  each([
    ["MIN int -0.1", LONGITUDE_MIN.int - 0.1],
    ["MIN float -0.1", LONGITUDE_MIN.float - 0.1],
    ["MIN intString -0.1", `${LONGITUDE_MIN.int - 0.1}`],
    ["MIN floatString -0.1", `${LONGITUDE_MIN.float - 0.1}`],
    ["MAX int +0.1", LONGITUDE_MAX.int + 0.1],
    ["MIN float +0.1", LONGITUDE_MAX.float + 0.1],
    ["MAX intString +0.1", `${LONGITUDE_MAX.int + 0.1}`],
    ["MIN floatString +0.1", `${LONGITUDE_MAX.float + 0.1}`],
  ]).test("check longitude %p, to be false", (p, value) => {
    expect(checkGeo.longitude(value)).toBe(false);
  });
});

describe("Test wrong longitude MIN amd MAX limits off by 1", () => {
  each([
    ["MIN int -0.1", LONGITUDE_MIN.int - 1],
    ["MIN float -0.1", LONGITUDE_MIN.float - 1],
    ["MIN intString -0.1", `${LONGITUDE_MIN.int - 1}`],
    ["MIN floatString -0.1", `${LONGITUDE_MIN.float - 1}`],
    ["MAX int +0.1", LONGITUDE_MAX.int + 1],
    ["MIN float +0.1", LONGITUDE_MAX.float + 1],
    ["MAX intString +0.1", `${LONGITUDE_MAX.int + 1}`],
    ["MIN floatString +0.1", `${LONGITUDE_MAX.float + 1}`],
  ]).test("check longitude %p, to be false", (p, value) => {
    expect(checkGeo.longitude(value)).toBe(false);
  });
});
