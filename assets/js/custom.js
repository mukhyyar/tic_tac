$( document ).ready(function() {
	$('.meet_slider ').slick({
	 centerMode: true,
  centerPadding: '60px',
    infinite: true,
	speed: 500,
  // fade: true,
// cssEase: 'linear',
	
	  slidesToShow: 3,
	 
	});
	
	//movebg
	
	var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

$(document).mousemove(function(e) {
    var docX = $(document).width();
    var docY = $(document).height();
    
    var moveX = (e.pageX - docX/33) / (docX/33) * -moveForce;
    var moveY = (e.pageY - docY/33) / (docY/33) * -moveForce;
    
    var rotateY = (e.pageX / docX * rotateForce*33) - rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
    
    $('.main-abg')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
});


//mousemove

  var mousePos = {};

 function getRandomInt(min, max) {
   return Math.round(Math.random() * (max - min + 1)) + min;
 }
  
  $(window).mousemove(function(e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });
  
  $(window).mouseleave(function(e) {
    mousePos.x = -1;
    mousePos.y = -1;
  });
  
  var draw = setInterval(function(){
    if(mousePos.x > 0 && mousePos.y > 0){
      
      var range = 35;
      
      var color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
      
      var sizeInt = getRandomInt(15, 10);
      size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
      
      var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
      
      var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 

      var style = left+top+color+size;
      $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
    }
  }, 2);


}); //doc.ready end
			