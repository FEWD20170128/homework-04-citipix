$(function() {

  // 1. declare cities able to be entered in an array
  var city = ["New York", "New York City", "NYC", "San Francisco", "SF", "Bay Area", "Los Angeles", "LA", "LAX", "Austin", "ATX", "Sydney", "SYD"]
  var citySubmitted = "default";

  // 2. listen for a "submit" event on the form
  $("form").submit(cityEntered);

    function cityEntered(event)  {

    event.preventDefault(); 

    console.log("city entered");

    // 3. extract the "city" entered
    var citySubmitted = $("#city-type").val();
    console.log("city entered: ", citySubmitted);

    cityChoice(citySubmitted);
  }

  // 4. create if/else statements for each city input
  function cityChoice(citySubmitted) {
    if (citySubmitted === "New York" || citySubmitted === "New York City" || citySubmitted === "NYC") {
      $("body").css("background-image", "url('images/nyc.jpg')");
      console.log("picture of New York");
    } else if (citySubmitted === "San Francisco" || citySubmitted === "SF" || citySubmitted === "Bay Area") {
      $("body").css("background-image", "url('images/sf.jpg')");
      console.log("picture of San Francisco");
    } else if (citySubmitted === "Los Angeles" || citySubmitted === "LA" || citySubmitted === "LAX") {
      $("body").css("background-image", "url('images/la.jpg')");
      console.log("picture of Los Angeles");
    } else if (citySubmitted === "Austin" || citySubmitted === "ATX") {
      $("body").css("background-image", "url('images/austin.jpg')");
      console.log("picture of Austin");
    } else if (citySubmitted === "Sydney" || citySubmitted === "SYD") {
      $("body").css("background-image", "url('images/sydney.jpg')");
      console.log("picture of Sydney");
    } else {
      console.log("error");
    }
  }
  
});