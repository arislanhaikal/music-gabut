window._ = require('lodash');

try {
    // window.$ = window.jQuery = require('jquery');
    require('bootstrap');
    require('jquery.easing');
} catch (e) {}

require('owl.carousel2');
require('./customs');