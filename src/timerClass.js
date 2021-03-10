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
}
