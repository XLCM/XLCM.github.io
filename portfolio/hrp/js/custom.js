$("#menu-btn").click(function(){
  $('#sidebar-menu')
  .sidebar('setting', 'transition', 'overlay')
  .sidebar('toggle')
});
$('#menu-dropdown').dropdown({ transition: 'fade down' });
$('.popup').popup({on: 'click'});
