$(document).ready(function () {

    $("body .photography #photos img").click(function () {
        var img = $(this);
        var src = img.attr('src');
      $("body .photography").append("<div class='substrate'>" +
        "<div class='substrate-bg'></div>" +
        "<img src=" + src + " class='substrate-img' />" +
        "</div>");
      $(".substrate").fadeIn(300);
      $(".substrate-bg,.substrate-img").click(function () {
        $(".substrate").fadeOut(300);
        document.getElementById("photos").style.display = "block";
        setTimeout(function () {
          $(".substrate").remove();
        }, 300);
      });
    });
  
  });
  