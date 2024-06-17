const app_id = 'YOUR_APP_ID';
const app_key = 'YOUR_APP_KEY';

async function searchTeaRecipes() {
    const teaTypeOrIngredients = document.getElementById('teaInput').value;
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';

    const apiUrl = https://api.edamam.com/search?q=${teaTypeOrIngredients}&app_id=${app_id}&app_key=${app_key}&mealType=Tea;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const recipes = data.hits;

        recipes.forEach(recipeData => {
            const recipe = recipeData.recipe;
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');

            recipeElement.innerHTML = `
                <h3>${recipe.label}</h3>
                <img src="${recipe.image}" alt="${recipe.label}">
                <p><strong>Ingredients:</strong></p>
                <ul>${recipe.ingredientLines.map(ingredient => <li>${ingredient}</li>).join('')}</ul>
                <p><strong>Instructions:</strong> <a href="${recipe.url}" target="_blank">View Recipe</a></p>
            `;

            recipeList.appendChild(recipeElement);
        });
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}