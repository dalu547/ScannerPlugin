var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'ScannerPlugin', 'coolMethod', [arg0]);
};

module.exports.openScanner = function (arg0, success, error) {
    exec(success, error, 'ScannerPlugin', 'openScanner', [arg0]);
};





