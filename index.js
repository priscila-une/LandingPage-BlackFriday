
function countdown(){
    const blackFriday = new Date("Nov, 29, 2021 00:00:00").getTime();
    const dateNow = new Date().getTime();
    const countdownTime = blackFriday - dateNow;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const textDay = Math.floor(countdownTime / days);
    const textHour = Math.floor((countdownTime % days) / hours);
    const textMinute = Math.floor((countdownTime % hours)/ minutes);

    document.getElementById('days').innerHTML = textDay;
    document.getElementById('hours').innerHTML = textHour;
    document.getElementById('minutes').innerHTML = textMinute;
}

countdown();

function saveOnStorage () {
    let input = document.getElementById('inputEmail').value;
    localStorage.setItem('email', input);
};
