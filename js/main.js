$(function() {
  // Nav
  $('nav li').click(function() {
    var n = $(this).index();
    $('html, body').animate({
      scrollTop : $('section').eq(n + 1).offset().top
    }) 

  })
   
  /*** MAIN ***/
  // Load
  $('header').hide()
  $('.goTop').hide()
  $('header h1').animate({'margin-top': '-200'})
  $('header nav').animate({'margin-right': '-200'})
  
  setTimeout(function(){
    $('#load').hide();
    $('header h1').animate({'margin-top': '0'},500)
    $('header nav').animate({'margin-right': '0'},1000)
    $('header').show()
    $('.goTop').show()
  },3500)

  // Index 
  $('.works_group a').hover(function() {
    $(this).css({'background' : 'rgba(0,0,0,0.7)'})
    $(this).children().animate({'padding-top' : '250px'})
    $(this).children().css({'display' : 'block'})
  }, function() {
    $(this).css({'background' : 'rgba(0,0,0,0)'})
    $(this).children().animate({'padding-top' : '400px'})
    $(this).children().css({'display' : 'none'})
  }) 

  //Works
  $(document).ready(function () {
	
    var colour = $("#overlay");
    var content = $("#hover");
    
    content.hide();
    colour.hide();	
      
    $("#container").hover(function() {
      content.stop().show().css({ "left" : "-100%" }).animate({left : 0}, 300);
      colour.stop().fadeTo(500, .7)
    }
    ,function() {
      content.stop().animate({left : 500}, 300);
      colour.stop().fadeTo(500, 0)
    });
  });

  // $('#works>li').hover(function() {
  //   var n2 = $(this).index(); 
  //   $('#works .work_list').eq(n2).css({'display' : 'block'})
  // },function(){
  //   $('#works .work_list').css('display', 'none')
  // })

  // $('.work_list').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // })

  // $('#works li').click(function() {
  //   var n2 = $(this).index(); 
  //   $('#works .work_list img').eq(n2).css({'width' : '100vw','height' : '100%'})
  // })

  // Portfolio
  // $('.tabs li').click(function() {
  //   var num = $(this).attr('class').substr(-1,1)//끝에서부터 1번째 글자
  //   $('.tabs li').not(this).removeClass('tab_on')
  //   $(this).addClass('tab_on')

  //   $('.contents>div').hide()
  //   $('.content' + num).show()
  // });

  // hi5ni
  // 이메일 호버하면 함께 일하고 싶어요 튀어나옴
  $('.contact').hover(function() {
    $('.msg').show()
  },function(){
    $('.msg').hide()
  })

  // Top 버튼
  $('.goTop').click(function() {
    $('html, body').animate({scrollTop : 0
    })
  })

})//ready()

