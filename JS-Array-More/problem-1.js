const calculateSleepTime = (arr) => {
    let totalSec = 0;

    for(const second of arr){
        if(!Number.isInteger(second))return "Invalid";
        totalSec += second;
    }
   
    const hours = parseInt(totalSec /3600);
    totalSec = totalSec % 3600;
    const minutes = parseInt(totalSec / 60)
    const seconds = totalSec % 60;

    const timeObj = {hour: hours,
        minute:minutes,
        second:seconds,
    };

  
    return timeObj;
   
}

const timeArray =[100, 3800, "90" ];

console.log(calculateSleepTime(timeArray));
