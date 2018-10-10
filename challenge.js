let counter = document.getElementById('counter');

function incrementSeconds() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

let setInt = setInterval(incrementSeconds, 1000)

let minus = document.getElementById('-');

minus.addEventListener("click", function(event) {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
})

let plus = document.getElementById('+');

plus.addEventListener("click", function(event) {
    incrementSeconds();
})

//event listener 
//function that creates ul
//keep track of clicks on a time
let heart = document.getElementById('<3');
let ul = document.querySelector('ul');
const obj = {}

heart.addEventListener("click", function(event) {

    if (Object.keys(obj).includes(counter.innerHTML)) {
        obj[counter.innerHTML] += 1
    } else {
        obj[counter.innerHTML] = 1
    }
    
    ul.innerHTML ="";

    for (key in obj) {
        ul.innerHTML += `<li>${key} has been liked ${obj[key]} times</li>`
    }
})

let pause = document.getElementById('pause');

pause.addEventListener("click", function(event) {
    if (pause.innerText === "pause") {
        pause.innerText = "resume";
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
        clearInterval(setInt);
    } else {
        pause.innerText = "pause";
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
        setInt = setInterval(incrementSeconds, 1000)
    }
    
})

let submit = document.getElementById('submit');
let list = document.getElementById('list');

submit.addEventListener("click", event => {
    event.preventDefault();
    list.innerHTML += `<p>${document.querySelector('input').value}</p>`;
    document.querySelector('input').value = "";
})