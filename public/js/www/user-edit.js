$(function(){
    //删除用户事件
    $(".delete").click(function(){
        var tr=$(this).parent().parent();
        var id=$(this).parent().parent().find(".id").text();
        $.post("/users/deleteUser",{id:id},function(data,statusText,xhr){
            tr.remove();
        });
    });
});