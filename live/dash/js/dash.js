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
  
  var $annc_list = $('<ul class="list-group"></ul>');
  var $list_location = $('.ajax-list');
  
  console.log("attempting ajax 2");
  $.ajax({
    type: 'GET',
    url: 'http://cheerchuck.me/transcend/index.php',
    dataType    :   'json',
    success: function(data) {
      console.log(data);
      for(var i=0; i < data.length; i++){ 
        var item = data[i]; 
        console.log(item);
        $annc_list.append($('<li class="list-group-item"></li>').text(item));
      }
      
      console.log($annc_list);
      $annc_list.appendTo($list_location);
    }
  });
});
