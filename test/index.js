'use strict';

const { spawnSync } = require('child_process');

const { test } = QUnit;
const r = './bin/run.js';

function run(...args) {
  return spawnSync(r, args).stdout.toString().trim();
}

test('-e expression', t => {
  const res = run('-e', 'print(42)');
  t.equal(res, '42', 'eval expression');
});

test('-s files', t => {
  t.equal(
    run('-s', 'test/fixtures/a.js'),
    'a.js',
    '-s test/fixtures/a.js'
  );
  t.equal(
    run('-s', 'test/fixtures/a.js', 'test/fixtures/b.js'),
    'a.js\nb.js',
    '-s test/fixtures/a.js  test/fixtures/b.js'
  );
});

test('-m files', t => {
  t.equal(
    run('-m', 'test/fixtures/a.js'),
    'a.js',
    '-m test/fixtures/a.js'
  );
  t.equal(
    run('-m', 'test/fixtures/a.js', 'test/fixtures/b.js'),
    'a.js\nb.js',
    '-m test/fixtures/a.js  test/fixtures/b.js'
  );
});
