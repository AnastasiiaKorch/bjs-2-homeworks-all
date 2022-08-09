//задача 1
class AlarmClock {
  constructor (){
    this.alarmCollection = [];
    this.timerId = null
    };

    addClock (time, callback, id){
    if (typeof id === "undefined") {
    throw new Error ("error of text")
    }
     else if (typeof this.alarmCollection.find ((clock) => clock.id === id) !=="undefined" ){
     console.error("the alarm already exist")
     }
    this.alarmCollection.push({"id": id,
                               "time": time,
                               "callback": callback});
    }

    removeClock(id){
             this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
         }

    getCurrentFormattedTime (){
             let current = new Date();
                      let hours = current.getHours();
                      let minutes = current.getMinutes();

                      if (hours < 10) {
                          hours = '0' + hours;
                      }

                      if (minutes < 10) {
                          minutes = '0' + minutes;
                      }

                      return hours + ':' + minutes;
         }

     start(){
       let checkClock = (clock) => {
         if(this.getCurrentFormattedTime() === clock.time) {
                     clock.callback();
         }

         if (this.timerId !== null) {
                        this.timerId = setInterval(() => {this.alarmCollection.forEach((clock) => checkClock(clock))}, 1000);
         }
       }
     }

     stop() {
             if (this.timerId !== null) {
                 clearInterval(this.timerId);
             }
             this.timerId = null
     }

     printAlarms(){
              this.alarmCollection.forEach(clock => {
                  console.log(`Будильник ${clock.id} заведен на ${clock.time}`);
              })
          }

     clearAlarms(){
              this.alarmCollection = [];
          }



}
function testCase() {
     let phoneAlarm = new AlarmClock();
   phoneAlarm.addClock("09:00", () => console.log("Пора вставать"), 1);
   {
   phoneAlarm.addClock("09:01", () => {
       console.log("Давай, вставай уже!");
   phoneAlarm.removeClock(2)
 }, 2);
  phoneAlarm.addClock("09:02", () => {
      console.log("Вставай, а то проспишь!");
      phoneAlarm.clearAlarms();
      phoneAlarm.printAlarms();
  }, 3);
 phoneAlarm.printAlarms()
 phoneAlarm.start();
}
}
testCase();
