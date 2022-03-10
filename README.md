# Check geographic coordinates
Simple utility to check if geographic coordinates (latitute, longitude or both) are valid.

# Install

```bash
npm install check-geographic-coordinates
```
or

```bash
yarn add check-geographic-coordinates
```

# Tests

```bash
npm run test
```

or

```bash
yarn run test
```

# Usage

```js
const checkGeo = require('check-geographic-coordinates');

checkGeo.longitude(180.0); // true
checkGeo.latitude(90.0); //true

checkGeo.coordinates(180, 90); // true
```
# License

MIT