console.log('hi');


[].forEach.call(document.querySelectorAll('.c-videocard'), function( elem ) {
  elem.addEventListener('click', function() {
    elem.classList.add('is-active');
    var $video = elem.querySelector('video');
    $video.play();
    $video.onended = function(e) {
      elem.classList.remove('is-active');
    };
    
  });
});