const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish with creamy sauce.",
    image: "download.jpg",
    likes: 120,
  },
  {
    id: 2,
    title: "Chicken Curry",
    description: "A flavorful and spicy chicken curry recipe.",
    image: "download.jpg",
    likes: 85,
  },
  {
    id: 3,
    title: "Vegetable Stir Fry",
    description: "A quick and healthy vegetable stir fry.",
    image: "download.jpg",
    likes: 45,
  },
   {
    id: 3,
    title: "chicken briyani",
    description: "A quick and healthy vegetable stir fry.",
    image: "download.jpg",
    likes: 45,
  },
   {
    id: 3,
    title: "veg soup",
    description: "A quick and healthy vegetable stir fry.",
    image: "download.jpg",
    likes: 45,
  },
   {
    id: 3,
    title: "tantoor chicken",
    description: "A quick and healthy vegetable stir fry.",
    image: "download.jpg",
    likes: 45,
  },
];

// Function to render recipes
function displayRecipes(recipes) {
  const recipesContainer = document.getElementById("recipes");
  recipesContainer.innerHTML = ""; // Clear existing recipes

  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <div class="content">
        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>
        <div class="actions">
          <span>${recipe.likes} Likes</span>
          <button onclick="likeRecipe(${recipe.id})">Like</button>
        </div>
      </div>
    `;
    recipesContainer.appendChild(recipeCard);
  });
}

// Function to like a recipe
function likeRecipe(recipeId) {
  const recipe = recipes.find((r) => r.id === recipeId);
  if (recipe) {
    recipe.likes++;
    displayRecipes(recipes);
  }
}

// Function to search recipes
function searchRecipes() {
  const query = document.getElementById("search").value.toLowerCase();
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query)
  );
  displayRecipes(filteredRecipes);
}

// Initial render
displayRecipes(recipes);