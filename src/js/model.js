import { async } from "regenerator-runtime";

export const state = {
    recipe: {},
}

export const loadRecipe = async function (id) {
    try {
        //fecthing recipe
        const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`);
        // const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
        const data = await res.json();

        // check if url is not valid then throw an error
        if (!res.ok) throw new Error(`${data.message} ${res.status}`);

        // create a recipe object for better understanding 
        // let recipe = data.data.recipe;
        const { recipe } = data.data;

        state.recipe = {
            cookingTime: recipe.cooking_time,
            id: recipe.id,
            imageUrl: recipe.image_url,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: recipe.servings,
            sourceUrl: recipe.source_url,
            title: recipe.title
        }
        console.log(state.recipe);
    } catch (err) {
        alert(err);
    }
}