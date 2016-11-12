/**
 * Created by xichenyang on 2016/10/12.
 */
var db = require("../config").db;

var userSchema = new db.Schema({
    userName: {type: String},
    passWord: {type: String},
    phone: {type: Number},
    IDCard: {type: String},
    realName: {type: String},
    cards: [{
        cardName:String,
        cardNumber:String,
        cardLevel:{type:String,default:"normal"},
        cardScore:{type:Number,default:0},
        cardMoney:{type:Number,default:0},
        cardDiscount:{type:Number,default:0},
        cardLocation:{type:String},
        cardCreate: {type: Date, default: Date.now()},
        cardUpdate: {type: Date, default: Date.now()}
    }],
    createTime: {type: Date, default: Date.now()},
    updateTime: {type: Date, default: Date.now()}
});
userSchema.pre("save", function (next) {
    if (this.isNew) {
        this.createTime = this.updateTime = Date.now();

    } else {
        this.updateTime = Date.now();
    }
   return next();
});
userSchema.statics = {
    validate: function (phone, pwd, callback) {
        this.findOne({phone: phone, passWord: pwd}, callback);
       // this.count({phone: phone, passWord: pwd}, callback);
    },
    load: function (id ,callback) {
        this.findOne({_id:id}, callback);
    },
    regeist: function (user,callback) {
        this.create(user,callback);
    },
    findByAnything: function (anything, callback) {

        this.findOne(anything, callback);
    },
    toDeleteByClick:function(id,cardNames,cardNumbers,callback){
        this.update({_id:id},{'$pull':{cards:{cardName:cardNames,cardNumber:cardNumbers}}},callback);
    }

};


var userList = db.model("users", userSchema);

module.exports = userList;