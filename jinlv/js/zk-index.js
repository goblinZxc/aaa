// 支付方式


var frs=$(".fr");
touch.on(frs,"touchstart",function(){
    frs.removeClass("active");
    $(this).addClass("active");
});



// 支付成功

var close=$(".numbox .close")
touch.on(close,"touchstart",function(){
	$(".numbox").hide();
})

// console.log(close);



// 订单
var tiao=$(".tiao");
var btn=$(".tiao em");
// console.log(btn);
var flag=true;
touch.on(btn,"touchstart",function(){
	if(flag){
		// console.log($(this));
		$(this).css("transform","translate3d(0.6rem,0,0)");
		flag=false;
	}else{
		$(this).css("transform","translate3d(0,0,0)");
		flag=true;
	}
})


// 预定机票

var as=$(".contentbox5 .tilt a");
var sjs=$(".contentbox5 .tilt a .sj");
touch.on(as,"touchstart",function(){
	as.removeClass("active");
    $(this).addClass("active");
    var index=$(this).index();
    sjs.removeClass("active").eq(index).addClass("active");
})


var mask=$(".mask");
var times=$(".timeselect .times");
touch.on(times,"touchstart",function(){
	mask.css("display","block");
})
touch.on(mask,"touchstart",function(){
	mask.css("display","none");
})






// console.log(mask);


// 航班搜索

var at=$(".lines .a");
// console.log(at);
touch.on(at,"click",function(){
	var index=$(this).index();
    at.eq(index).addClass("active");
});



// 去程返程
var cngoFei1=$(".cn-go-fei");
console.log(cngoFei1)
touch.on(cngoFei1,"click",function(){
	var index=$(this).index();
    cngoFei1.eq(index).addClass("cn-go-fei1");
});
