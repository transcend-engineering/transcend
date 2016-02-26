$(function() {
  var $hero_desc = $('#heroDesc');
  
  console.log("attempting ajax");
  $.ajax({
    type: 'GET',
    url: 'https://73c3c3fd.ngrok.com/transcend/msg',
    success: function(data) {
      console.log(data);
      $hero_desc.text(data.msg);
    }
  });
});
