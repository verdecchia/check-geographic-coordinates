const checkGeo = require("../check-geographic-coordinates");

const { LATITUDE_MIN, LATITUDE_MAX } = require("./constants");

describe("Test right latitude MAX limits", () => {
  test("check latitude MAX int, to be true", () => {
    expect(checkGeo.latitude(LATITUDE_MAX.int)).toBe(true);
  });

  test("check latitude MAX float, to be true", () => {
    expect(checkGeo.latitude(LATITUDE_MAX.float)).toBe(true);
  });
});

describe("Test right latitude MIN limits", () => {
  test("check latitude MAX int, to be true", () => {
    expect(checkGeo.latitude(LATITUDE_MIN.int)).toBe(true);
  });

  test("check latitude MAX float, to be true", () => {
    expect(checkGeo.latitude(LATITUDE_MIN.float)).toBe(true);
  });

  test("check latitude MIN int, to be true", () => {
    expect(checkGeo.latitude(LATITUDE_MIN.int)).toBe(true);
  });

  test("check latitude MIN float, to be true", () => {
    expect(checkGeo.latitude(LATITUDE_MIN.float)).toBe(true);
  });
});

describe("Test wrong latitude MAX off by limits", () => {
  test("check latitude MAX int+1, to be true", () => {
    expect(checkGeo.latitude(LATITUDE_MAX.int + 1)).toBe(false);
  });
  test("check latitude MAX int+0.1, to be true", () => {
    expect(checkGeo.latitude(LATITUDE_MAX.int + 0.1)).toBe(false);
  });

  test("check latitude MAX float+0.1, to be true", () => {
    expect(checkGeo.latitude(LATITUDE_MAX.float + 0.1)).toBe(false);
  });
});

describe("Test wrong latitude MIN off by limits", () => {
  test("check latitude MIN int+(-1), to be true", () => {
    expect(checkGeo.latitude(LATITUDE_MIN.int + -1)).toBe(false);
  });
  test("check latitude MIN int+-(0.1), to be true", () => {
    expect(checkGeo.latitude(LATITUDE_MIN.int + -0.1)).toBe(false);
  });

  test("check latitude MIN float+0.1, to be true", () => {
    expect(checkGeo.latitude(LATITUDE_MIN.float + -0.1)).toBe(false);
  });
});
