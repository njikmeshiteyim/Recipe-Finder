import React from "react";
import "./Recipe.css";
import RecipeList from "./RecipeList";


const Recipe = (props) => {
  
  const { recipes} = props;
  return (
    <div className="contain">
      {recipes.map((recipe) => (
        <>
          <RecipeList
            key={Math.random() * 100}
            name={recipe.recipe.label}
            image={recipe.recipe.image} l 
            ingredientLines={recipe.recipe.ingredientLines}
          />
          </>
      ))}
    </div>
  );
};

export default Recipe;
