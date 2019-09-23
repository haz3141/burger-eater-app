$(function() {
  $(".change-devoured").on("click", function() {
    const id = $(this).data("id");
    const newDevour = $(this).data("newdevour");

    const newDevourState = {
      devoured : newDevour
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      console.log("changed devoured to", newDevour);
      location.reload();
    });
  });

  
});

// $(function() {
//   $(".devour").on("click", function(event) {
//       let id =$(this).data("id");
//       let devourNow = $(this).data("devournow");

//       let newDevouredState = {
//           devoured: devourNow
//       };

//   $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: newDevouredState
//   }).then (
//       function() {
//           console.log("changed devoured to", newDevouredState);
//           location.reload();
//       }
//   );
// });

//   $(".create-burger-form").on("submit", function(event) {
//       event.preventDefault();

//       let newBurger = {
//           burger_name: $("#addburger").val().trim(),
//           devoured: 0
//       };

//       $.ajax("/api/burgers", {
//           type: "POST",
//           data: newBurger
//       }).then(
//           function() {
//               console.log("created", newBurger);
//               location.reload();
//           }
//       );
//   });
// });
