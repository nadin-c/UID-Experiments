import React from 'react';
import RecipeList from './RecipeList';
import './App.css';

const recipes = [
  { name: 'Spaghetti Bolognese', image: './spaghetti.jpeg', description: 'A classic Italian pasta dish.' },
  { name: 'Chicken Curry', image: './curry.jpeg', description: 'A spicy and flavorful curry.' },
  { name: 'Vegetarian Pizza', image: './pizza.jpeg', description: 'A healthy and delicious pizza.' },
  { name: 'Beef Tacos', image: './tacos.jpeg', description: 'Classic Mexican-style beef tacos.' },
  { name: 'Caesar Salad', image: './caesar.jpeg', description: 'A crisp and refreshing Caesar salad.' },
  { name: 'Grilled Salmon', image: './salmon.jpeg', description: 'A simple and healthy grilled salmon.' },
  { name: 'Chocolate Cake', image: './cake.jpeg', description: 'A rich and moist chocolate cake.' },
  { name: 'Pancakes', image: './pancakes.jpeg', description: 'Fluffy and light pancakes with syrup.' },
  { name: 'Mango Smoothie', image: './smoothie.jpeg', description: 'A creamy and sweet mango smoothie.' }
];

function App() {
  return (
    <div className="app">
      <h1>Recipes</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
