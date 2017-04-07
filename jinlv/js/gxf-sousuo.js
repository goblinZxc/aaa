$(".gxf-tj").on("mousedown",function(){
    var index=$(this).index();
    $(".gxf-tj").removeClass("gxf-tj2")
    $(".gxf-tj").eq(index).addClass("gxf-tj2")
})