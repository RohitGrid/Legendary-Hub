let answers = {
  Ted: 0,
  Barney: 0,
  Robin: 0,
  Lily: 0,
  Marshall: 0,
};

const careers = {
  Ted: "Architect",
  Barney: "CEO of a multinational corporation",
  Robin: "News Anchor",
  Lily: "Kindergarten Teacher",
  Marshall: "Environmental Lawyer",
};

const images = {
  Ted: "Images/ted-login.jpg",
  Barney: "Images/barney-login.avif",
  Robin: "Images/robin-login.webp",
  Lily: "Images/lily-login.jpg",
  Marshall: "Images/marshall-login.webp",
};

function answerQuestion(questionNumber, character) {
  answers[character]++;
  if (questionNumber < 4) {
    document
      .getElementById(`question${questionNumber}`)
      .classList.add("hidden");
    document
      .getElementById(`question${questionNumber + 1}`)
      .classList.remove("hidden");
  } else {
    showResults();
  }
}

function showResults() {
  const quiz = document.getElementById("quiz");
  const results = document.getElementById("results");
  const soulmate = document.getElementById("soulmate");
  const career = document.getElementById("career");
  const resultImage = document.getElementById("resultImage");

  let maxVotes = 0;
  let soulmateCharacter = "";
  for (const [character, votes] of Object.entries(answers)) {
    if (votes > maxVotes) {
      maxVotes = votes;
      soulmateCharacter = character;
    }
  }

  soulmate.textContent = soulmateCharacter;
  career.textContent = careers[soulmateCharacter];
  resultImage.src = images[soulmateCharacter];

  quiz.classList.add("hidden");
  results.classList.remove("hidden");
}

function resetQuiz() {
  for (const character in answers) {
    answers[character] = 0;
  }

  document.getElementById("results").classList.add("hidden");
  document.getElementById("question1").classList.remove("hidden");
}
