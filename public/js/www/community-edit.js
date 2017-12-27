$(function(){
    //删除社区文章事件
    $(".delete").click(function(){
        var tr=$(this).parent().parent();
        var id=$(this).parent().parent().find(".id").text();
        $.post("/article/deleteArticle",{id:id},function(data,statusText,xhr){
            tr.remove();
        });
    });
    //编辑社区文章
    $(".save").click(function(){
        var community={
            id:$(".fade").val(),
            name:$(".name").val(),
            title:$(".title").val(),
            content:$(".content").html()
        }
        $.post("/article/editor",community,function(data,statusText,xhr){
            alert("修改成功");
            location.href="/article";
        })
    });
});