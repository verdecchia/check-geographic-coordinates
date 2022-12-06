/** @type {import('jest').Config} */
const config = {
  verbose: false,
  testMatch: ["**/__tests__/**/*.(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.js?$": require.resolve("babel-jest"),
  },
};

module.exports = config;
