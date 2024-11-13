import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <h4>{recipe.description}</h4>
    </div>
  );
}

export default RecipeCard;
