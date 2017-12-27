var express = require('express');
var url = require('url');
var router = express.Router();
var model=require("../model");
var aboutModel=model.aboutModel;
var companyModel=model.companyModel;
var operationModel=model.operationModel;
var newsModel=model.newsModel;
var mediaModel=model.mediaModel;
var partnerModel=model.partnerModel;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('about/index',{title:"后台管理-信息披露管理"});
});

//关于点融列表
router.get("/company",(req,res)=>{  
   companyModel.find({},(err,docs)=>{
        var options = {
            title:"信息披露管理-关于点融",
            company:docs
        };
        if(req.query.port === "3000"){
            const data = {code:1,company:docs};
             res.status(200).json(data);
             return;              
        }else{
            res.render("about/company",options);
            return;
        }        
    }); 
});
//关于点融编辑
router.get("/company/edit-company",(req,res)=>{
    var id=req.query.id;
    if(!id){
        res.send('id error');
        return ;
    }else{
        companyModel.find({id:id},(err,docs)=>{
            if(!err){
                res.render('about/edit-company',{result:docs[0],title:"关于点融-编辑"});
                return;
            }
        })    
    } 
});
// 关于点融编辑
router.post("/company/company-editor",(req,res)=>{
    var id=req.body.id;
    var title=req.body.title;
    var img=req.body.img;
    var content=req.body.content;
    companyModel.update({id:id},{$set:{id:id,title:title,img:img,content:content}},(err,docs)=>{
        if(err) throw err;
        console.log("更新数据成功");
        res.end();
    });
});
//删除关于点融
router.post("/company/deleteCompany",(req,res)=>{
    var id=req.body.id;
    companyModel.remove({id:id},err=>{
        if(err) throw err;
        console.log("删除成功");
        res.redirect("/about/company");
    });
});
//添加关于点融
router.get("/company/add-company",(req,res)=>{
    res.render("about/add-company",{title:"关于点融-添加"});
})
//添加关于点融
router.post("/company/companyAdd",(req,res)=>{
    var company=req.body;
    companyModel.insertMany(company,err=>{
        if(err) throw err;
        console.log("添加数据成功");
        res.end();
    });
});

//运营数据列表
router.get("/operation",(req,res)=>{
    operationModel.find({},(err,docs)=>{
        var options = {
            title:"信息披露管理-运营数据",
            operation:docs
        };
        if(req.query.port === "3000"){
            const data = {code:1,operation:docs};
             res.status(200).json(data);
             return;              
        }else{
            res.render("about/operation",options);
            return;
        }
    });
});

//点融动态列表
router.get("/news",(req,res)=>{
    newsModel.find({},(err,docs)=>{
        var options = {
            title:"信息披露管理-点融动态",
            news:docs
        };
        if(req.query.port === "3000"){
            const data = {code:1,news:docs};
             res.status(200).json(data);
             return;              
        }else{
            res.render("about/news",options);
            return;
        }
    });
});

//媒体报道列表
router.get("/media",(req,res)=>{
    mediaModel.find({},(err,docs)=>{
        var options = {
            title:"信息披露管理-媒体报道",
            media:docs
        };
        if(req.query.port === "3000"){
            const data = {code:1,media:docs};
             res.status(200).json(data);
             return;              
        }else{
            res.render("about/media",options);
            return;
        }
    });
});

//合作伙伴列表
router.get("/partner",(req,res)=>{
    partnerModel.find({},(err,docs)=>{
        var options = {
            title:"信息披露管理-合作伙伴",
            partner:docs
        };
        if(req.query.port === "3000"){
            const data = {code:1,partner:docs};
             res.status(200).json(data);
             return;              
        }else{
            res.render("about/partner",options);
            return;
        }
    });
});

module.exports = router;