const fs = require('fs-extra');
const path = require('path');
const files = require('@clubajax/node-file-managment');

console.log('PWD', __dirname);
const deployDir = './build';
files.mkdir(deployDir);

files.copyFile('./src/dates.js', path.resolve(deployDir, 'dates.js'));
files.copyFile('./README.md', path.resolve(deployDir, 'README.md'));
files.updateBuildPackage();


fs.removeSync('./build/node_modules');
fs.removeSync('./build/package-lock.json'); 
