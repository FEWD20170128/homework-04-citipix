$(function() {


// listen for a click on the submit button, and run the function to pull the input
  $('#submit-btn').click(parseCityInput);
    console.log ('click heard');

    function parseCityInput() {

      // prevent user inputs from being submitted as a form
      event.preventDefault();

      // read the input submitted by the user and store it as a variable
      var city = $('#city-type').val();
      console.log ('user entered:' + city);
      changeBackgroundImage (city);
    }

  // check what the user entered, and and a new class to the body that changes if the background image if it's one of 6 cities
  function changeBackgroundImage (cityName) {

    if (cityName === 'New York' || cityName === 'New York City' || cityName === 'NYC') {
      $('body').attr('class', 'nyc');
    }

    else if (cityName === 'San Francisco' || cityName === 'SF' || cityName === 'Bay Area') {
      $('body').attr('class', 'sf');
    }

    else if (cityName === 'Los Angeles' || cityName === 'LAX' || cityName === 'LA') {
      $('body').attr('class', 'la');
    }

    else if (cityName === 'Austin' || cityName === 'ATX') {
      $('body').attr('class', 'austin');
    }

    else if (cityName === 'Sydney' || cityName === 'SYD') {
      $('body').attr('class', 'sydney');
    }

  }

});