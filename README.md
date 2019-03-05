# xs-test262

[![Build Status](https://travis-ci.org/bocoup/xs-test262.svg?branch=master)](https://travis-ci.org/bocoup/xs-test262)

Wrapper for XS to support execution of Test262

## Usage:

`xs-test262 [ -e | -m | -s ] <strings>`

### Original commands from xs:

- `-e`: eval strings (string)
- `-m`: strings are paths to modules (multiple strings)
- `-s`: strings are paths to scripts (multiple strings)
- `-v`: Print version of xs
- `-h`: Shows cli help

### Custom options from xs-test262:

- Custom path: set enviroment variable `XS_PATH` to specify a custom path for the XS binary (string), default: `export XS_PATH=xst`

## Examples:

- `xs-test262 -s path/to/test1.js path/to/test2.js`
- `XS_PATH=xst xs-test262 -s path/to/test1.js path/to/test2.js`
- `xs-test262 -m path/to/test.js`
- `xs-test262 -e '2 + 2'`

## License

This project is licensed to the BSD-3 Clause found in the [LICENSE.txt](LICENSE.txt) file.
