#!/usr/bin/env node

const path = require('path');
const { spawn } = require('child_process');
const { argv } = require('../lib/cli.js');
const conditionals = require('../conditionals.json');

const XS_BIN = argv.path;

let xsargs = [];
let files = []; 

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
  } else {
    run();
  }
}

function run() {
  spawn(XS_BIN, xsargs, {
    stdio: 'inherit',
  }).on('close', code => process.exitCode = code ); // Exit the same code from xs
}

function fail(file) {
  console.error(`xs-test262: The file ${file} is listed as a known failure`);
  process.exit(1);
}
