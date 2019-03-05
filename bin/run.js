#!/usr/bin/env node

'use strict';

const { spawn } = require('child_process');
const conditionals = require('../conditionals.json');

const args = process.argv.slice(2);
const files = args.filter(arg => /(?!-)\w*/.test(arg));

const { XS_PATH = 'xs' } = process.env;

function fail(file) {
  console.error(`xs-test262: The file ${file} is listed as a known failure`);
  process.exit(1);
}

for (const file of files) {
  if (conditionals.some(cond => file.includes(cond))) {
    fail(file);
  }
}

spawn(XS_PATH, process.argv.slice(2), {
  stdio: 'inherit',
}).on('close', code => process.exitCode = code ); // Exit the same code from xs
