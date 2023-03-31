const timer = document.getElementById('timer')
const btn = document.querySelectorAll('.btn')
const btnStart = document.querySelector('.btn__work')
// const btnShort = document.querySelector('.btn__short')
// const btnLong = document.querySelector('.btn__long')
const btnStop = document.querySelector('.btn__stop')
const currentStatus = document.querySelector('.status')
const pomodoroStatus = 'focus'
const longBreakStatus = 'break time'
const shortBreakStatus = 'break time'
const favicon = document.querySelector('[rel=icon]')
let workTimeinMinutes = 25 * 60
let shortBreakInMinutes = 5 * 60
let longBreakInMinutes = 15 * 60
let countdown = -1

// create and object for each btn
const start = {
  // pass in the querySelector here too??? or leave it an rename it?
  timeToSet: '25:00',
  timeInMinutes: 25,
  statusToDisplay: pomodoroStatus,
  icon: '/img/red-checkmark-64.ico'
}


btn.forEach(button => button.addEventListener('click', function () {
  btnStop.style.display = 'inline'
  button.classList.add('active')
  updateDisplay(button)
}))

function updateDisplay(button) {
  console.log(button)
  // button needs to be 'start' at this point.....
  timer.innerHTML = button.timeToSet
  startTimer(button.timeinMinutes)
  currentStatus.innerHTML = button.statusToDisplay
  favicon.href = button.icon
}

function startTimer(time) {
    countdown = setInterval(() => {

      if (time <= 0) {
        timer.innerHTML = 'Time\'s up'
        btnStop.style.display = 'hidden'
      } else {
        time--
        const minutes = Math.floor(time / 60) % 60
        const seconds = Math.floor(time % 60)

        let currentTime = `${formatTime(minutes)}:${formatTime(seconds)}`
        timer.innerHTML = currentTime
        document.title = currentTime

      }
    }, 1000)
}

function formatTime(t) {
  return t < 10 ? `0${t}` : t
}