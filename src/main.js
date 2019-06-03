import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { HungryBear } from './hungrybear.js';



$(document).ready(function(){


  $("#bear").submit(function(){
    let bear1;
    event.preventDefault();
    let bear = $('#name').val();
    $('#bearName').text(bear);
    $("#play").click(function(){
      bear1 = new HungryBear(bear);
      bear1.setHunger();
      $("#foodlevel").text(bear1.foodLevel);

    });
    $("#feed").click(function(){
      bear1.feed();
      $("#foodlevel").text(bear1.foodLevel);
  });
  $("#sleep").click(function(){
    bear1.sleep();
    $("#sleeplevel").text(bear1.sleepLevel);

  });

  $("#playbutton").click(function(){
    bear1.play();
    $("#playlevel").text(bear1.playLevel);

  });

  $("#picture").append("<img src=" + picgg + ">");
  });
});
