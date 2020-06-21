/*accordion */

$("#accordion").accordion();

$(document).ready(function(){
  $(".acc-head").click(function(){
    $(".acc-head").removeClass('active')
    $(this).addClass('active')
  })
});

/* switch*/ 
var checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change',function(){
  if(this.checked){
trans()
document.documentElement.setAttribute('data-theme', 'dark')
  }else {
    trans()
document.documentElement.setAttribute('data-theme', 'light')
  }
})

/*play-pause*/ 
$('video').each(function(i,el){
   var video = $(el).parent();

   $('.play-pause', video).click(function(){
     if ($(this).hasClass('active')) {
       $(this).removeClass('active');
       el.pause();
     } else {
      $(this).addClass('active');
      $('i').toggleClass('active')
      el.play();
     }
   });
});

$('video').each(function (i, el){
  var v1 = $(el).parent();
  var videoT = videojs(el);

    $('video', v1).on('timeupdate', function(){
    var time = videoT.currentTime();
    var duration = videoT.duration();
    
    console.log(time);

    var v2= $(el).parent();

    if( time>= duration) {
      console.log('einde!')

      v2.append('<div class="modal-popup"><div class="popup"><p>Einde van deze video! Kijk de volgende <br> om verder te gaan met de workshop</p><button>Close</button></div></div>');
    }
    });
});

/*play-b en play-f buttons */
$('video').each(function(i, el){
  var videoH = $(el).parent();
  var btnr = document.querySelector('.play-b');
  var btnf = document.querySelector('.play-f');

  $(btnr, videoH).click(function(){
   el.currentTime = el.currentTime - 10;
  });

  $(btnf, videoH).click(function(){
    el.currentTime = el.currentTime + 10;
   });
});

  /*hover */
$('.video-js').hover(function(){
  $('.controls').css({
    'opacity': '100%',
  });
}, function(){
  $('.controls').css({
    'opacity': '0',
})
});

/*transition*/
let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000)
}

/*slider*/ 
$(document).ready(function(){

  $('.slider-wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    responsive:[
    {
     breakpoint: 1024,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2,
     }
    },
    {
     breakpoint: 667,
     settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
  }
}]
  
  });

});