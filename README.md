# is-abn
[![Build Status](https://travis-ci.org/thefallofbecause/is-abn.svg?branch=master)](https://travis-ci.org/thefallofbecause/is-abn)

Validation for Australian Business Numbers.

## Installation

is-abn supports use from both the browser and as a node module with the same script. In either case just import `/dist/is-abn.js` or `/dist/is-abn.min.js` however you normally would.

## Usage
Just pass a value to the `isABN` function for testing. Any type that can handle explicit coercion to a string is supported.

If you are using it in the browser the `isABN` function is available in the global scope. If you are using it in a module it will be available wherever you imported it.

## Advanced options
You can pass an optional boolean as the second argument which will strictly validate that the passed value adheres to the format `NN NNN NNN NNN` (normally whitespace is ignored).

You can also pass an optional boolean as the third argument which will cause verbose output to be returned. The verbose output is an object containing the following data:

| Key         | Type    | Description                                        |
|-------------|---------|----------------------------------------------------|
| success     | boolean | Whether the passed value is a valid ABN            |
| code        | integer | A numeric code for the error, see below for values |
| description | string  | Verbose success/error message                      |

Error codes:
| Code | Meaning                                        |
|------|------------------------------------------------|
| 0    | ABN is valid                                   |
| 1    | ABN does not match the format 'XX XXX XXX XXX' |
| 2    | ABN contains non-numeric characters            |
| 3    | ABN is less than 11 digits in length           |
| 4    | ABN is more than 11 digits in length           |
| 5    | ABN is not valid                               |

If verbose is not set, the function simply returns a true/false value.

## Browser Compatibility
- Chrome 5+
- Firefox 3+
- IE9+/Edge
- Opera 10.50+
- Safari 4.0.5+

## Contributing
Please stick to the eslint style guide included.

## License
Copyright (c) 2020 Ken Herbert  
Licensed under the MIT license.
