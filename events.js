$(document).ready(function() {
  $(".details").focus(function(){
    $(this).css("background-color", "#E1F5FE");
  });
  $(".details").blur(function(){
    $(this).css("background-color", "#ffffff");
  });
});
