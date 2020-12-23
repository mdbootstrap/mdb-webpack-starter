const fs = require('fs-extra');

try {
  fs.copySync('node_modules/mdb-ui-kit/src', 'mdb')
  console.log('MDB UI KIT source code successfully copied!');
} catch (err) {
  console.log('Failed to copy MDB UI KIT source code!');
}