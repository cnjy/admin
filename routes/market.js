var express = require('express');
var url = require('url');
var router = express.Router();
var model=require("../model");
var marketModel=model.marketModel;

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.query.port === '3000'){
        marketModel.find({},(err,docs)=>{
            if(!err){
               return res.status(200).json({data:docs});
            } 
            return  res.render('market/index');
        }); 
    } 
    if(req.query.market === '0'){
        marketModel.find({},(err,docs)=>{
            if(!err){
               return res.status(200).json({data:docs});
            } 
            return  res.render('market/index');
        }); 
    } 
});
module.exports = router;