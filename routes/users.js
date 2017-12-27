var express = require('express');
var router = express.Router();
var model=require("../model");
var userModel=model.userModel;

/* GET users listing. */
router.get('/', function(req, res, next) {
    userModel.find({},function(err,docs){
        var options = {
            title:"后台管理-用户列表",
            users:docs
        };
        return res.render('user/index', options);
    });
});

//注册
router.get("/getRegister",(req,res)=>{
    userModel.find({},function(err,docs){
        if(req.query.port==='3000'){
            var id=Date.now();
            var tel=req.query.tel;
            var pwd=req.query.pwd;
            if(docs.length===0){
                const data = {id:id,name:tel,pwd:pwd};
                const newData = new userModel(data);
                newData.save(data,(err,doc)=>{
                    if(doc){
                        console.log("数据添加成功");
                    }
                });
            }else{
                docs.forEach(function(item,index){
                    if(item.name!=tel){
                       const data = {id:id,name:tel,pwd:pwd};
                       const newData = new userModel(data);
                        newData.save(data,(err,doc)=>{
                            if(doc){
                                console.log("two数据添加成功");
                                return res.status(200).json({msg:"注册成功！"});
                            }
                        });
                       
                    }else{
                        return res.status(200).json({data:docs,msg:"此手机号码已被注册!"});
                    }
                });
            }
        }
    });
});

//登录
router.get("/getLogin",(req,res)=>{
    userModel.findOne({name:req.query.name},(err,doc)=>{
        if(doc){
            const data = doc
            return res.json({codes:1,data:doc})
        }
        return res.json({codes:0,msg:"用户名密码不正确"})
    })
});

//删除用户信息
router.post("/deleteUser",(req,res)=>{
    var id=req.body.id;
    userModel.remove({id:id},err=>{
        if(err) throw err;
        console.log("删除成功");
        res.redirect("/users");
    });
});

module.exports = router;