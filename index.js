const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


const checkSeconds = (seconds) => {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  let secondsRes = seconds - (minutes * 60) - (hours * 3600);
  if(hours < 10) {
    hours = "0" + hours 
  }
  if(minutes < 10) {
    minutes = "0" + minutes 
  }
  if(secondsRes < 10) {
    secondsRes = "0" + secondsRes 
  }
  return [hours, minutes, secondsRes]
}

const createTimerAnimator = (seconds) => {
  
    let sec = seconds;

    const timeArr = checkSeconds(sec);
    timerEl.innerHTML = timeArr[0] + ":" + timeArr[1] + ":" + timeArr[2];

    const key = setInterval(() => {

    const timeArr = checkSeconds(sec -= 1);

      if(timeArr[2] <= 0) {
        timerEl.innerHTML = "00:00:00";
        clearInterval(key)
      }

    timerEl.innerHTML = timeArr[0] + ":" + timeArr[1] + ":" + timeArr[2];
    }, 1000)
};

inputEl.addEventListener('input', function() {
 // Проверка на ввод числа
 this.value = this.value.split("").filter(el => /\d/g.test(el)).join("")
});

buttonEl.addEventListener('click', function() {

  if(inputEl.value) {
    const seconds = +inputEl.value;

  createTimerAnimator(seconds);

  inputEl.value = '';
  }
  
});