# Check geographic coordinates

Verifies if longitude and latitude (or both) are valid.

![node-current (tag)](https://img.shields.io/node/v/check-geographic-coordinates/latest)
[![npm version](https://badge.fury.io/js/check-geographic-coordinates.svg)](https://badge.fury.io/js/check-geographic-coordinates)
![npm type definitions](https://img.shields.io/npm/types/check-geographic-coordinates)
![NPM](https://img.shields.io/npm/l/check-geographic-coordinates)
# Install

```sh
npm install check-geographic-coordinates
//or
yarn add check-geographic-coordinates
```

# Usage 

```js
const checkGeo = require("check-geographic-coordinates");

//ROME
const lon = 12.496366;
const lat = 41.902783;

//longitude, return true
checkGeo.longitude(lon); // also: isLongitude, isValidLongitude

//latitude, return true
checkGeo.latitude(lat); // also isLatitude, isValidLatitude

//cordinate, return true
checkGeo.coordinates(lon, lat); // also areCoordinates, areValidCoordinates
```



# Usage with typescript

```ts
import { latitude, longitude, coordinates } from "check-geographic-coordinates";

//ROME
const lon = 12.496366;
const lat = 41.902783;

//longitude, return true
longitude(lon); // also: isLongitude, isValidLongitude

//latitude, return true
latitude(lat); // also isLatitude, isValidLatitude

//cordinate, return true
coordinates(lon, lat); // also areCoordinates, areValidCoordinates
```

# Tests

```
npm run test
//or
yarn test
```

# Feedback

[https://github.com/verdecchia](https://github.com/verdecchia)

