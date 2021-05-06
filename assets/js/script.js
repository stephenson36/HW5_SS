// variables //////////////////////////////////////////////////////////////////////

let task9am = document.getElementById('9am');
let storedTask9 = localStorage.getItem('storedTask9');
let task10am = document.getElementById('10am');
let storedTask10 = localStorage.getItem('storedTask10');
let task11am = document.getElementById('11am');
let storedTask11 = localStorage.getItem('storedTask11');
let task12pm = document.getElementById('12pm');
let storedTask12 = localStorage.getItem('storedTask12');
let task13pm = document.getElementById('13pm');
let storedTask13 = localStorage.getItem('storedTask13');
let task14pm = document.getElementById('14pm');
let storedTask14 = localStorage.getItem('storedTask14');
let task15pm = document.getElementById('15pm');
let storedTask15 = localStorage.getItem('storedTask15');
let task16pm = document.getElementById('16pm');
let storedTask16 = localStorage.getItem('storedTask16');
let task17pm = document.getElementById('17pm');
let storedTask17 = localStorage.getItem('storedTask17');

//pull info from local storage
task9am.children[1].textContent = localStorage.getItem('storedTask9');
task10am.children[1].textContent = localStorage.getItem('storedTask10');
task11am.children[1].textContent = localStorage.getItem('storedTask11');
task12pm.children[1].textContent = localStorage.getItem('storedTask12');
task13pm.children[1].textContent = localStorage.getItem('storedTask13');
task14pm.children[1].textContent = localStorage.getItem('storedTask14');
task15pm.children[1].textContent = localStorage.getItem('storedTask15');
task16pm.children[1].textContent = localStorage.getItem('storedTask16');
task17pm.children[1].textContent = localStorage.getItem('storedTask17');

// functions //////////////////////////////////////////////////////////////////////

$(document).ready(function() {

    function newTask(event) {

        let element = event.target;
        let task = element.parentElement.children[1].value;

        taskNumber = 'storedTask'+ element.parentElement.getAttribute('data-hour');
        // store in local storage
        localStorage.setItem(taskNumber,task);
    }

    $('.saveBtn').on('click',newTask);

    // update the color of the time period based on the current time
    function changeBackground() {

        let currentHour = moment().format('HH');
        let timeID = ['9am','10am','11am','12pm','13pm','14pm','15pm','16pm','17pm'];

        for(let i = 0; i < timeID.length; i++) {
            let timePeriod = document.getElementById(timeID[i]);

            if (parseInt(timePeriod.getAttribute('data-hour')) < currentHour) {
                timePeriod.classList.add('past');
            } else if(parseInt(timePeriod.getAttribute('data-hour')) == currentHour) {
                timePeriod.classList.add('present');
            } else {
                timePeriod.classList.add('future');
            }
        }

    }

    changeBackground();

    let todaysDate = moment();  //today's date
    $('#currentDay').text(todaysDate.format("MMMM Do, YYYY"));

})