/**
 * Created by xichenyang on 2016/10/12.
 */


var admin = require("../controllers/admin");
module.exports = function (server) {
    console.log("passing route");
    server.post('/login', admin.login);
    server.get('/load',admin.load);
    server.post('/regeist',admin.regeist);
    server.post('/delete',admin.delete);

};