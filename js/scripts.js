$(function() {

// Listen for click event on "Update" button

$('#submit-btn').click(getCity);

// Get user input in "City Name" field and store it in a variable

function getCity() {

  // Prevent a form submission

  event.preventDefault();

  // Store user input in variable "city"

  var city = $('#city-type').val();

  // Call function "changeBackground"

  changeBackground (city);
}

// Change background image via CSS class based on user entry

function changeBackground(city) {
  if (city === 'New York' || city === 'New York City' || city === 'NYC') {
    $('body').attr('class','nyc');
  }
  else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
    $('body').attr('class','sf');
  }
  else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
    $('body').attr('class','la');
  }
  else if (city === 'Austin' || city === 'ATX') {
    $('body').attr('class','austin');
  }
  else if (city === 'Sydney' || city === 'SYD') {
    $('body').attr('class','sydney');
  }
}

});