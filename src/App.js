import { useEffect, useState } from 'react';
import SearchBar from './views/searchbar';
import axios from 'axios';
import './App.css';
import './AppTailwind.css';

function App() {
  const [recipeList, setRecipeList] = useState(null);

  useEffect(() => {
    axios.get('./mock/data.json').then(response => setRecipeList(response.data));
  }, []);

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
