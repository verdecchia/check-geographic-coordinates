# roadmap for 'Check Geographic Coordinates'

**work in progress**

This document defines a high level roadmap for 'Check Geographic Coordinates' development.

### v. 1.0

- tests
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
- nodejs version compatibility
- function aliases (isLongitude, isLatidude, isCoordinate)
- function aliases (isValidLongitude, isValidLatitude, isValidCoordinate)
- commonJS and Es module import
- parse String as number.
  - Ex. '14.3' -> 14.3
- jest substitute global command with a local one

### v. 2.0

- typescript
- use multiple notions of latitude and longitude
  - Ex. Latitude: 40.853294 (40° 51' 11.8584'' N)
  - Ex. Longiture 14.305573 (14° 18' 20.0628'' E)
