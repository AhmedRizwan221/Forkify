import * as model from './model.js';
import recipeView from './views/recipeView.js';
// console.log(icons);
import 'core-js/stable';
import 'regenerator-runtime/runtime';


// const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////
// create a function for spinner 

const shownRecipe = async function() {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return ;
    
    // render spinner here 
    recipeView.renderSpinner();

    // rendering fetching data 
    await model.loadRecipe(id);
    // this is beacuse we do not export the class itself if we export class itself then we create new instance like this
    // const view = new recipeView(model.state.recipe); 
    recipeView.render(model.state.recipe);

    
  }catch(err) {
    alert(err);
  }
}
// calling the function
// shownRecipe();

// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, shownRecipe));
window.addEventListener('hashchange', shownRecipe);
window.addEventListener('load', shownRecipe);