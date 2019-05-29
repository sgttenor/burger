
//Create burgers and posting them to "Burgers to Eat"
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

  $(".devour-burger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
        devoured: true
    };
    console.log("Burger devoured");
    // Send the POST request.
    $.ajax("/api/burgers" + id, {
        type: "POST",
        data: devouredState
    }).then(function() {
        
        location.reload();
    });
});

