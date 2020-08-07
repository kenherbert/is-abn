# is-abn
[![Build Status](https://travis-ci.org/thefallofbecause/is-abn.svg?branch=master)](https://travis-ci.org/thefallofbecause/is-abn)

Validation for Australian Business Numbers.

## Installation

is-abn supports use from both the browser and as a node module. In either case just import `/dist/is-abn.js` or `/dist/is-abn.min.js` however you normally would.

## Usage
Just pass a value to the `isABN` function for testing. Any type is accepted and will be explicitly converted to a string.

If you are using it in the browser isABN is available in the global scope. If you are using it in a module it will be available however you imported it.

## Advanced options
You can pass an optional boolean as the second argument which will strictly validate that the passed value adheres to the format `NN NNN NNN NNN`. Normally whitespace is ignored.

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
