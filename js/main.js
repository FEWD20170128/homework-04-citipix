$(document).ready(function(){
  

  //1. listen for "submit" event on the form
  $('form').submit(function(event) {

    //2. prevent default behavior of form
    event.preventDefault();
 
    //console.log('this is citipix');

    //3. extract string name entered
    var city = $('#city-type').val();
    //console.log('city name entered ' + city);

    //4. change the background image and clear out input field
    // console.log('user clicked button')
    if (city === 'New York' || city === 'New York City' || city === 'NYC'){
      var bgimage = 'url(images/nyc.jpg)';
      changeImage(bgimage);
    } else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
      var bgimage = 'url(images/sf.jpg)';
      changeImage(bgimage);
    } else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
      var bgimage = 'url(images/la.jpg)';
      changeImage(bgimage);
    } else if (city === 'Austin' || city === 'ATX') {
      var bgimage = 'url(images/austin.jpg)';
      changeImage(bgimage);
    } else if (city === 'Sydney' || city === 'SYD') {
      var bgimage = 'url(images/sydney.jpg)';
      changeImage(bgimage);
    } // 5. If No city is entered but the button is clicked
      else if (city === '') {
      var bgimage = 'url(images/citipix_skyline.jpg)';
      changeImage(bgimage);
      alert('Enter A City!');
    } // 6. If the texgt entered is not one of the cities
      else {
      var bgimage = 'url(images/citipix_skyline.jpg)';
      changeImage(bgimage);
      alert('Woops! That City No Longer Exits. Try Again!');
        
      }
    


    function changeImage(image) {
      $('body').css('background-image', image);
      $('#city-type').val('');
    }

  });
  

});
