import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ListRecipes, RecipeView, SearchBar} from './src/Components/';
import fakeData from './src/data/data';
import styles from './AppStyles';

function App(): JSX.Element {
  const [recipe, setRecipe] = useState({});
  const [likeRecipes, setLikeRecipes] = useState<any[]>([]);
  const [recentRecipes, setRecentRecipes] = useState<any[]>([]);
  const [showView, setShowView] = useState(false);

  const setElementSelect = (currentRecipe: {id: Number}) => {
    setRecipe(currentRecipe);
    setShowView(true);

    isWithin(recentRecipes, currentRecipe, setRecentRecipes);
  };

  const recipeLike = (currentRecipe: any) => {
    isWithin(likeRecipes, currentRecipe, setLikeRecipes);
  };

  const isWithin = (arrayPath: any, element: any, setElement: any) => {
    const arrayIDs = arrayPath.map((e: any) => e.id);

    if (!arrayIDs.includes(element.id)) {
      setElement([...arrayPath, element]);
    }
  };

  return (
    <View style={styles.recipeView}>
      <View style={{flex: 1, marginTop: 40}}>
        <SearchBar data={fakeData} setElementSelect={setElementSelect} />
      </View>

      <View style={{flex: 2, marginTop: 20}}>
        <Text style={styles.titleStyle}>RECENT RECIPES</Text>
        {recentRecipes.length >= 1 && (
          <ListRecipes data={recentRecipes} action={setElementSelect} />
        )}
      </View>

      <View style={{flex: 2}}>
        <Text style={styles.titleStyle}>RECENT YOU LIKED </Text>
        {likeRecipes.length >= 1 && (
          <ListRecipes data={likeRecipes} action={setElementSelect} />
        )}
      </View>

      {showView && (
        <RecipeView
          recipe={recipe}
          closeView={() => setShowView(prevState => !prevState)}
          likeAction={recipeLike}
        />
      )}
    </View>
  );
}

export default App;
