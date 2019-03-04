# xs-test262

[![Build Status](https://travis-ci.org/bocoup/xs-test262.svg?branch=master)](https://travis-ci.org/bocoup/xs-test262)

Wrapper for XS to support execution of Test262

## Usage:

`xs-test262 [ -e | -m | -s ] <strings>`

### Original commands from xs:

- `-e`: eval strings (string)
- `-m`: strings are paths to modules (multiple strings)
- `-s`: strings are paths to scripts (multiple strings)

### Custom options from xs-test262:

- `--path`, `-p`: Specify a custom path to the XS binary (string), default: `'xs'`

### Helpers:

- `--version`, `-v`: Print version of xs-test262, use -V for `xs -v`
- `-V`: Print version of the xs binary, equivalent to xs-v
- `--help`, `-h` shows help

## Examples:

- `xs-test262 -s path/to/test1.js path/to/test2.js`
- `xs-test262 -p xst -s path/to/test1.js path/to/test2.js`
- `xs-test262 -m path/to/test.js`
- `xs-test262 -e '2 + 2'`

## License

This project is licensed to the BSD-3 Clause found in the [LICENSE.txt](LICENSE.txt) file.
