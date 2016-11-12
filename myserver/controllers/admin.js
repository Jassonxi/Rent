/**
 * Created by xichenyang on 2016/10/12.
 */

var userList = require("../models").admin;
var env = require("../config").env;
var headers = env.headers;
var session = require("restify-cookies");
function toLogin(req, res, next) {
    console.log("going function toLogin + " );
    userList.validate(req.params.phone, req.params.password+"", function (err, data) {
        if(err){
            console.log(err);
        }

        res.send(200,data,headers)
        return next();
        });

}
function  toLoad(req,res,next) {
    console.log("going function toLoad "+req.params.id);

    userList.load(req.params.id, function (err, data) {
        if(err){
            console.log(err);
        }
        res.send(200,data,headers);

        return next();
    });

    
}
function toRegeist(req,res,next) {
    console.log("going function toRegeist");
    var user = {
        passWord:req.params.passWord,
        phone:req.params.phone,
        IDCard:req.params.IDCard,
        realName:req.params.realName,
        level:"normal",
        cards:[],
        createTime:"",
        updateTime:""
    };

    userList.create(user,function (err,data) {

        var anything = {
            IDCard:user.IDCard
        };
        userList.findByAnything(anything,function (err,data2) {
            if(err){
                console.log(err);
            }


            var a = data2.toJSON();
            res.send(200,a, headers);
            return next();
        });



         //  }

     });

}
function toDeleteByClicks(req,res,next){
      console.log("going function toDeleteByClick"+req.params.id+" "+req.params.cardName+" "+req.params.cardNumber);
        userList.toDeleteByClick(req.params.id,req.params.cardName,req.params.cardNumber,function (err,data) {
            if(err)
                console.log(err);
            else{console.log(data);
            res.send(200,data, headers);}
            // body...
            return next();
        });

}
module.exports = {
    login: toLogin,
    load:toLoad,
    regeist:toRegeist,
    delete:toDeleteByClicks
};