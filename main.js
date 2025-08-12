let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');
let canvas = document.querySelector('.canvas');

const list = [
    `<div class="about">
        <img src="assets/img/mus.png" alt="">
        <div class="info">
            <h1>Introducing:</h1>
            <h2>Mus (15 y.o.)</h2>
            <h3>A lazy guy who often abandons projects halfway through. Can spend hours at the computer, but instead of working, gets stuck in games and memes. Promises to finish things, but then forgets. Often argues and is stubborn, even when it’s obvious he’s wrong.</h3>
        </div>
    </div>`,
    `<div class="projects">
        <h1>Projects</h1>
        <div class="devider"></div>
        <div class="row">
            <div class="item">
                <img src="https://raw.githubusercontent.com/musdev13/rain/main/docs/public/assets/mainScreenshot.png">
                <div class="devider"></div>
                <h2><img src="https://github.com/musdev13/rain/blob/main/docs/public/assets/favicon.png?raw=true">Rain</h2>
                <div class="icons">
                    <a href="#"><i class="fa-brands fa-github"></i></a>
                    <a href="#"><i class="fa-solid fa-earth-americas"></i></a>
                </div>
            </div>
            <div class="item">
                <img src="https://github.com/musdev13/TTS-to-Microphone/blob/main/TTStM.jpg?raw=true">
                <div class="devider"></div>
                <h2>TTStM</h2>
                <div class="icons">
                    <a href="#"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    </div>`
];

let slide = 0;
canvas.innerHTML=list[0];
leftBtn.disabled = true;

function move(direction) {
    rightBtn.disabled = true;
    leftBtn.disabled = true;
    canvas.classList.add("hidden");

    canvas.addEventListener("transitionend", function handler() {
        if (direction) {
            if (slide != list.length - 1) {
                if (slide + 1 == list.length - 1) rightBtn.disabled = true;
                else rightBtn.disabled = false;
                leftBtn.disabled = false;
                slide++;
            }
        } else {
            if (slide != 0) {
                if (slide - 1 == 0) leftBtn.disabled = true;
                else leftBtn.disabled = false;
                rightBtn.disabled = false;
                slide--;
            }
        }

        canvas.innerHTML = list[slide];
        canvas.classList.remove("hidden");

        canvas.addEventListener("transitionend", function showHandler() {
            rightBtn.disabled = (slide === list.length - 1);
            leftBtn.disabled = (slide === 0);
            canvas.removeEventListener("transitionend", showHandler);
        });
        canvas.removeEventListener("transitionend", handler);
    });
}

rightBtn.addEventListener("click", () => move(true));
leftBtn.addEventListener("click", () => move(false));