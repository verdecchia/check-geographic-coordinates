const checkGeo = require("../check-geographic-coordinates");

const LONGITUDE_MIN = {
  int: -180,
  float: -180.0,
};
const LONGITUDE_MAX = {
  int: 180,
  float: 180.0,
};

const LATITUDE_MIN = {
  int: -90,
  float: -90.0,
};
const LATITUDE_MAX = {
  int: 90,
  float: 90.0,
};

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

describe("Test right longitude MAX limits", () => {
  test("check longitude MAX int, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MAX.int)).toBe(true);
  });

  test("check longitude MAX float, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MAX.float)).toBe(true);
  });
});

describe("Test right longitude MIN limits", () => {
  test("check longitude MIN int, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MIN.int)).toBe(true);
  });

  test("check longitude MIN float, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MIN.float)).toBe(true);
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

describe("Test wrong longitude MAX off by limits", () => {
  test("check longitude MAX int+1, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MAX.int + 1)).toBe(false);
  });
  test("check longitude MAX int+0.1, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MAX.int + 0.1)).toBe(false);
  });

  test("check longitude MAX float+0.1, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MAX.float + 0.1)).toBe(false);
  });
});

describe("Test wrong longitude MIN off by limits", () => {
  test("check longitude MIN int+(-1), to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MIN.int + -1)).toBe(false);
  });
  test("check longitude MIN int+-(0.1), to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MIN.int + -0.1)).toBe(false);
  });

  test("check longitude MIN float+0.1, to be true", () => {
    expect(checkGeo.longitude(LONGITUDE_MIN.float + -0.1)).toBe(false);
  });
});
