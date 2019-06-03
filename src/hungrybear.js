import $ from 'jquery';
export class HungryBear {

  constructor(name)
  {
    this.name = name;
    this.foodLevel = 100;
    this.sleepLevel = 100;
    this.playLevel = 100;
  }

  setHunger(){

    setInterval(()=>{
      if(this.foodLevel>0 && this.sleepLevel>0 && this.playLevel>0)
      {
        this.foodLevel --;
        this.sleepLevel --;
        this.playLevel --;
        $("#foodlevel").text(this.foodLevel);
        $("#sleeplevel").text(this.sleepLevel);
        $("#playlevel").text(this.playLevel);
        if(this.didYouGetEaten()){
          $("#hunger").text("I am hungry bear! feed me! ");
        }
      }

    },1000);

  }

  didYouGetEaten(){
    if(this.foodLevel>0){
      return false;
    }
    else {
      return true;
    }
  }

  feed(){
    this.foodLevel +=10;
  }
  play(){
    this.playLevel +=10;
  }

  sleep(){
    this.sleepLevel +=10;
  }
}
