#!/usr/bin/env node

'use strict';

const path = require('path');
const { spawn } = require('child_process');
const { argv } = require('../lib/cli.js');
const conditionals = require('../conditionals.json');

let xsargs = [];
let files = []; 

function fail(file) {
  console.error(`xs-test262: The file ${file} is listed as a known failure`);
  process.exit(1);
}

if (argv.V) {
  xsargs.push('-v');
}

if (argv.e) {
  xsargs.push('-e', argv.e);
}

if (argv.s) {
  xsargs.push('-s', ...argv.s);
  files.push(...argv.s);
}

if (argv.m) {
  xsargs.push('-m', ...argv.m);
  files.push(...argv.m);
}

for (const file of files) {
  if (conditionals.some(cond => file.includes(cond))) {
    fail(file);
  }
}

spawn(argv.path, xsargs, {
  stdio: 'inherit',
}).on('close', code => process.exitCode = code ); // Exit the same code from xs
