function countdownTimer(startTime, interval) {
  let remainingTime = startTime;

  const timerId = setInterval(() => {
    if (remainingTime <= 0) {
      console.log(0);
      clearInterval(timerId);
    } else {
      console.log(remainingTime);
      remainingTime -= interval;
    }
  }, interval * 1000);

  return timerId;
}


module.exports = { countdownTimer };
