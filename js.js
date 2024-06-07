document.addEventListener("DOMContentLoaded", function () {
  const month = document.querySelector("#month");
  const day = document.querySelector("#day");
  const date = document.querySelector("#date");
  const year = document.querySelector("#year");
  const hours = document.querySelector(".time");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function updateDateTime() {
    let currentDate = new Date();

    let monthIndex = currentDate.getMonth();
    let dayIndex = currentDate.getDay();

    month.innerText = monthNames[monthIndex];
    day.innerText = dayNames[dayIndex];
    date.innerText = currentDate.getDate();
    year.innerText = currentDate.getFullYear();

    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let period = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let total = "Time: " + hour + ":" + minutes + ":" + seconds + " " + period;

    hours.innerText = total;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
});
