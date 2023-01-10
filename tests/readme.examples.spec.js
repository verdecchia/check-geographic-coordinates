const checkGeo = require("../dist");

describe("test readme example", () => {
  test("Example with numbers", () => {
    const isRightLng = checkGeo.longitude(180.0); // true
    const isRightLat = checkGeo.latitude(90.0); // true

    const areRightCoordinates = checkGeo.coordinates(180, 90); // true

    expect(isRightLat).toBe(true);
    expect(isRightLng).toBe(true);
    expect(areRightCoordinates).toBe(true);
  });

  test("Example with Rome", () => {
    //ROME
    const lon = 12.496366;
    const lat = 41.902783;

    //longitude, return true
    const isRightLng = checkGeo.longitude(lon); // also: isLongitude, isValidLongitude

    //latitude, return true
    const isRightLat = checkGeo.latitude(lat); // also isLatitude, isValidLatitude

    //cordinate, return true
    const areRightCoordinates = checkGeo.coordinates(lon, lat); // also areCoordinates, areValidCoordinates

    expect(isRightLat).toBe(true);
    expect(isRightLng).toBe(true);
    expect(areRightCoordinates).toBe(true);
  });
});
