var mongoose = require("mongoose");
//连接mongodb数据库
mongoose.connect("mongodb://localhost:27017/dianrong");
//获取连接数据库的句柄
var db = mongoose.connection;
//监听连接数据库成功的事件
db.on("open", function(err) {
    if (err) {
        console.log("连接数据库失败")
        throw err
    }

    console.log("连接数据库成功")
});
//定义表的数据结构
//用户表(user)
var userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    pwd:String
}, {
    versionKey: false
});

//社区表
var  communitySchema = new mongoose.Schema({
        id:Number,
        username:String,
        img:String,
        title:String,
        prefecture:String,
        views:Number,
        frequency:Number,
        publishTime:String,
        publishtimeUTC:Number,
        lastPostTime:String,
        lastPostTimeUTC:Number,
        conment:String
});

//信息披露表
var aboutSchema=new mongoose.Schema({
    company:[
        {
            investor:[
                {
                    id:Number,
                    title:String,
                    img:String,
                    content:String
                }
            ]
        }
    ],
    operation:[
        {
            realTimeData:[
                {
                    users:Number,
                    invest:Number,
                    amountInvest:Number,
                    earning:Number,
                    corpus:Number,
                    loan:Number
                }
            ]
        }
    ],
    news:[
        {
            id:Number,
            title:String,
            img:String,
            time:String,
            content:String
        }
    ],
    media:[
        {
            id:Number,
            title:String,
            img:String,
            time:String,
            content:String
        }
    ],
    partner:[
        {
            id:Number,
            title:String,
            img:String,
            content:String
        }
    ]
}, {
    versionKey: false
});

//关于点融表
var companySchema=new mongoose.Schema({
    id:Number,
    title:String,
    img:String,
    content:String
},{
    versionKey:false
});

//运营数据表
var operationSchema=new mongoose.Schema({
    users:Number,
    invest:Number,
    amountInvest:Number,
    earning:Number,
    corpus:Number,
    loan:Number
},{
    versionKey:false
});

//点融动态表
var newsSchema=new mongoose.Schema({
    id:Number,
    title:String,
    img:String,
    time:String,
    content:String
},{
    versionKey:false
});

//媒体动态表
var mediaSchema=new mongoose.Schema({
    id:Number,
    title:String,
    img:String,
    time:String,
    content:String
},{
    versionKey:false
});

//合作伙伴表
var partnerSchema=new mongoose.Schema({
    id:Number,
    title:String,
    img:String,
    content:String
},{
    versionKey:false
});

//项目列表
var marketSchema=new mongoose.Schema({
    title:String,
    explain:String,
    child:[{
        img:String,
        title:String,
        income:String,
        starNum:Number,
        movTime:String
    }]
},{
    versionKey:false
});

//将数据结构和表关联起来
//连接user表
var userModel = mongoose.model("userModel", userSchema, "user");
//连接community表
var communityModel = mongoose.model("communityModel", communitySchema, "community");
//连接about表
var aboutModel=mongoose.model("aboutModel",aboutSchema,"about");
//连接company表
var companyModel=mongoose.model("companyModel",companySchema,"company");
//连接operation表
var operationModel=mongoose.model("operationModel",operationSchema,"operation");
//连接news表
var newsModel=mongoose.model("newsModel",newsSchema,"news");
//连接media表
var mediaModel=mongoose.model("mediaModel",mediaSchema,"media");
//连接partner表
var partnerModel=mongoose.model("partnerModel",partnerSchema,"partner");
//连接market表
var marketModel=mongoose.model("marketModel",marketSchema,"market");

//数据导出
module.exports = {
    userModel: userModel,
    communityModel:communityModel,
    aboutModel:aboutModel,
    companyModel:companyModel,
    operationModel:operationModel,
    newsModel:newsModel,
    mediaModel:mediaModel,
    partnerModel:partnerModel,
    marketModel:marketModel
}