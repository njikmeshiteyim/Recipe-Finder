
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Recipe from "./components/Recipe/Recipe";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipe] = useState([]);

  const APP_ID = "7fb094ea";
  const APP_KEY = "014617860a8fd377aea295b4e967c894";

  useEffect(() => {
    getRecipies();
  }, []);

  const getRecipies = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipe(res.data.hits);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = ()=> { 
    getRecipies();

  }
  return (
    <div className="App">
      <Header onInputChange={onInputChange}
       onSearch={onSearch}/>
      <div className="container">
        <Recipe recipes={recipes} keys={recipes.label}/>
      </div>
    </div>
  );
}

export default App;
