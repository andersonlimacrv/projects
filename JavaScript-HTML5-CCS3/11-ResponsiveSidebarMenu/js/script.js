const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    modeSwitch = body.querySelector(".toggle_switch"),
    modeText = body.querySelector(".mode_text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");

});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode"
    } else {
        modeText.innerText = "Dark Mode"
    }

});
// Adicionando hover class para item clicado.

let list = document.querySelectorAll(".menu_links li");

function activeLink() {
    list.forEach(item => { item.classList.remove("clicked"); });
    this.classList.add("clicked");
}

list.forEach((item) => item.addEventListener("click", activeLink));

// Inicio clock

let timeEl = document.querySelector('#time');
let dateEl = document.querySelector('#date');
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

showDate();
var inter = setInterval(showDate, 30000);

function showDate() {
    let d = new Date();
    timeEl.innerHTML = formatAMPM(d);
    dateEl.innerHTML = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // hora 12 deveria ser 00.
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + '<span id="ampm">' + ampm + '</span>';
    return strTime;
}

// Inicio Menu de config;

const buttons = document.querySelectorAll(".menu__item");
let activeButton = document.querySelector(".menu__item.active");

buttons.forEach(item => {

    const text = item.querySelector(".menu__text");
    setLineWidth(text, item);

    window.addEventListener("resize", () => {
        setLineWidth(text, item);
    })

    item.addEventListener("mouseover", function () {
        if (this.classList.contains("active")) return;

        this.classList.add("active");

        if (activeButton) {
            activeButton.classList.remove("active");
            activeButton.querySelector(".menu__text").classList.remove("active");
        }

        handleTransition(this, text);
        activeButton = this;

    });


});


function setLineWidth(text, item) {
    const lineWidth = text.offsetWidth + "px";
    item.style.setProperty("--lineWidth", lineWidth);
}

function handleTransition(item, text) {

    item.addEventListener("transitionend", (e) => {

        if (e.propertyName != "flex-grow" ||
            !item.classList.contains("active")) return;

        text.classList.add("active");

    });

}