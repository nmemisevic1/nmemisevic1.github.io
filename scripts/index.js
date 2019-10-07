// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAgbF4zsBgfSGYfDMlxzXKbkr1J8SdQPxw",
  authDomain: "nmemisevic1portfolio.firebaseapp.com",
  databaseURL: "https://nmemisevic1portfolio.firebaseio.com",
  projectId: "nmemisevic1portfolio",
  storageBucket: "nmemisevic1portfolio.appspot.com",
  messagingSenderId: "247580151493",
  appId: "1:247580151493:web:58d429adf3331a27592aac"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference ips collection
var visits = firebase.database.ref('Visits');


$(function() {

  var isMobile;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
   isMobile = true;

   // Mobile height fix
   $('.height-fix').each(function(){
    var h = $(this).height();
    $(this).height(h)
   })
  }

  // RESIZE RESETS
  $(window).resize(function(){
    posFilterBar($('.filter').first());
  });

  // Sticky Nav on Mobile
  if (isMobile) {
    $('nav').addClass('fixed');
  } else {
    $('nav').addClass('desk');
  }


  // NAV POSITION
  var navPos = $('nav').position().top;
  var lastPos = 0;
  var lockTimer

  $(window).on('scroll', function () {

    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    var scrollBottom = pos + $(window).height();

    if (!isMobile) {
      if (pos >= navPos + $('nav').height() && lastPos < pos) {
        $('nav').addClass('fixed');
      }
      if (pos < navPos && lastPos > pos) {
        $('nav').removeClass('fixed');
      }
      lastPos = pos;
    }

    // Link Highlighting
    if (pos2 > $('#home').offset().top)       { highlightLink('home'); }
    if (pos2 > $('#about').offset().top)      { highlightLink('about'); }
    if (pos2 > $('#portfolio').offset().top)  { highlightLink('portfolio'); }
    //if (pos2 > $('#blog').offset().top)       { highlightLink('blog'); }
    if (pos2 > $('#contact').offset().top ||
        pos + $(window).height() === $(document).height()) {
          highlightLink('contact');
    }

    // Prevent Hover on Scroll
    clearTimeout(lockTimer);
    if(!$('body').hasClass('disable-hover')) {
      $('body').addClass('disable-hover')
    }

    lockTimer = setTimeout(function(){
      $('body').removeClass('disable-hover')
    }, 500);
  });

  function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $("nav").find('[dest="' + anchor + '"]').addClass('active');
  }


  // EVENT HANDLERS
  $('.page-link').click(function() {
    var anchor = $(this).attr("dest");
    $('.link-wrap').removeClass('visible');

    $('nav span').removeClass('active');
    $("nav").find('[dest="'+ anchor +'"]').addClass('active');

    $('html, body').animate({
      scrollTop: $('#' + anchor).offset().top
    }, 400);
  });

  $('.mdi-menu').click(function() {
    $('.link-wrap').toggleClass('visible');
  });

  $('.blog-wrap').hover(  function() {
    $('.blog-wrap').not(this).addClass('fade');
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
    $('.blog-wrap').removeClass('fade');
  });

  posFilterBar($('.filter').first());

  $('.filter').click(function(){
    posFilterBar(this);
  });

  function posFilterBar(elem) {
    var origin = $(elem).parent().offset().left;
    var pos = $(elem).offset().left;
    $('.float-bar').css({
      left: pos - origin,
      width: $(elem).innerWidth()
    });
    $('.float-bar .row').css('left', (pos - origin) * -1);
  }

  // GALLERY
  $('#gallery').mixItUp({ });

  function mixClear() {
    setTimeout(function() { $('#gallery').removeClass('waypoint') }, 2000);
  }

  // SCROLL ANIMATIONS
  function onScrollInit( items, elemTrigger ) {
    var offset = $(window).height() / 1.6
    items.each( function() {
      var elem = $(this),
          animationClass = elem.attr('data-animation'),
          animationDelay = elem.attr('data-delay');

          elem.css({
            '-webkit-animation-delay':  animationDelay,
            '-moz-animation-delay':     animationDelay,
            'animation-delay':          animationDelay
          });

          var trigger = (elemTrigger) ? trigger : elem;

          trigger.waypoint(function() {
            elem.addClass('animated').addClass(animationClass);
            if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
            },{
                triggerOnce: true,
                offset: offset
          });
    });
  }

  setTimeout(function() { onScrollInit($('.waypoint')) }, 10);
  
  // CONTACT FORM
  /*$('#contact-form').submit(function(e) {
    e.preventDefault();
    $.post('https://formspree.io/nmemisevic1@gmail.com', {name: name, email: email, message: message})
      /*$.ajax({
          url: "https://formspree.io/nmemisevic1@gmail.com",
          method: "POST",
          data: { message: $('form').serialize() },
          dataType: "json"
      }).done(function(response) {
          $('#success').addClass('expand');
          $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
      });*/
    /*});*/

  $('#close').click(function() {
    $('#success').removeClass('expand');
  })

});
function registerVisit(){
  var ipAddress;
  /*$.getJSON("http://jsonip.com?callback=?", function (data) {
        this.ipAddress = data.ip;

  });
  alert("Your ip address: " + ipAddress);*/
  $.getJSON('https://ipapi.co/json/', function(data) {
  var JSONObject = JSON.parse(JSON.stringify(data,null,2));
  //console.log(JSON.stringify(data, null, 2));
  console.log(JSONObject.ip);
  console.log(JSONObject.city);
  console.log(JSONObject.country_name);
  saveVisit(JSONObject.ip,JSONObject.city,JSONObject.country_name);
});
}
function saveVisit(IPAddress,City,Country){
  var newVisit = visits.push();
  newVisit.set({
    IPAddress: IPAddress,
    Country: Country,
    City: City
  })
}