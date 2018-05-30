/* Task 1 */

var heading = document.getElementById('heading');

console.log(heading.innerText);

/* Task 2 using plain JavaScript */


function addText2() {
    var task2div = document.getElementById('task2a');
    var paragraph = document.createElement('p');
    paragraph.innerText = "Hello World";
    task2div.appendChild(paragraph);
}

var textBtn = document.getElementById('textBtn');
textBtn.addEventListener('click', addText2);

//Task 2b

function changeBgColor(event) {
    var body = document.getElementsByTagName('body')[0];
    if(event.target.innerText=="RED"){
        body.style.backgroundColor = 'red';
    }
    if(event.target.innerText=="GREEN"){
        body.style.backgroundColor = 'green';
    }
}

//Task 2c
function goToGoogle() {
    window.location.assign('https://www.google.com/');
}

/* Task 4 using jQuery */
