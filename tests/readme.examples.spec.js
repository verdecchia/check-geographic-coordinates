const checkGeo = require("check-geographic-coordinates");

describe("test readme example", () => {
  test("Example with numbers", () => {
    const checkGeo = require("check-geographic-coordinates");

    const isRightLng = checkGeo.longitude(180.0); // true
    const isRightLat = checkGeo.latitude(90.0); // true

    const areRightCoordinates = checkGeo.coordinates(180, 90); // true

    expect(isRightLat).toBe(true);
    expect(isRightLng).toBe(true);
    expect(areRightCoordinates).toBe(true);
  });

  test("Example with Rome", () => {
    const checkGeo = require("check-geographic-coordinates");

    const ROME = { latitude: 41.902783, longitude: 12.496366 };

    const isRightLat = checkGeo.latitude(ROME.latitude); // true
    const isRightLng = checkGeo.longitude(ROME.longitude); //true
    const areRightCoordinates = checkGeo.coordinates(
      ROME.longitude,
      ROME.latitude
    ); //true

    expect(isRightLat).toBe(true);
    expect(isRightLng).toBe(true);
    expect(areRightCoordinates).toBe(true);
  });
});
