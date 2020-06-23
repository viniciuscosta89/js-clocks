const clockContainer = document.querySelector('.clock__container')
const hourHand = document.querySelector('.analog-clock__hand--hour')
const minuteHand = document.querySelector('.analog-clock__hand--minute')
const secondHand = document.querySelector('.analog-clock__hand--second')

const updateAnalogClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  const hoursPosition = hours * 360 / 12 + ((minutes * 360 / 60) / 12)
  const minutesPosition = minutes * 360 / 60 + (seconds * 360 / 60) / 60
  const secondsPosition = seconds * 360 / 60

  const transformStyle = (number) => `translate(-50%, -100%) rotate(${number}deg)`

  hourHand.style.transform = transformStyle(hoursPosition)
  minuteHand.style.transform = transformStyle(minutesPosition)
  secondHand.style.transform = transformStyle(secondsPosition)
}

setInterval(updateAnalogClock, 1000)

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  const clockHTML = `
    <div>
      <span class="clock__time">${String(hours).length === 1 ? `0${hours}` : hours}</span> :
      <span class="clock__time">${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
      <span class="clock__time">${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
    </div>
  `

  clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)
