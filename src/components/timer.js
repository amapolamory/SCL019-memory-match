x
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
      //  else {
      //   document.getElementById("verifiBtn").innerHTML = `
      //       <div class="Btn" id="ResendBtn">
      //           <button type="submit">Resend</button>
      //       </div>
      //   `;
      //   document.getElementById("counter").innerHTML = "";
      // }
    }
    tick();
  }
  countdown();

export default countdown;