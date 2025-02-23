const video1 = document.getElementById("video1");
const quiz = document.getElementById("quiz");
const video2 = document.getElementById("video2");
const rainbowText = document.getElementById("rainbow-text");

video1.addEventListener("ended", () => {
  video1.classList.add("hidden");
  quiz.classList.remove("hidden");
});

function handleAnswer(answer) {
  quiz.classList.add("hidden");
  rainbowText.classList.remove("hidden");
  video2.classList.remove("hidden");
  video2.play();
}
