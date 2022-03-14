module.exports = {
  LONGITUDE_MIN: {
    int: -180,
    float: -180.0,
  },
  LONGITUDE_MAX: {
    int: 180,
    float: 180.0,
  },
  LATITUDE_MIN: {
    int: -90,
    float: -90.0,
  },
  LATITUDE_MAX: {
    int: 90,
    float: 90.0,
  },
  WRONG_PARAMETER_ARRAY: [
    ["invalid parameter, null", null],
    ["invalid parameter, undefined", undefined],
    ["invalid parameter, boolean true", true],
    ["invalid parameter, boolean false", false],
    ["invalid parameter, object", {}],
    ["invalid parameter, array", []],
    ["invalid parameter, string 'invalid'", "invalid"],
    ["invalid parameter, string 'true'", "true"],
    ["invalid parameter, string 'false'", "false"],
    ["invalid parameter, string '' empty", ""],
  ],
};
