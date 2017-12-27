var express = require('express');
var router = express.Router();
var model=require("../model");
var communityModel=model.communityModel;

/* GET users listing. */
router.get('/', function(req, res, next) {
    communityModel.find({},(err,docs)=>{
        var options = {
            title:"后台管理-文章管理",
            community:docs
        };
        if(req.query.port === '3000'){
            if(!err){
               return res.status(200).json({data:docs});
            } 
        }           
        return res.render('article/index',options);
    }); 
});
//删除社区文章信息
router.post("/deleteArticle",(req,res)=>{
    var id=req.body.id;
    communityModel.remove({id:id},err=>{
        if(err) throw err;
        console.log("删除成功");
        res.redirect("/article");
    });
});

//社区文章编辑
router.get('/edit', function(req, res, next) {
    var id = req.query.id;
    if(!id){
        res.send('id error');
        return ;
    }else{
         communityModel.find({id:id},(err,docs)=>{
            var options = {
                title:"后台管理-编辑文章",
                result:docs
            };
            res.render('article/edit',options);
            return;
        });   
    }  
});

// 文章编辑
router.post("/editor",(req,res)=>{
    var id=req.body.id;
    var title=req.body.title;
    var img=req.body.img;
    var content=req.body.content;
    communityModel.update({id:id},{$set:{id:id,username:name,title:title,conment:content}},(err,docs)=>{
        if(err) throw err;
        res.end();
    });
});

//社区文章添加
router.get('/add', function(req, res, next) {
     var options = {
        title:"后台管理-添加文章"
    };
    res.render('article/add',options);
});

//添加文章
router.post("/articleAdd",(req,res)=>{
    var community=req.body;
    communityModel.insertMany(community,err=>{
        if(err) throw err;
        console.log("添加数据成功");
        res.end();
    })
})

module.exports = router;