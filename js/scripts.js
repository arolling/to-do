function item(itemName) {
  this.itemName = itemName;
}

$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();
    var userTask = $("input#item").val();

    $("ol#userList").append("<li><span class='task'>" + userTask + "</span></li>");
    $("input#item").val();

    $(".task").click(function () {
      console.log(this);
      $(this).wrap("<strike>");
      $(this).fadeOut("slow");
      $("ol#compList").append("<li><span class='tiger'>" + userTask +  "</span></li>");
    });

// FIXED SOME INDENTATION FOR EASIER READING

  });
});
