$(function() {
  
  //1. Create input options, and store them in an array
  var city = ["New York", "New York City", "NYC", "San Francisco", "SF", "Bay Area", "Los Angeles", "LA", "LAX", "Austin", "ATX", "Sydney", "SYD"];
  var citySubmitted = "default";

  //2. Listen for submit event on the form
  $("form").submit(getUserInput);
  $("form").submit(parseCityChoice);

  //3. Create a function that will get the user's city input
  function getUserInput(event) {
    //Prevent the default behavior of the form
    event.preventDefault();

    console.log("city name submitted");

    //Create a function that will extract the user city input

    var citySubmitted = $("input").val();
    console.log("city entered:", citySubmitted);
    
  }

   // 4. Create if/else statements for each city option
    function parseCityChoice(event) {
      event.preventDefault();
      if (citySubmitted === "New York" || "New York City" || "NYC") {
        console.log("picture of nyc");
      }  else if (citySubmitted === "San Francisco" || "SF" || "Bay Area") {
        console.log("picture of sf");
      } else if (citySubmitted === "Los Angeles" || "LA" || "LAX") {
        console.log("picture of LA");
      } else if (citySubmitted === "Austin" || "ATX") {
        console.log("picture of Austin");
      } else if (citySubmitted === "Sydney" || "SYD") {
        console.log("picture of Sydney");
      } else {
        console.log("error");
      }
    }

});