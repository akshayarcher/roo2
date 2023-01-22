const daysel = document.getElementById('days')
const hoursel = document.getElementById('hours')
const minsel = document.getElementById('mins')
const secondsel = document.getElementById('seconds')
const newyears = '12 feb 2023';
function countdown(){
    const newyeardate= new Date(newyears)
    const currentdate = new Date(); 
    const totalseconds = (newyeardate - currentdate) / 1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds/60) % 60; 
    const seconds = Math.floor(totalseconds) % 60; 
   console.log(days,hours,minutes, seconds);
    daysel.innerHTML = days;
    hoursel.innerHTML = hours;
    minsel.innerHTML = minutes;
    secondsel.innerHTML = seconds;
}
countdown();
setInterval(countdown, 1000);



