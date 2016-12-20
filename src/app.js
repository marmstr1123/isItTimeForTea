const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function dateSet(){
   // console.log("hi");
   const now = new Date();
   const seconds = now.getSeconds();
   const secondsDegrees = ((seconds / 60) * 360) +90;
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   // console.log(seconds);
   const minutes = now.getMinutes();
   const minuteDegrees = ((minutes / 60) * 360) +90;
   minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
   console.log(minutes);
   const hour = now.getHours();
   const hourDegrees = ((hour/12) *360 ) + 90;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`
   console.log(hour)
}

setInterval(dateSet,1000);
