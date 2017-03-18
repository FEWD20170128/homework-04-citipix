$(function() {
  
  //1. Create input options, and store them in an array
  var city = ["New York", "New York City", "NYC", "San Francisco", "SF", "Bay Area", "Los Angeles", "LA", "LAX", "Austin", "ATX", "Sydney", "SYD"];
  var citySubmitted = "default";

  //2. Listen for submit event on the form
  $("form").submit(getUserInput);

  //3. Create a function that will get the user's city input
  function getUserInput(event) {
    //Prevent the default behavior of the form
    event.preventDefault();

    console.log("city name submitted");

    //Create a function that will extract the user city input

    var citySubmitted = $("input").val();
    console.log("city entered:", citySubmitted);

    parseCityChoice(citySubmitted);
    
  }

   // 4. Create if/else statements for each city option
    function parseCityChoice(citySubmitted) {
      if (citySubmitted === "New York" || citySubmitted === "New York City" || citySubmitted === "NYC") {
        console.log("picture of nyc");
        $("body").css("background-image", "url(images/nyc.jpg)");
      }  else if (citySubmitted === "San Francisco" || citySubmitted === "SF" || citySubmitted === "Bay Area") {
        console.log("picture of sf");
        $("body").css("background-image", "url(images/sf.jpg)");
      } else if (citySubmitted === "Los Angeles" || citySubmitted === "LA" || citySubmitted === "LAX") {
        console.log("picture of LA");
        $("body").css("background-image", "url(images/la.jpg)");
      } else if (citySubmitted === "Austin" || citySubmitted === "ATX") {
        console.log("picture of Austin");
        $("body").css("background-image", "url(images/austin.jpg)");
      } else if (citySubmitted === "Sydney" || citySubmitted === "SYD") {
        console.log("picture of Sydney");
        $("body").css("background-image", "url(images/sydney.jpg)");
      } else {
        console.log("error");
      }
    }

});