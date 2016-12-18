$(document).ready(function() {
  $('svg, main p').click(function() {
    $('nav ul').toggleClass('visible');
    $('iframe').toggleClass('squish');
  });

  $('#title').click(function() {
    $('#about').toggleClass('visible');
  });
});
