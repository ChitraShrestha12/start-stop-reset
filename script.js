let intervalId;
let i = 1;
const h1 = document.querySelector("h1");
function startBtn() {
  intervalId = setInterval(() => {
    console.log(i);
    h1.innerText = i;
    i++;
  }, 1000);
}

function stopBtn() {
  clearInterval(intervalId);
}

function clearBtn() {
  clearInterval(intervalId);
  i = 1;
  h1.innerText = 0;
}
