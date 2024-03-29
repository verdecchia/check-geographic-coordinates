# roadmap for 'Check Geographic Coordinates'

**work in progress**

This document defines a high level roadmap for 'Check Geographic Coordinates' development.

### v. 1.0

- [x] tests
  - latitude and longitude
    - [x] not valid string
    - [x] not valid types
  - latitude and longitude max/min limits
    - [x] int
    - [x] float
    - [x] intString
    - [x] floatString
  - latitude and longitude max/min off by 1 limits
    - [x] int
    - [x] float
    - [x] intString
    - [x] floatString
  - coordinates max/min limits
    - [x] int
    - [x] float
    - [x] intString
    - [x] floatString
  - coordinates max/min off by 1 limits
    - [x] int
    - [x] float
    - [x] intString
    - [x] floatString
  - coordinates
    - [x] not valid string
    - [x] not valid types
- [x] nodejs version compatibility
- [x] function aliases (isLongitude, isLatidude, areCoordinates)
- [x] function aliases (isValidLongitude, isValidLatitude, areValidCoordinates)
- [x] commonJS and Es6 module import
- [x] parse String as number.
  - [x] Ex. float '14.3' -> 14.3
  - [x] Ex. int '14' -> 14
- [x] jest substitute global command with a local one
### v. 2.0

- typescript
- frontend (test if it works with vue or react)
- use multiple notions of latitude and longitude
  - Ex. Latitude: 40.853294 (40° 51' 11.8584'' N)
  - Ex. Longiture 14.305573 (14° 18' 20.0628'' E)
- typescript declarations provided by '@types/check-geographic-coordinates' 
- eslint / prettier
- github ci (eslint, test/code coverage)
- project examples
  - node
    - typescript
    - javascript 
      - es6
      - commonjs
  - browser
    - reactjs
    - vue
    - svelte
  - new aliases
    - isValidCoordinates, isCoordinates, isValidCoords, areValidCoords
  - function coordinates new parameters:
    - array [12.496366, 41.902783]
    - string "12.496366, 41.902783"
    - object 
      - {longitude: 12.496366, latitude: 41.902783}
      - {longitude: "12.496366", latitude: "41.902783"}