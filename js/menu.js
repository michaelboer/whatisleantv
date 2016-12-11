$(document).ready(function() {
  $('svg, main p').click(function() {
    $('nav').toggleClass('visible');
    $('iframe').toggleClass('squish');
  });
});
