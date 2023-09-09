const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const counterTimer = document.querySelector(".counterTimer");
const heading = document.querySelector("h1");


const second = 1000;
const minute = 60 * second;
const hour = 60 * minute ;
const day = 24 * hour ;


//since timer hai toh hume given date ye distance chaiye in short 

const timeFunction = ()=>{


    //generating cureent time
    let  now = new Date();
    let dd = String(now.getDate()).padStart(2 , "0"); //max length 2 agar 1 hua to add 0
    let mm = String(now.getMonth() + 1 ).padStart(2 , "0");
    yyyy = now.getFullYear(); 

    //converting into string to have conditions in padStart 
    const enterDay = prompt("Enter Day").padStart(2,"0");
    const enterMonth = prompt("Enter Month").padStart(2,"0");

    now = `${mm}/${dd}/${yyyy}`;
   
    let targetDate = `${enterMonth}/${enterDay}/${yyyy}`;

    // if given date is less than target than year+1 
    if (now > targetDate){
        targetDate = `${enterMonth}/${enterDay}/${yyyy+1}`;
    }
    

    const interval = setInterval(()=>{

    const timer = new Date(targetDate).getTime();

    const today = new Date().getTime();

    const difference = timer - today ;

    const leftDay = Math.floor(difference / day );
    const leftHour = Math.floor( (difference % day) / hour );
    const leftMinute = Math.floor( (difference % hour )  / minute );
    const leftSecond = Math.floor( difference % minute / second );

    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;
    
    //when timer ends condition
    if (difference < 0){

        counterTimer.style.display = "none";
        heading.innerText ="Time IS Up";
        clearInterval(interval);
    }

    
    } ,0);
     

   
}

timeFunction();
