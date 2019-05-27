// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devour-burger").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("#devoured");

    var newDevourState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("Ready to devour", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),

    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour-burger").on("click", function (event) {
    var id = $(this).data("id");
    event.preventDefault();

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "POST"
    }).then(
      function () {
        console.log("devoured burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
//updat

// $(".devour-burger").on("click", function (event) {
//   event.preventDefault();
//   var id = $(this).data("#devoured");

//   var updatedBurger = {
//     devoured: true
//   };

//   $.ajax("/api/burgers/" + id, {
//     type: "PUT",
//     data: updatedBurger
//   }).then(function () {
//     console.log("updated id ", id);
//     location.reload();
//   });
// });


