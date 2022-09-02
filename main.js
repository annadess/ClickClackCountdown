//credit: https://github.com/whorajK/Countdown-Timer-JS
let daysLeft = document.getElementById("days");
let hoursLeft = document.getElementById("hours");
let minuetesLeft = document.getElementById("minutes");
let secondsLeft = document.getElementById("seconds");

const timerDate = new Date("2022, sep, 06, 18:00:00 GMT+01:00").getTime();

let updateTimer = setInterval(() => {
	let now = new Date().getTime();

	let timeRemaining = timerDate - now + 1000;

	let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	let hours = Math.floor(
		(timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

	daysLeft.innerText = days;
	hoursLeft.innerText = hours;
	minuetesLeft.innerText = minutes;
	secondsLeft.innerText = seconds;

	if (timeRemaining < 0) {
		clearInterval(updateTimer);
	}
}, 1000);
