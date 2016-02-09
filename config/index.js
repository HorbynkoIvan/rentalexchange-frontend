var nconf = require('nconf');
var path = require('path');

var arr = __dirname.split('\\');
var strPath = arr[0];
for (var i = 1; i < arr.length - 2; i++){
    strPath = strPath + "\\" + arr[i];
}

nconf.argv()
 .env()
 .file({file: path.join(strPath, 'config.json')});

nconf.defaults({
    'port': 3000
});

module.exports = nconf;