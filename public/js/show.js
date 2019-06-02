$(document).ready(function() {
  // $('li').on('click',function(){
  //     $(this).toggleClass("done");
  // }); Doesnt work on new appends

  $("ul").on("click", "li", function() {
    $(this).toggleClass("done");
  });

  $("ul").on("click", ".fas", function(e) {
    $(this)
      .parent()
      .fadeOut(300, function() {
        $(this).remove();
      });
    e.stopPropagation();
  });

  $("#add").on("click", function() {
    if ($(this).text() === "+") {
      $(this).text("-");
    } else {
      $(this).text("+");
    }

    $("input").val("");
    $("input").slideToggle(250);
  });

  $("input").on("keypress", function(e) {
    if (e.which === 13 && $("input").val() != "") {
      var s = $("input").val();
      $("ul").append(
        '<li class="todos"><button class="icons btn"><i class="fas fa-trash-alt"></i></button><span class="todotext">' +
          s +
          "</span></li>"
      );
      $("input").val("");
      $("#add").text("+");
      $("input").slideUp(250);
    }
  });

  $("ul").on("click", ".far", function(e) {
    var s = $(this)
      .parent()
      .text();
    $("input").slideDown(100);
    $("input").val(s);
    $(this)
      .parent()
      .fadeOut(300, function() {
        $(this).remove();
      });
    e.stopPropagation();
  });
});
