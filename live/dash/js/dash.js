$(function() {
  var $hero_desc = $('#heroDesc');
  
  console.log("attempting ajax");
  $.ajax({
    type: 'GET',
    url: 'http://tm-dash.herokuapp.com/transcend/msg',
    success: function(data) {
      console.log(data);
      $hero_desc.text(data.msg);
    }
  });
});
