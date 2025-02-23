if (window.location.pathname.includes("register.html")) {
  const registerForm = document.getElementById("registerForm");
  const popup = document.getElementById("popup");
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const favoriteCharacterField = document.getElementById("favoriteCharacter");

  const characterImages = {
    "Ted Mosby": ["ted-login.jpg", "mexican-login.webp"],
    "Barney Stinson": ["barney-login.avif", "german-login.jpg"],
    "Robin Scherbatsky": [
      "robin-login.webp",
      "lrobin-login.avif",
    ],
    "Lily Aldrin": ["lily-login.jpg", "slily-login.jpg"],
    "Marshall Eriksen": [
      "marshall-login.webp",
      "mmarshall-login.avif",
    ],
  };

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const favoriteCharacter = favoriteCharacterField.value;

    if (!name || !email || !favoriteCharacter) {
      alert("Please fill in all fields.");
      return;
    }

    image1.src = characterImages[favoriteCharacter][0];
    image2.src = characterImages[favoriteCharacter][1];
    popup.classList.remove("hidden");

    image1.onclick = () => {
      const user = { name, email, favoriteCharacter };
      localStorage.setItem(email, JSON.stringify(user));
      alert("Registration successful!");
      window.location.href = "home.html";
    };

    image2.onclick = () => {
      favoriteCharacterField.value = "";
      popup.classList.add("hidden");
      alert("That's not your favorite character. Please select again.");
    };
  });
}

if (window.location.pathname.includes("login.html")) {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;

    const user = JSON.parse(localStorage.getItem(email));
    if (user) {
      alert("Login successful!");
      window.location.href = "home.html";
    } else {
      alert("Email not found. Please register.");
    }
  });
}

if (window.location.pathname.includes("home.html")) {
  function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  }
}
