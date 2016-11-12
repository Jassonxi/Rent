/**
 * Created by xichenyang on 2016/10/12.
 */
'use strict';
var restify = require("restify");
var config = require("./config");
var env = config.env.current;
var router = require("./routes");
var bp = require("body-parser");
var Redis = require("ioredis");

var server = restify.createServer({



});


  server.use(restify.bodyParser());
server.use(restify.queryParser());





router(server);

server.listen(config.server.port[env],function () {
    console.log("server starts on "+ config.server.port[env]);

});