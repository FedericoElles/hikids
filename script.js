console.log('hi');

//play video polaroids
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


//show screens
[].forEach.call(document.querySelectorAll('.js-screen'), function( elem ) {
  elem.addEventListener('click', function() {
    var target = elem.attributes.target.value;
    [].forEach.call(document.querySelectorAll('.c-screen'), function( elem ) {
      elem.classList.remove('is-visible');
    });
    
    document.querySelector('#' + target).classList.add('is-visible');
    
  });
});


var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var template = Handlebars.compile(source);

var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = template(data);
