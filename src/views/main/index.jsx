import React, { useEffect, useState } from "react";
import SearchBar from '../searchbar';
import RecipeCardInfo from '../recipeInfoCard';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, updateRecipes } from "../../state/slices/recipeSlice";

const Main = () => {
  const recipes = useSelector((state) => state.recipe.recipes);
  const originalRecipes = useSelector((state) => state.recipe.originalRecipes);
  const search = useSelector((state) => state.searchInput.value);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (recipes === null)
      setLoading(true);
    axios.get('http://localhost:8000/recipe/').then(response => {
      dispatch(fetchRecipes(response.data.data));
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (search === "")
      dispatch(updateRecipes(originalRecipes));
    else {
      dispatch(updateRecipes(originalRecipes?.filter?.((recipe) => recipe?.title?.toLowerCase()?.includes(search.toLowerCase()))));
    }
  }, [search]);

  const getCards = () => {
    return recipes?.map?.((recipe) => <RecipeCardInfo recipe={recipe} />);
  };

  return (
    loading ? <div className="loader-bg"><span className="loading loading-infinity loading-lg" /></div> :
      <div className="App">
        <SearchBar />
        {getCards()}
      </div>
  );
}

export default Main;