window.addEventListener('load', function () {
  console.log("HACKED STYLES")
   var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var box = document.getElementsByClassName('box-section');
  if(width > 767){
    for(let i = 0; i < box.length; i++) {
      box[i].style.backgroundColor = '#f7f7f7ab';
      box[i].style.backdropFilter = "blur(10px)";
    };
  } else {
    for(let i = 0; i < box.length; i++) {
      box[i].style.backgroundColor = '#f7f7f700';
      box[i].style.backdropFilter = "blur(0px)";
    };
  }
  if(width > 767){
    var phoneBox = document.getElementsByClassName('main-content--themes');
    for(let i = 0; i < phoneBox.length; i++) {
      phoneBox[i].style.backgroundColor = '#f7f7f7ab';
      phoneBox[i].style.backdropFilter = "blur(10px)";
    };
  }
  var rsvp = document.getElementsByClassName('rsvp-event');
  for(let i = 0; i < rsvp.length; i++) {
    rsvp[i].style.backgroundColor = '#f7f7f7ab';
    rsvp[i].style.backdropFilter = "blur(10px)";
  };
var footer = document.getElementsByClassName('footer');
  for(let i = 0; i < footer.length; i++) {
    footer[i].style.cssText = 'background: #f7f7f7cd !important';
    footer[i].style.backdropFilter = "blur(10px)";
  }
  var musica = document.getElementsByClassName('event-guestbook');
  for(let i = 0; i < musica.length; i++) {
    musica[i].style.cssText = 'background: #f7f7f7cd !important';
    musica[i].style.backdropFilter = "blur(10px)";
  }
})
