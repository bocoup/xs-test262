'use strict';

const { spawnSync, execSync } = require('child_process');

const { test } = QUnit;
const r = './bin/run.js';

function run(args) {
  return execSync(`${r} ${args}`).toString().trim();
}

function capture(...args) {
  return spawnSync(r, args);
}

test('-e expression', t => {
  t.equal(run('-e "print(42)"'), '42', 'eval expression');
});

test('-s files', t => {
  t.equal(
    run('-s test/fixtures/a.js'),
    'a.js',
    '-s test/fixtures/a.js'
  );
  t.equal(
    run('-s test/fixtures/a.js test/fixtures/b.js'),
    'a.js\nb.js',
    '-s test/fixtures/a.js  test/fixtures/b.js'
  );
});

test('-m files', t => {
  t.equal(
    run('-m test/fixtures/a.js'),
    'a.js',
    '-m test/fixtures/a.js'
  );
  t.equal(
    run('-m test/fixtures/a.js test/fixtures/b.js'),
    'a.js\nb.js',
    '-m test/fixtures/a.js  test/fixtures/b.js'
  );
});

test('-p custom path', t => {
  t.equal(
    run('-p ./test/fixtures/mirror.sh -e foo -s bar -m baz'),
    '-e foo -s bar -m baz',
    'uses custom path'
  );
});

test('use conditionals', t => {
  const res = capture('-s', 'test/fixtures/a.js', 'test/annexB/foo.js', 'test/fixtures/b.js');
  t.ok(
    res.status > 0,
    'exits with error code'
  );

  t.ok(
    res.stderr.toString().includes('xs-test262: The file test/annexB/foo.js is listed as a known failure'),
    'includes expected error message'
  );
});
