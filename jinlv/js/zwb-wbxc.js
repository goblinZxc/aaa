
var zwbha = $(".zwb-ha");

var zwbldg = $(".zwb-ldg");

for (var i = 0; i < zwbha.length; i++) {
  zwbha[i].index=i;
  zwbha[i].flag=true;
    zwbha[i].onclick=function(){
      if (zwbha[this.index].flag) {
    zwbldg[this.index].src="images/zwb-ldg.png";
     zwbha[this.index].flag=false;

}else{
         zwbldg[this.index].src="images/zwb-dg.png"
            zwbha[this.index].flag=true;
            };
    }

    
  
};

