$(document).ready(function() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude+"", function(json){
        //$(".info").html(JSON.stringify(json));
        var temperature = Math.round(json.main.temp);
        var response =  '<h2 class="location">'+json.name+', <span class="country">'+json.sys.country+'</span></h2>'+
                        '<p class="meteo">'+
                        '<img class="icon" src="'+json.weather[0].icon+'" alt="" />'+
                        '<span class="desc">'+json.weather[0].description+'</span>, '+
                        '<span class="temp">'+temperature+'</span>°C'+
                        '</p>';

        /*switch(json.weather[0].main) {
          case "Clouds":
              $('body').css('background-color','#f5f5f5');
              break;
          case "Clear":
              $('body').css('background-color','#ffffe0');
              break;
          default:
              $('body').css('background-color','#fff');
        }*/

        //altri valori
        $('.temp').text(json.main.temp);
        $('.humidity').text(json.main.humidity);
        $('.pressure').text(json.main.pressure);
        $('.temp_max').text(json.main.temp_max);
        $('.temp_min').text(json.main.temp_min);
        $('.windspeed').text(json.wind.speed);

        /*
        //ciclo per stampare tutte i risultati dentro la chiave main
        //non mi piace la soluzione perchè le chiavi potrebbero avere un valore qualunque e gestire tutti i casi della formattazione prima di stamparli non mi sembra efficiente
        for (var property in json.main) {
          if (json.main.hasOwnProperty(property)) {
              var row = '<div class="row justify-content-center">'+
                        '<div class="col-3">'+property.charAt(0).toUpperCase() + property.slice(1).replace('_',' ')+'</div>'+
                        '<div class="col-3">'+json.main[property]+'</div>'+
                        '</div>';
          }
          $(".more-info").append(row);
        };
        */
        $(".info").append(response);

      });
    });
  }else{
    $(".info").html("Non è stato possibile identificare la posizione");
  }

  $('.btn').click(function(){
    $('.more-info').slideToggle();
  });
});
