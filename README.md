# Check geographic coordinates

Simple utility to check if geographic coordinates (latitute, longitude or both) are valid. ([Node.js](https://nodejs.org) >= 14)

# Install

```
npm install check-geographic-coordinates
//or
yarn add check-geographic-coordinates
```

# Usage 

```js
const checkGeo = require("check-geographic-coordinates");

checkGeo.longitude(180.0); // true
checkGeo.latitude(90.0); // true
checkGeo.coordinates(180, 90); // true

const ROME = { latitude: 41.902783, longitude: 12.496366 };
checkGeo.latitude(ROME.latitude); // true
checkGeo.longitude(ROME.longitude); //true
checkGeo.coordinates(ROME.longitude, ROME.latitude); //true
```

# Usage with typescript

```ts
import { latitude, longitude, coordinates } from "check-geographic-coordinates";

longitude(180.0); // true
latitude(90.0); // true
coordinates(180, 90); // true

const ROME = { latitude: 41.902783, longitude: 12.496366 };
latitude(ROME.latitude); // true
longitude(ROME.longitude); //true
coordinates(ROME.longitude, ROME.latitude); //true
```

# Tests

```
npm run test
//or
yarn test
```

# License

MIT

# Feedback

[https://github.com/verdecchia](https://github.com/verdecchia)

