$(document).ready(function(){

  // MODAL
  var modalText = {
    whisperer: {
      title: 'Betting whisperer',
      tag: 'DATA SCIENCE. C#, Python',
      detail: 'I scraped all data I needed from a website that provides scores and stats. Then I started making my own parameters and in some really short time I had a result. It was not so bad, but still had a lot of to do. Then I included machine learning, logistic regression, to really make parameters work, and BAM! Betting whisperer started working with high accuracy. In 20 games he predicted 18 correctly which gives him accuracy percentage of 90%, which is really good. Used tools: C#, Python, ML, (I/O) Local files',
      //link: 'http://www.roambi.com'
    },
    asml: {
      title: 'ASML Hackathon 2018',
      tag: 'DATA SCIENCE.',
      detail: 'In September 2018, I did some challenge on codility.com. Week later I got email that says I am in top 50 of 1200 contestants and invited to attend Hackathon in Eindhoven, NL. With all costs covered, I went to Eindhoven and attended big Hackathon in ASML, 1st tech company in the world. I made some friends and had a pretty good time there.',
    },
    epbih: {
      title: 'JPEPBIH 2018 Hackathon',
      tag: 'MOBILE DEVELOPMENT, AI',
      detail: 'In late 2018. I attended Hackathon in main Electrical Company in BA. The main problem was Enhancing customer relationships through the mobile app, AI and chatbots. Used tools: Xamarin',
      //link: 'http://www.powur.com/with/42'
    },
    quizzy: {
      title: 'Quizzy',
      tag: 'MOBILE DEVELOPMENT',
      detail: 'As a project for subject "Mobile apps development, I made this Quiz app in which you can make Quizzes along their categories and questions. App works both Online and Offline. Used tools: Java(Android),(I/O) Firebase,Local Database',
    },
    keno: {
      title: 'KENO Lottery',
      tag: 'DATA SCIENCE. DATA ANALYSIS',
      detail: 'For a customer in Croatia in 2015, I made lottery program that makes statistics for billions of combinations in couple of seconds no matter how large dataset was. Used tools: Raw C++, (I/O) Local files',
    },
    themall: {
      title: 'The Mall',
      tag: 'PEER GUIDED SHOPPING.',
      detail: 'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.',
    }
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background: "url('img/slides/" + id + '-' + index + ".png') center center/cover",
        backgroundSize: 'cover'
      });
              
    });
  }
})
