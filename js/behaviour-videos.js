// Video1 checking pause or tired, then cancel participation??
var video1 = document.getElementById('video1');
//video1.addEventListener('click', function() { this.paused?this.play():this.pause(); }, false);
video1.addEventListener("pause", function() { document.getElementById("cancel-participation").style.display = ""; });
video1.addEventListener("play", function()  { document.getElementById("cancel-participation").style.display = "none"; });

// Video2 checking pause or tired, then cancel participation??
var video2 = document.getElementById('video2');
video2.addEventListener('click', function() { this.paused?this.play():this.pause(); }, false);
video2.addEventListener("pause", function() { document.getElementById("cancel-participation2").style.display = ""; });
video2.addEventListener("play", function()  { document.getElementById("cancel-participation2").style.display = "none"; });

// Video3 checking pause or tired, then cancel participation??
var video3 = document.getElementById('video3');
video3.addEventListener('click', function() { this.paused?this.play():this.pause(); }, false);
video3.addEventListener("pause", function() { document.getElementById("cancel-participation3").style.display = ""; });
video3.addEventListener("play", function()  { document.getElementById("cancel-participation3").style.display = "none"; });

// Video4 checking pause or tired, then cancel participation??
var video4 = document.getElementById('video4');
video4.addEventListener('click', function() { this.paused?this.play():this.pause(); }, false);
video4.addEventListener("pause", function() { document.getElementById("cancel-participation4").style.display = ""; });
video4.addEventListener("play", function()  { document.getElementById("cancel-participation4").style.display = "none"; });

// Video5 checking pause or tired, then cancel participation??
var video5 = document.getElementById('video5');
video5.addEventListener('click', function() { this.paused?this.play():this.pause(); }, false);
video5.addEventListener("pause", function() { document.getElementById("cancel-participation5").style.display = ""; });
video5.addEventListener("play", function()  { document.getElementById("cancel-participation5").style.display = "none"; });

// Video6 checking pause or tired, then cancel participation??
var video6 = document.getElementById('video66');
video6.addEventListener('click', function() { this.paused?this.play():this.pause(); }, false);
video6.addEventListener("pause", function() { document.getElementById("cancel-participation6").style.display = ""; });
video6.addEventListener("play", function()  { document.getElementById("cancel-participation6").style.display = "none"; });


// Avoid fast-forwarding video1
// https://januszhou.github.io/2017/03/21/Prevent-HTML5-Video-Seeking/
var vvideo1 = document.getElementById('video1');
var supposedCurrentTime = 0;
vvideo1.addEventListener('timeupdate', function() {
  if (!vvideo1.seeking) {
    supposedCurrentTime = vvideo1.currentTime;
  }
});
// prevent user from seeking
vvideo1.addEventListener('seeking', function() {
  // guard agains infinite recursion:
  // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
  var delta = vvideo1.currentTime - supposedCurrentTime;
  // delta = Math.abs(delta); // disable seeking previous content if you want
  if (delta > 0.01) {
    vvideo1.currentTime = supposedCurrentTime;
  }
});
vvideo1.addEventListener('ended', function() {
  // reset state in order to allow for rewind
  supposedCurrentTime = 0;
});


// Avoid fast-forwarding video2
// https://januszhou.github.io/2017/03/21/Prevent-HTML5-Video-Seeking/
var vvideo2 = document.getElementById('video2');
var supposedCurrentTime = 0;
vvideo2.addEventListener('timeupdate', function() {
  if (!vvideo2.seeking) {
    supposedCurrentTime = vvideo2.currentTime;
  }
});
// prevent user from seeking
vvideo2.addEventListener('seeking', function() {
  // guard agains infinite recursion:
  // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
  var delta = vvideo2.currentTime - supposedCurrentTime;
  // delta = Math.abs(delta); // disable seeking previous content if you want
  if (delta > 0.01) {
    vvideo2.currentTime = supposedCurrentTime;
  }
});
vvideo2.addEventListener('ended', function() {
  // reset state in order to allow for rewind
  supposedCurrentTime = 0;
});

// Avoid fast-forwarding video3
// https://januszhou.github.io/2017/03/21/Prevent-HTML5-Video-Seeking/
var vvideo3 = document.getElementById('video3');
var supposedCurrentTime = 0;
vvideo3.addEventListener('timeupdate', function() {
  if (!vvideo3.seeking) {
    supposedCurrentTime = vvideo3.currentTime;
  }
});
// prevent user from seeking
vvideo3.addEventListener('seeking', function() {
  // guard agains infinite recursion:
  // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
  var delta = vvideo3.currentTime - supposedCurrentTime;
  // delta = Math.abs(delta); // disable seeking previous content if you want
  if (delta > 0.01) {
    vvideo3.currentTime = supposedCurrentTime;
  }
});
vvideo3.addEventListener('ended', function() {
  // reset state in order to allow for rewind
  supposedCurrentTime = 0;
});


// Avoid fast-forwarding video4
// https://januszhou.github.io/2017/03/21/Prevent-HTML5-Video-Seeking/
var vvideo4 = document.getElementById('video4');
var supposedCurrentTime = 0;
vvideo4.addEventListener('timeupdate', function() {
  if (!vvideo4.seeking) {
    supposedCurrentTime = vvideo4.currentTime;
  }
});
// prevent user from seeking
vvideo4.addEventListener('seeking', function() {
  // guard agains infinite recursion:
  // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
  var delta = vvideo4.currentTime - supposedCurrentTime;
  // delta = Math.abs(delta); // disable seeking previous content if you want
  if (delta > 0.01) {
    vvideo4.currentTime = supposedCurrentTime;
  }
});
vvideo4.addEventListener('ended', function() {
  // reset state in order to allow for rewind
  supposedCurrentTime = 0;
});

// Avoid fast-forwarding video5
var vvideo5 = document.getElementById('video5');
var supposedCurrentTime = 0;
vvideo5.addEventListener('timeupdate', function() {
  if (!vvideo5.seeking) {
    supposedCurrentTime = vvideo5.currentTime;
  }
});
// prevent user from seeking
vvideo5.addEventListener('seeking', function() {
  // guard agains infinite recursion:
  // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
  var delta = vvideo5.currentTime - supposedCurrentTime;
  // delta = Math.abs(delta); // disable seeking previous content if you want
  if (delta > 0.01) {
    vvideo5.currentTime = supposedCurrentTime;
  }
});
vvideo5.addEventListener('ended', function() {
  // reset state in order to allow for rewind
  supposedCurrentTime = 0;
});

// Avoid fast-forwarding video6
var vvideo6 = document.getElementById('video66');
var supposedCurrentTime = 0;
vvideo6.addEventListener('timeupdate', function() {
  if (!vvideo6.seeking) {
    supposedCurrentTime = vvideo6.currentTime;
  }
});
// prevent user from seeking
vvideo6.addEventListener('seeking', function() {
  // guard agains infinite recursion:
  // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
  var delta = vvideo6.currentTime - supposedCurrentTime;
  // delta = Math.abs(delta); // disable seeking previous content if you want
  if (delta > 0.01) {
    vvideo6.currentTime = supposedCurrentTime;
  }
});
vvideo6.addEventListener('ended', function() {
  // reset state in order to allow for rewind
  supposedCurrentTime = 0;
});