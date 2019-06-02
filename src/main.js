import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { HungryBear } from './hungrybear.js';

$(document).ready(function(){

  $("#bear").submit(function(){
    event.preventDefault();
    let bear = $('#name').val();
    $('#bearName').text(bear);
    $("#play").click(function(){
      let bear1 = new HungryBear(bear);
      bear1.setHunger();
      $("#foodlevel").text(bear1.foodLevel);

    });
  });
});
