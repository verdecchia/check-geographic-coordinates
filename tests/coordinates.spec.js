const checkGeo = require("../check-geographic-coordinates");

const {
  LONGITUDE_MIN,
  LONGITUDE_MAX,
  LATITUDE_MIN,
  LATITUDE_MAX,
} = require("./constants");

test("Test right coordinates limits (longitude MAX, latitude MAX)", () => {
  expect(checkGeo.coordinates(LONGITUDE_MAX.int, LATITUDE_MAX.int)).toBe(true);
  expect(checkGeo.coordinates(LONGITUDE_MAX.float, LATITUDE_MAX.float)).toBe(
    true
  );
  expect(checkGeo.coordinates(LONGITUDE_MAX.int, LATITUDE_MAX.float)).toBe(
    true
  );
  expect(checkGeo.coordinates(LONGITUDE_MAX.float, LATITUDE_MAX.int)).toBe(
    true
  );
});

test("Test right coordinates limits (longitude MIN, latitude MIN)", () => {
  expect(checkGeo.coordinates(LONGITUDE_MIN.int, LATITUDE_MIN.int)).toBe(true);
  expect(checkGeo.coordinates(LONGITUDE_MIN.float, LATITUDE_MIN.float)).toBe(
    true
  );
  expect(checkGeo.coordinates(LONGITUDE_MIN.int, LATITUDE_MIN.float)).toBe(
    true
  );
  expect(checkGeo.coordinates(LONGITUDE_MIN.float, LATITUDE_MIN.int)).toBe(
    true
  );
});

test("Test coordinates limits (longitude MAX off by +1, latitude right MAX)", () => {
  expect(checkGeo.coordinates(LONGITUDE_MAX.int + 1, LATITUDE_MAX.int)).toBe(
    false
  );
  expect(
    checkGeo.coordinates(LONGITUDE_MAX.float + 1, LATITUDE_MAX.float)
  ).toBe(false);
  expect(checkGeo.coordinates(LONGITUDE_MAX.int + 1, LATITUDE_MAX.float)).toBe(
    false
  );
  expect(checkGeo.coordinates(LONGITUDE_MAX.float + 1, LATITUDE_MAX.int)).toBe(
    false
  );
});

test("Test coordinates limits (longitude MAX off by +0.1, latitude right MAX)", () => {
  expect(checkGeo.coordinates(LONGITUDE_MAX.int + 0.1, LATITUDE_MAX.int)).toBe(
    false
  );
  expect(
    checkGeo.coordinates(LONGITUDE_MAX.float + 0.1, LATITUDE_MAX.float)
  ).toBe(false);
  expect(
    checkGeo.coordinates(LONGITUDE_MAX.int + 0.1, LATITUDE_MAX.float)
  ).toBe(false);
  expect(
    checkGeo.coordinates(LONGITUDE_MAX.float + 0.1, LATITUDE_MAX.int)
  ).toBe(false);
});

test("Test coordinates limits (longitude MAX, latitude right MAX off by +1)", () => {
  expect(checkGeo.coordinates(LONGITUDE_MAX.int, LATITUDE_MAX.int + 1)).toBe(
    false
  );
  expect(
    checkGeo.coordinates(LONGITUDE_MAX.float, LATITUDE_MAX.float + 1)
  ).toBe(false);
  expect(checkGeo.coordinates(LONGITUDE_MAX.int, LATITUDE_MAX.float + 1)).toBe(
    false
  );
  expect(checkGeo.coordinates(LONGITUDE_MAX.float, LATITUDE_MAX.int + 1)).toBe(
    false
  );
});

test("Test coordinates limits (longitude MAX, latitude right MAX off by +0.1)", () => {
  expect(checkGeo.coordinates(LONGITUDE_MAX.int, LATITUDE_MAX.int + 0.1)).toBe(
    false
  );
  expect(
    checkGeo.coordinates(LONGITUDE_MAX.float, LATITUDE_MAX.float + 0.1)
  ).toBe(false);
  expect(
    checkGeo.coordinates(LONGITUDE_MAX.int, LATITUDE_MAX.float + 0.1)
  ).toBe(false);
  expect(
    checkGeo.coordinates(LONGITUDE_MAX.float, LATITUDE_MAX.int + 0.1)
  ).toBe(false);
});

test("Test coordinates limits (longitude MIN off by -1, latitude MIN)", () => {
  expect(checkGeo.coordinates(LONGITUDE_MIN.int + -1, LATITUDE_MIN.int)).toBe(
    false
  );
  expect(
    checkGeo.coordinates(LONGITUDE_MIN.float + -1, LATITUDE_MIN.float)
  ).toBe(false);
  expect(checkGeo.coordinates(LONGITUDE_MIN.int + -1, LATITUDE_MIN.float)).toBe(
    false
  );
  expect(checkGeo.coordinates(LONGITUDE_MIN.float + -1, LATITUDE_MIN.int)).toBe(
    false
  );
});

test("Test coordinates limits (longitude MIN off by -0.1, latitude MIN)", () => {
  expect(checkGeo.coordinates(LONGITUDE_MIN.int + -0.1, LATITUDE_MIN.int)).toBe(
    false
  );
  expect(
    checkGeo.coordinates(LONGITUDE_MIN.float + -0.1, LATITUDE_MIN.float)
  ).toBe(false);
  expect(
    checkGeo.coordinates(LONGITUDE_MIN.int + -0.1, LATITUDE_MIN.float)
  ).toBe(false);
  expect(
    checkGeo.coordinates(LONGITUDE_MIN.float + -0.1, LATITUDE_MIN.int)
  ).toBe(false);
});

test("Test coordinates limits (longitude MIN, latitude MIN off by -1)", () => {
  expect(checkGeo.coordinates(LONGITUDE_MIN.int, LATITUDE_MIN.int + -1)).toBe(
    false
  );
  expect(
    checkGeo.coordinates(LONGITUDE_MIN.float, LATITUDE_MIN.float + -1)
  ).toBe(false);
  expect(checkGeo.coordinates(LONGITUDE_MIN.int, LATITUDE_MIN.float + -1)).toBe(
    false
  );
  expect(checkGeo.coordinates(LONGITUDE_MIN.float, LATITUDE_MIN.int + -1)).toBe(
    false
  );
});

test("Test coordinates limits (longitude MIN, latitude MIN off by -0.1)", () => {
  expect(checkGeo.coordinates(LONGITUDE_MIN.int, LATITUDE_MIN.int + -0.1)).toBe(
    false
  );
  expect(
    checkGeo.coordinates(LONGITUDE_MIN.float, LATITUDE_MIN.float + -0.1)
  ).toBe(false);
  expect(
    checkGeo.coordinates(LONGITUDE_MIN.int, LATITUDE_MIN.float + -0.1)
  ).toBe(false);
  expect(
    checkGeo.coordinates(LONGITUDE_MIN.float, LATITUDE_MIN.int + -0.1)
  ).toBe(false);
});
