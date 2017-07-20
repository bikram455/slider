function FirstSlider(elementId)
{
  var that=this;
  this.margin=0;
  this.intervalId;
  this.beginSlider;
  var next=document.getElementById("next");
  var prev=document.getElementById("prev");
  var first=document.getElementById("one");
  var fifth=document.getElementById("five");
  var second=document.getElementById("two");
  var third=document.getElementById("three");
  var fourth=document.getElementById("four");
  var image=document.getElementById(elementId);

  this.init=function(){  
    this.Events();	
    this.slide();	
  }  
  //Function to slide image over-time
  this.slide=function()
  {
  	that.intervalId=setInterval(function(){  	   	  
  	  if(that.margin<-4120){
  	  	that.begin();
  	  }

  	  if(that.margin % 1030 ==0){
  	  	that.hold(that.intervalId);
  	  }

  	  image.style.marginLeft=that.margin;
  	  that.colour();
  	  that.margin -=10;
  	},1000/60);	
  }

  this.colour=function(){
  	first.style.background='url("./images/passive.png")';
  	second.style.background='url("./images/passive.png")';
  	third.style.background='url("./images/passive.png")';
  	fourth.style.background='url("./images/passive.png")';
  	fifth.style.background='url("./images/passive.png")';
  	
  	if(that.margin<=0 && that.margin>-515){
  	  first.style.background='url("./images/active.png")';	  	
  	}

  	else if(that.margin<=-515 && that.margin>-1545){
  	  second.style.background='url("./images/active.png")';
  	}

  	else if(that.margin<=-1545 && that.margin>-2575){
  	  third.style.background='url("./images/active.png")';
  	}

  	else if(that.margin<=-2575 && that.margin>-3605){
  	  fourth.style.background='url("./images/active.png")';
  	}

  	else if(that.margin<=-3605 && that.margin>=-4120){
  	  fifth.style.background='url("./images/active.png")';
  	}
  }

//During Events
  this.Events=function(){
    first.addEventListener('click',function(){
      image.style.marginLeft=0;
      that.margin=0;      
	});
	second.addEventListener('click',function(){
      image.style.marginLeft=-1030;
      that.margin=-1030;
	});
	third.addEventListener('click',function(){
      image.style.marginLeft=-2060;
      that.margin=-2060;
	});
	fourth.addEventListener('click',function(){
      image.style.marginLeft=-3090;
      that.margin=-3090;
	});
	fifth.addEventListener('click',function(){
      image.style.marginLeft=-4120;
      that.margin=-4120;
	});
	//Previous Button Effect
	prev.addEventListener('click',function(){
	  if(that.margin<=0 && that.margin>-1030){
	  	image.style.marginLeft=-4120;
        that.margin=-4120;
	  }
	  else if(that.margin<=-1030 && that.margin>-2060){
	  	image.style.marginLeft=0;
        that.margin=0;
	  }	
	  else if(that.margin<=-2060 && that.margin>-3090){
	  	image.style.marginLeft=-1030;
	  	that.margin=-1030;
	  }
	  else if(that.margin<=-3090 && that.margin>-4120){
	    image.style.marginLeft=-2060;
	  	that.margin=-2060;	
	  }
	  else if(that.margin<=-4120 && that.margin>-5150){
	    image.style.marginLeft=-3090;
	  	that.margin=-3090;	
	  }
	});
	//Next Button Effect
	next.addEventListener('click',function(){
	  if(that.margin<=0 && that.margin>-1030){
	  	image.style.marginLeft=-1030;
        that.margin=-1030;
	  }
	  else if(that.margin<=-1030 && that.margin>-2060){
	  	image.style.marginLeft=-2060;
        that.margin=-2060;
	  }	
	  else if(that.margin<=-2060 && that.margin>-3090){
	  	image.style.marginLeft=-3090;
	  	that.margin=-3090;
	  }
	  else if(that.margin<=-3090 && that.margin>-4120){
	    image.style.marginLeft=-4120;
	  	that.margin=-4120;	
	  }
	  else if(that.margin<=-4120 && that.margin>-5150){
	    image.style.marginLeft=0;
	  	that.margin=0;	
	  }
	});
  }
	
	this.stop=function()
	{
		console.log('here');
		clearInterval(that.beginSlider);
		that.slide();
	}

	this.hold=function(interval){
	  clearInterval(interval);
	  
	  setTimeout(function(){
	  	that.slide();
	  },2000);

	}

	this.begin=function(){
	  clearInterval(that.intervalId);
	  that.beginSlider=setInterval(function(){
	  	that.margin +=10;
		image.style.marginLeft=that.margin;

		if(that.margin>=0){
		  that.stop();
		}

	  },1000/200);
	}
}

var slider=new FirstSlider('images');
slider.init();
	
