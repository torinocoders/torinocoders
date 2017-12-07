
$(document).ready(function() {
  $.ajax({
    dataType: 'jsonp',
    url: 'https://wind-bow.glitch.me/twitch-api/streams/OgamingSC2',
    contentType: 'application/json',
    success: function(json) {
      // Here's where you handle a successful response.
      console.log(json);
    },

  });
});

  /*["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]*/
