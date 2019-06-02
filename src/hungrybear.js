import $ from 'jquery';
export class HungryBear {

  constructor(name)
  {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger(){

    setInterval(()=>{
      if(this.foodLevel>0)
      {
        this.foodLevel --;
        $("#foodlevel").text(this.foodLevel);
        if(this.didYouGetEaten()){
          $("#hunger").text("I am hungry bear! feed me! ");
        }
      }

    },100);

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
    this.foodLevel = 10;
  }
}
