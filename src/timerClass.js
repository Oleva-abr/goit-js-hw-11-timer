export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
    this.daysSpan = document.querySelector(
      `${selector} .value[data-value="days"]`,
    );
    this.hoursSpan = document.querySelector(
      `${selector} .value[data-value="hours"]`,
    );
    this.minutesSpan = document.querySelector(
      `${selector} .value[data-value="mins"]`,
    );
    this.secondsSpan = document.querySelector(
      `${selector} .value[data-value="secs"]`,
    );
  }

  padtime(value) {
    return value.toString().padStart(2, '0');
  }

  countDowm() {
    const currentTime = new Date();
    this.getTimeComponents(currentTime);
    // console.log(currentTime);
  }

  showTime() {
    setInterval(() => this.countDowm(), 1000);
  }

  getTimeComponents(currentTime) {
    const time = this.targetDate - currentTime;
    this.secondsSpan.textContent = this.padtime(Math.floor((time / 1000) % 60));
    this.minutesSpan.textContent = this.padtime(
      Math.floor((time / 1000 / 60) % 60),
    );
    this.hoursSpan.textContent = this.padtime(
      Math.floor((time / (1000 * 60 * 60)) % 24),
    );
    this.daysSpan.textContent = this.padtime(
      Math.floor(time / (1000 * 60 * 60 * 24)),
    );
  }
}
