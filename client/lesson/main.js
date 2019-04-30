//canvas drawing
    context = document.getElementById('lessonCanvas').getContext("2d");
    $('#lessonCanvas').mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;
        
      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw();
    });
    $('#lessonCanvas').mousemove(function(e){
      if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
      }
    });
    $('#lessonCanvas').mouseup(function(e){
      paint = false;
    });
    $('#lessonCanvas').mouseleave(function(e){
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var clickSize = new Array();
    var curSize = "normal";
    var clickTool = new Array();
    var curTool = "crayon";
    var paint;

    function addClick(x, y, dragging) {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
      if(curTool == "eraser"){
        clickColor.push("white");
      }else{
        clickColor.push(curColor);
      }
      clickColor.push(curSize);
    }

    function redraw(){
      context.lineJoin = "round";
      /* context.lineWidth = 5; */
      for(var i=0; i < clickX.length; i++)
      {		
        context.beginPath();
        if(clickDrag[i] && i){
          context.moveTo(clickX[i-1], clickY[i-1]);
        }else{
          context.moveTo(clickX[i]-1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.strokeStyle = clickColor[i];
        context.lineWidth = curSize;
        context.stroke();
      }
    }

    var colorPurple = "#cb3594";
    var colorGreen = "#659b41";
    var colorYellow = "#ffcf33";
    var colorBrown = "#986928";

    var curColor = colorPurple;
    var clickColor = new Array();

    document.getElementById("colorPurple").onclick = function() {
      curColor = colorPurple;
      console.log("Color changed to purple.");
    }
    document.getElementById("colorGreen").onclick = function() {
      curColor = colorGreen;
      console.log("Color changed to green.");
    }
    document.getElementById("colorYellow").onclick = function() {
      curColor = colorYellow;
      console.log("Color changed to yellow.");
    }
    document.getElementById("colorBrown").onclick = function() {
      curColor = colorBrown;
      console.log("Color changed to brown.");
    }
    
    document.getElementById("sizeSmall").onclick = function() {
      curSize = 2;
      console.log("Size changed to small.");
    }
    document.getElementById("sizeNormal").onclick = function() {
      curSize = 5;
      console.log("Size changed to normal.");
    }
    document.getElementById("sizeLarge").onclick = function() {
      curSize = 10;
      console.log("Size changed to large.");
    }
    document.getElementById("sizeHuge").onclick = function() {
      curSize = 20;
      console.log("Size changed to huge.");
    }
