/**
 * Created by xichenyang on 2016/10/12.
 */

var server = require("./server");
var environment = require("./environment");
var db = require("./db");
var config = {
    server:server,
    env:environment,
    db:db
    
}

module.exports = config;