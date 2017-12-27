$(function(){
    $(".save").click(function(){
        var community={
            id:Date.now(),
            username:$(".name").val(),
            title:$(".title").val(),
            img:$(".img").val(),
            publishTime:$(".time").val(),
            views:$(".view").val(),
            frequency:$(".comment").val()
        }
        $.post("/article/articleAdd",community,function(data,statusText,xhr){
            alert("添加成功");
            location.href="/article";
        })        
    })
})