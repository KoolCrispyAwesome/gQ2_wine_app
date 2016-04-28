
$(function(){
  $('input').hide();

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


  $(".dropdown-content-veggies > div").on('click', function(){
    $(".dropdown-content-veggies > div").attr('class', 'v')
    $(':nth-child(2)', this).prop('checked', true)
    $(this).toggleClass('selected')
  })

  $(".dropdown-content-cheese > div").on('click', function(){
    $(".dropdown-content-cheese > div").attr('class', 'c')
    $(':nth-child(2)', this).prop('checked', true)
    $(this).toggleClass('selected')
  })

  $(".dropdown-content-meat > div").on('click', function(){
    $(".dropdown-content-meat > div").attr('class', 'm')
    $(':nth-child(2)', this).prop('checked', true)
    $(this).toggleClass('selected')
  })

  $(".dropdown-content-dessert > div").on('click', function(){
    $(".dropdown-content-dessert > div").attr('class', 'd')
    $(':nth-child(2)', this).prop('checked', true)
    $(this).toggleClass('selected')
  })

});


