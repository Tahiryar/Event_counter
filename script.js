let eventNameInput = document.querySelector("#inputEvent");
let dateInput = document.querySelector("#inputDate");
let btn = document.querySelector("#EventBtn");

btn.addEventListener("click", () => {
    let dateTime = dateInput.value.split(" ");
    if (dateTime.length < 2) {
        alert("Please enter both date and time.");
        return;
    }
    
    let datePart = dateTime[0].split("-");
    if (datePart.length < 3) {
        alert("Please enter a valid date format (YYYY-MM-DD).");
        return;
    }

    let day = datePart[2]; // Extract day
    let month = datePart[1]; // Extract month
    let time = dateTime[1]; // Extract time

    let upcomingEvent = `${eventNameInput.value} - ${day}/${month} ${time}`;
    let eventDisplay = document.querySelector("#Event");
    eventDisplay.textContent = upcomingEvent;
});