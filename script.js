// Search function
function searchRecipes() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const cards = document.querySelectorAll(".recipe-card");

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Filter function
function filterDifficulty() {
  const filter = document.getElementById("difficultyFilter").value;
  const cards = document.querySelectorAll(".recipe-card");

  let sortedCards = Array.from(cards);

  // Reset all displays
  sortedCards.forEach(card => card.style.display = "block");

  if (filter === "easy") {
    sortedCards.sort((a, b) => {
      return getDifficultyRank(a) - getDifficultyRank(b);
    });
  } else if (filter === "hard") {
    sortedCards.sort((a, b) => {
      return getDifficultyRank(b) - getDifficultyRank(a);
    });
  } else if (filter === "medium") {
    sortedCards = sortedCards.filter(card => card.classList.contains("medium"));
  }

  const container = document.querySelector(".recipe-grid");

  if (filter === "medium") {
    // Show only medium difficulty
    cards.forEach(card => {
      card.style.display = card.classList.contains("medium") ? "block" : "none";
    });
  } else if (filter === "easy" || filter === "hard") {
    // Remove all cards from container
    sortedCards.forEach(card => container.appendChild(card));
  } else {
    // If 'all' is selected, show all
    cards.forEach(card => (card.style.display = "block"));
  }
}

// Helper to rank difficulty
function getDifficultyRank(card) {
  if (card.classList.contains("easy")) return 1;
  if (card.classList.contains("medium")) return 2;
  if (card.classList.contains("hard")) return 3;
  return 0;
}
