
$(function(){

  $('.veggies').on('click', function(){
    $(".dropdown-content-veggies").toggle("show");
    $(".dropdown-content-cheese").hide();
    $(".dropdown-content-meat").hide();
    $(".dropdown-content-dessert").hide();
  });

  $('.cheese').on('click', function(){
    $(".dropdown-content-cheese").toggle("show");
    $(".dropdown-content-veggies").hide();
    $(".dropdown-content-meat").hide();
    $(".dropdown-content-dessert").hide();
  });

  $('.meat').on('click', function(){
    $(".dropdown-content-meat").toggle("show");
    $(".dropdown-content-veggies").hide();
    $(".dropdown-content-cheese").hide();
    $(".dropdown-content-dessert").hide();
  });

  $('.dessert').on('click', function(){
    $(".dropdown-content-dessert").toggle("show");
    $(".dropdown-content-veggies").hide();
    $(".dropdown-content-cheese").hide();
    $(".dropdown-content-meat").hide();
  });

  // add click event to every item in dropdown menu...that:
  // 1. either highlights selected item or black filter over every 
  //    other item in dropdown menu
  // 2. grabs div id
  


  $(".dropdown-content-veggies > div").on('click', function(){
    console.log($(this).attr('id'));
    console.log(($(this)))
    // console.log($(this).'nth-child(2)')
    console.log($(':nth-child(2)', this))
    $(':nth-child(2)', this).value = $(this).attr('id');
    // v = $(this).attr('id');
  })

  $(".dropdown-content-cheese > div").on('click', function(){
    console.log($(this).attr('id'))
  })

  $(".dropdown-content-meat > div").on('click', function(){
    console.log($(this).attr('id'))
  })

  $(".dropdown-content-dessert > div").on('click', function(){
    console.log($(this).attr('id'))
  })


  // $('button').on('submit', function(){
  // wineMatch(v, c, m, d)
    
  // })

});


