
// function countdown() {
//   let seconds = 59;
//   function tick() {
//     let counter = document.getElementById('minute');
//     seconds--;
//     counter.innerHTML =
//       "0:" + (seconds < 10 ? "0" : "") + String(seconds);
//     if (seconds > 1) {
//       setTimeout(tick, 1000);
//     }
//     console.log(tick);
//   }
//   tick();
// }
// countdown();

// export default countdown;

// chrono.addEventListener('click', function () {
//     if (document.getElementById('chrono').clicked == true) {
//       const timeCounter = document.getElementsByClassName('minute');
//       let timeSecond = 5;
    
//       displayTime(timeSecond);
//       const countdown = setInterval(() => {
//         timeSecond--;
//         displayTime(timeSecond);
//         timeCounter.innerHTML = `00:${timeSecond}`;
//         if (timeSecond <= 0 || timeSecond < 1) {
//           endTime();
//           clearInterval(countdown)
//         }
//       }, 1000)

//       function displayTime(second) {
//         const min = Mathfloor(second / 60);
//         const sec = Mathfloor(second % 60);
//         timeCounter.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''} ${sec}`
//       }
//       function endTime() {
//         timeCounter.innerHTML = 'TIME OUT';
//       }
//     }
//   })