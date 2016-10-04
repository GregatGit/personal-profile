var viewportHeight = $(window).height();
$('#sectionHome').css("height", viewportHeight);
$('#sectionAbout').css("height", viewportHeight);

$(window).resize(function() {
  viewportHeight = $(window).height();
  $('#sectionHome').css("height", viewportHeight);
  $('#sectionAbout').css("height", viewportHeight);
});
 $("#email").attr({
    href: ("mailto:gregdd@outlook.com?subject=contact_from_website&body=Hello")
  });
$("#email1").attr({
    href: ("mailto:gregdd@outlook.com?subject=contact_from_website&body=Hello")
  });