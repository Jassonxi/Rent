/**
 * Created by xichenyang on 2016/10/12.
 */
var  mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/onlyone");
if(!mongoose)
    mongoose = null;
module.exports = mongoose;