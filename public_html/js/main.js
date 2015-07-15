//$("#ubercode").click(function(){
//    var r = document.createRange();
//    var w=$("#ubercode");
//    r.selectNodeContents(w); 
//    var sel=window.getSelection(); 
//    sel.removeAllRanges(); 
//    sel.addRange(r);
//});
$('[data-toggle="tooltip"]').tooltip();
$('#ubercode').click(function(){
    $('#ubercode').tooltip('show');
    $('#lyftcode').tooltip('hide');
});
$('#lyftcode').click(function(){
    $('#lyftcode').tooltip('show');
    $('#ubercode').tooltip('hide');
});
// $(window).scroll(function(){
//     $('.tooltip').css('position', 'fixed');
// });