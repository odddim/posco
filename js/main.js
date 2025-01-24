$(function(){
  $('.hamburger').click(function(){
    $(this).toggleClass('open')
    $('.site-header').fadeToggle()
    $('.lang').toggle()
  }
  )
  $('.lang a').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
  })

  $(window).scroll(function(){
    if($(window).scrollTop() >= 200) {
      $('header').addClass('on')
    }else{
      $('header').removeClass('on')
    }
    console.log($(window).scrollTop())
  })

  $('.scrolldown').click(function(e){
    e.preventDefault()
    $('html, body').animate({
      scrollTop : 1000
    },1000)
  })

  $('.swiper-pagination-bullet:nth-child(1)').click(function(){
    $('.bg1').css({
      top: '0px'
    })
  })
  $('.swiper-pagination-bullet:nth-child(2)').click(function(){
    $('.bg1').css({
      top: '100px'
    })
  })
  $('.swiper-pagination-bullet:nth-child(3)').click(function(){
    $('.bg1').css({
      top: '50px'
    })
  })

})