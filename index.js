
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg`;
    // console.log(mins);


    const hour = now.getMinutes();
    const hoursDegrees = ((mins / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

document.querySelector("button").addEventListener("click", function(){
  document.querySelector("h2").innerHTML
})

function me(){
  const x = new Date();
  document.querySelector("h2").innerHTML = ( x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds());
}











setInterval(setDate, 1000);

setInterval(me, 1000);
