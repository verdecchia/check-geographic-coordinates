const checkGeo = require("../check-geographic-coordinates");

const { LONGITUDE_MIN, LONGITUDE_MAX } = require("./constants");

describe("Test right longitude MAX limits", () => {
  test("check longitude MAX int, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MAX.int)).toBe(true);
  });

  test("check longitude MAX float, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MAX.float)).toBe(true);
  });

  test("check longitude MAX intString, to be true", () => {
    expect(checkGeo.longitude(`${LONGITUDE_MAX.int}`)).toBe(true);
  });

  test("check longitude MAX floatString, to be true", () => {
    expect(checkGeo.longitude(`${LONGITUDE_MAX.float}`)).toBe(true);
  });
});

describe("Test right longitude MIN limits", () => {
  test("check longitude MIN int, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MIN.int)).toBe(true);
  });

  test("check longitude MIN float, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MIN.float)).toBe(true);
  });

  test("check longitude MIN intString, to be true", () => {
    expect(checkGeo.longitude(`${LONGITUDE_MIN.int}`)).toBe(true);
  });

  test("check longitude MIN floatString, to be true", () => {
    expect(checkGeo.longitude(`${LONGITUDE_MIN.float}`)).toBe(true);
  });
});

describe("Test wrong longitude MAX off by limits", () => {
  test("check longitude MAX int+1, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MAX.int + 1)).toBe(false);
  });
  test("check longitude MAX int+0.1, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MAX.int + 0.1)).toBe(false);
  });

  test("check longitude MAX float+1, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MAX.float + 1)).toBe(false);
  });

  test("check longitude MAX float+0.1, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MAX.float + 0.1)).toBe(false);
  });

  test("check longitude MAX string 'int+1', to be true", () => {
    expect(checkGeo.longitude(`${LONGITUDE_MAX.int + 1}`)).toBe(false);
  });
  test("check longitude MAX string 'int+0.1', to be true", () => {
    expect(checkGeo.longitude(`${LONGITUDE_MAX.int + 0.1}`)).toBe(false);
  });

  test("check longitude MAX string 'float+1', to be true", () => {
    expect(checkGeo.longitude(`${LONGITUDE_MAX.float + 1}`)).toBe(false);
  });

  test("check longitude MAX string 'float+0.1', to be true", () => {
    expect(checkGeo.longitude(`${LONGITUDE_MAX.float + 0.1}`)).toBe(false);
  });
});

describe("Test wrong longitude MIN off by limits", () => {
  test("check longitude MIN int+(-1), to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MIN.int + -1)).toBe(false);
  });
  test("check longitude MIN int+-(0.1), to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MIN.int + -0.1)).toBe(false);
  });

  test("check longitude MIN float+(-1), to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MIN.float + -1)).toBe(false);
  });

  test("check longitude MIN float+(-0.1), to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MIN.float + -0.1)).toBe(false);
  });

  test("check longitude MIN string 'int+(-1)', to be true", () => {
    expect(checkGeo.longitude(`${LONGITUDE_MIN.int + -1}`)).toBe(false);
  });
  test("check longitude MIN string 'int+-(0.1)', to be true", () => {
    expect(checkGeo.longitude(`${LONGITUDE_MIN.int + -0.1}`)).toBe(false);
  });

  test("check longitude MIN string 'float+(-1)', to be true", () => {
    expect(checkGeo.longitude(`${LONGITUDE_MIN.float + -1}`)).toBe(false);
  });

  test("check longitude MIN string'float+(-0.1)', to be true", () => {
    expect(checkGeo.longitude(`${LONGITUDE_MIN.float + -0.1}`)).toBe(false);
  });
});
