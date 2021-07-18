let btn = document.getElementById("gettimezone");
if (btn !== null) {
    btn.addEventListener("click", timezone);
}

function timezone() {
    let time = document.getElementById("showtimezone");
    time.innerHTML = Date();

}