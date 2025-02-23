const questions = [
    {
      question: "What is the name of Barney's brother?",
      options: [
        { text: "James", correct: true },
        { text: "Michael", correct: false },
        { text: "David", correct: false },
        { text: "Sam", correct: false }
      ]
    },
    {
      question: "What is the name of the bar where the gang hangs out?",
      options: [
        { text: "Puzzles", correct: false },
        { text: "MacLaren's Pub", correct: true },
        { text: "The Blue Horn", correct: false },
        { text: "The Goliath National Bank", correct: false }
      ]
    },
    {
      question: "What is Ted's job?",
      options: [
        { text: "Lawyer", correct: false },
        { text: "Architect", correct: true },
        { text: "Doctor", correct: false },
        { text: "Teacher", correct: false }
      ]
    },
    {
      question: "What is the name of Barney's infamous playbook?",
      options: [
        { text: "The Bro Code", correct: false },
        { text: "The Playbook", correct: true },
        { text: "The Legendary Moves", correct: false },
        { text: "The Bro Bible", correct: false }
      ]
    },
    {
      question: "What is the name of the apartment building where Ted, Marshall, and Lily live?",
      options: [
        { text: "The Arcadian", correct: true },
        { text: "The Goliath National Bank Building", correct: false },
        { text: "The Farhampton Inn", correct: false },
        { text: "The Empire State Building", correct: false }
      ]
    },
    {
      question: "What is the name of the mother in How I Met Your Mother?",
      options: [
        { text: "Tracy McConnell", correct: true },
        { text: "Robin Scherbatsky", correct: false },
        { text: "Lily Aldrin", correct: false },
        { text: "Victoria", correct: false }
      ]
    },
    {
      question: "What is the name of the band where Robin was a teenage pop star?",
      options: [
        { text: "Robin Sparkles", correct: true },
        { text: "The Velvet Underground", correct: false },
        { text: "The Beatles", correct: false },
        { text: "The Rolling Stones", correct: false }
      ]
    },
    {
      question: "What is the name of Marshall and Lily's son?",
      options: [
        { text: "Marvin", correct: true },
        { text: "Luke", correct: false },
        { text: "Ted Jr.", correct: false },
        { text: "Barney", correct: false }
      ]
    },
    {
      question: "What is the name of the game Barney invents to pick up women?",
      options: [
        { text: "The Lemon Law", correct: true },
        { text: "The Hot/Crazy Scale", correct: false },
        { text: "The Platinum Rule", correct: false },
        { text: "The Robin", correct: false }
      ]
    },
    {
      question: "What is the name of the wedding where Ted meets the mother?",
      options: [
        { text: "Barney and Robin's wedding", correct: true },
        { text: "Marshall and Lily's wedding", correct: false },
        { text: "Ted and Tracy's wedding", correct: false },
        { text: "James and Tom's wedding", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.querySelector('.options');
  const currentQuestionElement = document.getElementById('current-question');
  const totalQuestionsElement = document.getElementById('total-questions');
  const correctPopup = document.getElementById('correct-popup');
  const wrongPopup = document.getElementById('wrong-popup');
  
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('option');
      button.dataset.correct = option.correct;
      button.addEventListener('click', selectAnswer);
      optionsElement.appendChild(button);
    });
    currentQuestionElement.innerText = currentQuestionIndex + 1;
    totalQuestionsElement.innerText = questions.length;
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
  
    if (isCorrect) {
      score++;
      showPopup(correctPopup);
    } else {
      showPopup(wrongPopup);
    }
  
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
      } else {
        endQuiz();
      }
    }, 1000);
  }
  
  function showPopup(popup) {
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 1000);
  }
  
  function endQuiz() {
    alert(`Quiz Over! Your final score is ${score}/${questions.length}`);
    // Optionally, reset the quiz
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  }
  
  showQuestion();