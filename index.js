var config = require('getconfig');

exports.register = function _register(plugin, options, next) {
    plugin.app.config = config;
    next();
};
