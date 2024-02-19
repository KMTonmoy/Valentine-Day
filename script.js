alert("Application created by Tonmoy.")
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const yesContent = document.getElementById("yesContent");
const container = document.querySelector(".container");
const romanticSong = document.getElementById("romanticSong");
const brakeing = document.getElementById("brakeing");
const confuge = document.getElementById("confuge");

let noButtonClickCount = 0;

noButton.addEventListener("click", () => {
    noButtonClickCount++;
    yesButton.style.width = `${yesButton.offsetWidth * 1.2}px`;
    yesButton.style.height = `${yesButton.offsetHeight * 1.2}px`;
    brakeing.play();
    if (noButtonClickCount === 4) {
        container.style.top = "2%"
        noButton.style.display = "none";
        yesButton.style.width = "100%";
        yesButton.style.height = "45vh";
        yesButton.style.fontSize = "2em";
        confuge.play()
    }
});

yesButton.addEventListener("click", () => {
    container.classList.add("hidden");
    yesContent.classList.remove("hidden");
    romanticSong.play();
    confuge.pause()
});