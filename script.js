const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let audio = document.createElement("audio");
document.body.appendChild(audio);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const soundName = button.innerText;

    audio.src = `sounds/${soundName}.mp3`;
    audio.currentTime = 0;
    audio.play();
  });
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});
