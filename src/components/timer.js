
function countdown() {
  let seconds = 59;
  function tick() {
    let counter = document.getElementById('minute');
    seconds--;
    counter.innerHTML =
      "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 1) {
      setTimeout(tick, 1000);
    }
    console.log(tick);
  }
  tick();
}
countdown();

export default countdown;