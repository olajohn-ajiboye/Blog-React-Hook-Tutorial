import React, { useContext } from 'react';
import RecipeList from './components/RecipeList';
import { RecipeContext } from './context/index'



function App() {
  const appContext = useContext(RecipeContext)
  const { loading, search } = appContext
  return (
    <div>
      {loading ? <h1 className="text-center">...fetching {search} recipe</h1> :
        <RecipeList />}
    </div>
  );
}

export default App;
