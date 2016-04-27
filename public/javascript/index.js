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


});
