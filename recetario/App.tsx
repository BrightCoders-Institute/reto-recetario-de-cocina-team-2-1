import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RecipeView, SearchBar} from './src/components';

const demou = [
  {
    id: 1,
    image:
      'https://images-gmi-pmc.edge-generalmills.com/7bb42593-aca1-4740-9a74-0d60abc658f8.jpg',
    categoria: 'trending',
    name: 'Tacos de pollo al chipotle',
    ingredients: [
      {
        name: 'cebolla',
        amount: '1/2 unidad',
      },
      {
        name: 'cilantro',
        amount: 'al gusto',
      },
      {
        name: 'limón',
        amount: '2 unidades',
      },
    ],
    amount: 4,
  },
  {
    id: 2,
    image:
      'https://images-gmi-pmc.edge-generalmills.com/7bb42593-aca1-4740-9a74-0d60abc658f8.jpg',
    categoria: 'trending',
    name: 'Tacos de carne al chipotle',
    ingredients: [
      {
        name: 'cebolla',
        amount: '1/2 unidad',
      },
      {
        name: 'cilantro',
        amount: 'al gusto',
      },
      {
        name: 'limón',
        amount: '2 unidades',
      },
    ],
    amount: 4,
  },
  {
    id: 3,
    image:
      'https://images-gmi-pmc.edge-generalmills.com/7bb42593-aca1-4740-9a74-0d60abc658f8.jpg',
    categoria: 'trending',
    name: 'Tacos de pescado al chipotle',
    ingredients: [
      {
        name: 'cebolla',
        amount: '1/2 unidad',
      },
      {
        name: 'cilantro',
        amount: 'al gusto',
      },
      {
        name: 'limón',
        amount: '2 unidades',
      },
    ],
    amount: 4,
  },
];

function App(): JSX.Element {
  const [recipe, setRecipe] = useState({});
  const [showView, setShowView] = useState(false);

  const setElementSelect = (e: any) => {
    setRecipe(e);
    setShowView(true);
  };

  return (
    <View style={styles.recipeView}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <SearchBar data={demou} setElementSelect={setElementSelect} />
      </View>

      {showView && (
        <RecipeView
          recipe={recipe}
          closeView={() => setShowView(prevState => !prevState)}
        />
      )}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  recipeView: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
});
