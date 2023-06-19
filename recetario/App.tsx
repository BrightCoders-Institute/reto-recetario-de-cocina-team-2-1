import React, {useState} from 'react';
import {ListRecipes, RecipeView, SearchBar} from './src/Components/';
import {View, Text} from 'react-native';
import fakeData from './src/data/data';
import styles from './AppStyles';
import {Recipe} from './src/interfaces/interfaces';

function App(): JSX.Element {
  const [recipe, setRecipe] = useState<Recipe>({
    id: 0,
    image: '',
    categoria: '',
    name: '',
    ingredients: [],
    amount: 0,
  });
  const [likeRecipes, setLikeRecipes] = useState<any[]>([]);
  const [recentRecipes, setRecentRecipes] = useState<any[]>([]);
  const [showView, setShowView] = useState(false);

  const setElementSelect = (currentRecipe: Recipe) => {
    setRecipe(currentRecipe);
    setShowView(true);

    isWithin(recentRecipes, currentRecipe, setRecentRecipes);
  };

  const recipeLike = (currentRecipe: Recipe) => {
    isWithin(likeRecipes, currentRecipe, setLikeRecipes);
  };

  const isWithin = (
    arrayPath: any[],
    element: any,
    setElement: React.Dispatch<React.SetStateAction<any[]>>,
  ): void => {
    const arrayIDs = arrayPath.map((e: any) => e.id);

    if (!arrayIDs.includes(element.id)) {
      setElement([...arrayPath, element]);
    }
  };

  return (
    <View style={styles.recipeView}>
      <View style={styles.searchBarContainer}>
        <SearchBar data={fakeData} setElementSelect={setElementSelect} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.titleStyle}>RECENT RECIPES</Text>
        {recentRecipes.length >= 1 && (
          <ListRecipes data={recentRecipes} action={setElementSelect} />
        )}
      </View>

      <View style={styles.sectionContainer}>
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
