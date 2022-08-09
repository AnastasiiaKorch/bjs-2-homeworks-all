class AlarmClock {
  constructor (){
    this.alarmCollection = [];
    this.timerId = null
    };

    addClock (time, callback, id){
    if (typeof id === "undefined") {
    throw new Error ("error of text")
    }
     else if (typeof this.alarmCollection.find (clock => clock.id === id) !=="undefined" ){
     console.error("the alarm already exist")
     }
    }

}