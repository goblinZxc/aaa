var banspans=$(".lb-banner-imgbox>span");
var banlis=$(".lb-banner-li");
var a=0;
var b;
var c;
var t=setInterval(move,2000);
function move (){
     a++;
    if(a==3){
        a=0;
    }
    if(a>2){
        a=0;
    }
    b=a+1;
    c=a+2;
    if(b==3){
        b=0;
    }
    if(c==3){
        c=0;
    }
    if(c==4){
        c=1;
    }
    banspans.className="";
    banlis.css({"width":"0.12rem","border-radius":"50%"});
    banspans[a].className="lb-banner-span1";
    banspans[b].className="lb-banner-span2";
    banspans[c].className="lb-banner-span3";
    banlis.eq(a).css({"width":"0.22rem","border-radius":"0.2rem"});
}
// banner触摸
touch.on('.lb-banner-imgbox', 'touchstart', function(ev){
    // ev.preventDefault();
    clearInterval(t);
});
touch.on('.lb-banner-imgbox', 'touchend', function(ev){
         t=setInterval(move,2000);
});
var imgbox = document.getElementsByClassName("lb-banner-imgbox");


touch.on(imgbox, 'swiperight', function(ev){
    movem();
});

touch.on(imgbox, 'swipeleft', function(ev){
    move();
});

function movem (){
    a--;
    if(a<0){
        a=2;
    }
    if(a>2){
        a=0;
    }
    b=a+1;
    c=a+2;
    if(b==3){
        b=0;
    }
    if(c==3){
        c=0;
    }
    if(c==4){
        c=1;
    }
    banspans.className="";
    banlis.css({"width":"0.12rem","border-radius":"50%"});
    banspans[a].className="lb-banner-span1";
    banspans[b].className="lb-banner-span2";
    banspans[c].className="lb-banner-span3";
    banlis.eq(a).css({"width":"0.22rem","border-radius":"0.2rem"});
}

// 环球轮播
var imgs=$(".lb-lbimg");
var lis=$(".lb-lbli");
var imgs2=$(".lb-lbimg2");
var lis2=$(".lb-lbli2");
var imgs3=$(".lb-lbimg3");
var lis3=$(".lb-lbli3");
var mm='6.86rem';

for(var i=0;i<imgs.length;i++){
    if(i<1){
        continue;
    }else{
        imgs[i].style.left=mm;
    }
}
for(var i=0;i<imgs2.length;i++){
    if(i<1){
        continue;
    }else{
        imgs2[i].style.left=mm;
    }
}
for(var i=0;i<imgs3.length;i++){
    if(i<1){
        continue;
    }else{
        imgs3[i].style.left=mm;
    }
}
var now=0,next=0;
var xt=setInterval(movex,3000);
function movex(){
    next++;
    if(next==imgs.length){
        next=0;
    }
    for(var i=0;i<lis.length;i++){
        lis.css({"width":"0.12rem","border-radius":"50%"});
    }
    imgs.eq(next).css({left:mm});
    imgs.eq(now).animate({left:"-"+mm});
    imgs.eq(next).animate({left:0},function(){flag=true});
    lis.eq(next).css({"width":"0.22rem","border-radius":"0.1rem"});
    now=next;
}
var flag=true;
function movemx(){
    next--;
    if(next==0){
        next=imgs.length-1;
    }
    for(var i=0;i<lis.length;i++){
        lis.css({"width":"0.12rem","border-radius":"50%"});
    }
    imgs.eq(next).css({left:"-"+mm});
    imgs.eq(now).animate({left:mm});
    imgs.eq(next).animate({left:0},function(){flag=true});
    lis.eq(next).css({"width":"0.22rem","border-radius":"0.1rem"});
    now=next;
}

// 游记轮播
var now2=0,next2=0;
var xt2=setInterval(movex2,4000);
function movex2(){
    next2++;
    if(next2==imgs2.length){
        next2=0;
    }
    for(var i=0;i<lis2.length;i++){
        lis2.css({"width":"0.12rem","border-radius":"50%"});
    }
    imgs2.eq(next2).css({left:mm});
    imgs2.eq(now2).animate({left:"-"+mm});
    imgs2.eq(next2).animate({left:0},function(){flag2=true});
    lis2.eq(next2).css({"width":"0.22rem","border-radius":"0.1rem"});
    now2=next2;
}
var flag2=true;
function movemx2(){
    next2--;
    if(next2==0){
        next2=imgs2.length-1;
    }
    for(var i=0;i<lis2.length;i++){
        lis2.css({"width":"0.12rem","border-radius":"50%"});
    }
    imgs2.eq(next2).css({left:"-"+mm});
    imgs2.eq(now2).animate({left:mm});
    imgs2.eq(next2).animate({left:0},function(){flag2=true});
    lis2.eq(next2).css({"width":"0.22rem","border-radius":"0.1rem"});
    now2=next2;
}

// 酒店轮播
var now3=0,next3=0;
var xt3=setInterval(movex3,3500);
function movex3(){
    next3++;
    if(next3==imgs3.length){
        next3=0;
    }
    for(var i=0;i<lis3.length;i++){
        lis3.css({"width":"0.12rem","border-radius":"50%"});
    }
    imgs3.eq(next3).css({left:mm});
    imgs3.eq(now3).animate({left:"-"+mm});
    imgs3.eq(next3).animate({left:0},function(){flag3=true});
    lis3.eq(next3).css({"width":"0.22rem","border-radius":"0.1rem"});
    now3=next3;
}
var flag3=true;
function movemx3(){
    next3--;
    if(next3==0){
        next3=imgs3.length-1;
    }
    for(var i=0;i<lis3.length;i++){
        lis3.css({"width":"0.12rem","border-radius":"50%"});
    }
    imgs3.eq(next3).css({left:"-"+mm});
    imgs3.eq(now3).animate({left:mm});
    imgs3.eq(next3).animate({left:0},function(){flag3=true});
    lis3.eq(next3).css({"width":"0.22rem","border-radius":"0.1rem"});
    now3=next3;
}

// 环球触摸
touch.on('.lb-xlb1', 'touchstart', function(ev){
    // ev.preventDefault();
    clearInterval(xt);
});
touch.on('.lb-xlb1', 'touchend', function(ev){
    xt=setInterval(movex,3000);
});
var xlb1 = document.getElementsByClassName("lb-xlb1");

touch.on(xlb1, 'swiperight', function(ev){
    if(flag){
        movemx();
        flag=false;
    }
});

touch.on(xlb1, 'swipeleft', function(ev){
    if(flag){
        movex();
        flag=false;
    }
});

// 游记触摸
touch.on('.lb-xlb2', 'touchstart', function(ev){
    // ev.preventDefault();
    clearInterval(xt2);
});
touch.on('.lb-xlb2', 'touchend', function(ev){
    xt2=setInterval(movex2,4000);
});
var xlb2 = document.getElementsByClassName("lb-xlb2");

touch.on(xlb2, 'swiperight', function(ev){
    if(flag2){
        movemx2();
        flag2=false;
    }
});

touch.on(xlb2, 'swipeleft', function(ev){
    if(flag2){
        movex2();
        flag2=false;
    }
});


// 酒店触摸
touch.on('.lb-xlb3', 'touchstart', function(ev){
    // ev.preventDefault();
    clearInterval(xt3);
});
touch.on('.lb-xlb3', 'touchend', function(ev){
    xt3=setInterval(movex3,3500);
});
var xlb3 = document.getElementsByClassName("lb-xlb3");

touch.on(xlb3, 'swiperight', function(ev){
    if(flag3){
        movemx3();
        flag3=false;
    }
});

touch.on(xlb3, 'swipeleft', function(ev){
    if(flag3){
        movex3();
        flag3=false;
    }
});