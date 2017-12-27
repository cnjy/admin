$(function(){
    //编辑关于点融
    $(".company-save").click(function(){
        var about={
            id:$(".fade").val(),
            title:$(".title").val(),
            img:$(".img").val(),
            content:$(".content").html()
        }
        $.post("/about/company/company-editor",about,function(data,statusText,xhr){
            alert("修改成功");
            location.href="/about/company";
        });
    });
    //删除关于点融
    $(".company-delete").click(function(){
        var tr=$(this).parent().parent();
        var id=$(this).parent().parent().find(".id").text();
        $.post("/about/company/deleteCompany",{id:id},function(data,statusText,xhr){
            tr.remove();
        });
    });
    //添加关于点融
    $(".company-add-save").click(function(){
        var company={
            id:Date.now(),
            title:$(".title").val(),
            img:$(".img").val(),
            content:$(".content").val()
        }
        $.post("/about/company/companyAdd",company,function(data,statusText,xhr){
            alert("添加成功");
            location.href="/about/company";
        });        
    });
});