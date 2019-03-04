'use strict';
const yargs = require('yargs');
const yargv = yargs
  .strict()
  .usage('Usage: xs-test262 [ -e | -m | -s ] <strings>')
  .options({
    e: {
      describe: 'eval strings',
      nargs: 1,
      type: 'string',
      group: 'Original commands from xs:',
    },
    m: {
      describe: 'strings are paths to modules',
      type: 'array',
      group: 'Original commands from xs:',
    },
    s: {
      describe: 'strings are paths to scripts',
      type: 'array',
      group: 'Original commands from xs:',
    },
    path: {
      describe: 'Specify a custom path to the XS binary',
      alias: 'p',
      nargs: 1,
      type: 'string',
      default: 'xs',
      group: 'Custom options from xs-test262:',
    },
    version: {
      describe: 'Print version of xs-test262, use -V for `xs -v`',
      alias: 'v',
      group: 'Helpers:',
    },
    V: {
      describe: 'Print version of the xs binary, equivalent to xs-v',
      group: 'Helpers:',
    },
    help: {
      alias: 'h',
      group: 'Helpers:',
    },
  })
  .example('xs-test262 -s path/to/test.js')
  .example('xs-test262 -m path/to/test.js')
  .example('xs-test262 -e \'2 + 2\'')
  .fail((msg, err) => {
    if (err) {
      console.error(err.stack);
    } else {
      console.error(msg);
    }
    process.exit(1);
  });

exports.argv = yargv.argv;
