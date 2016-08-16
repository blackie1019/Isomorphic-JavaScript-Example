'use strict';
var helper = {};
helper.getShortDatetime = function() {
    var datetime = new Date();
    return [datetime.getFullYear(),
        (datetime.getMonth() + 1),
        datetime.getDate()
    ].join('/') + ' ' + [
        datetime.getHours(),
        datetime.getMinutes(),
        datetime.getSeconds()
    ].join(':');
}

module.exports = helper;