const alarmClock = function() {
  const arr = process.argv.slice(2);
  if (arr.length > 0) {
    for (let second of arr) {
      if (!isNaN(second) && second >= 0) {
        setTimeout(() => {
          console.log(`Beeping at ${second} seconds`);
        }, second * 1000);
      }
    }
  }
};


alarmClock();


