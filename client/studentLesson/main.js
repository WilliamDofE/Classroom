//client
function showSignIn() {
  var signInContainer = document.getElementById("SignInContainer");
  if(signInContainer.style.display == "none")
    SignInContainer.style.display = "block";
  else
    SignInContainer.style.display = "none";
}

//canvas stuff
let lessonCanvas = LC.init(
  document.getElementsByClassName('lessonCanvas')[0],
  {imageURLPrefix: '/literallycanvas/img'}
);

//socket
let socket = io();

//get data from school page
socket.on('lessonPageInfo', function(lessonResponse) {
  console.log('lesson page info received');
  console.log(lessonResponse);
  document.getElementById("schoolName").innerHTML = lessonResponse.school_name;
});

socket.on('lessonCanvasUpdate', function(lessonCanvasState) {
  console.log('lesson canvas update');
  console.log(lessonCanvasState);
  lessonCanvas.loadSnapshot(lessonCanvasState);
});

window.onload = function() {
  socket.emit('lessonPageReady');
  console.log("lesson page ready");
};
