$(function() {
  $(".change-devoured").on("click", function() {
    const id = $(this).data("id");
    const newDevour = $(this).data("newdevour");

    const newDevourState = {
      devoured : newDevour
    };

    $.ajax("/api/burgers/" + id, {
      type : "PUT",
      data : newDevourState
    }).then(function() {
      console.log("changed devoured to", newDevour);
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      burger_name : $("#ba").val().trim()
    };

    $.ajax("/api/burgers", {
      type : "POST",
      data : newBurger
    }).then(function() {
      console.log("Created new burger");
      location.reload();
    });
  });
});