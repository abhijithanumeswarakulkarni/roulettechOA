import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './views/main';
import RecipeDetails from './views/recipeDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
