/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {RecipeView} from './src/components/';

const demo = {
  id: 1,
  image:
    'https://images-gmi-pmc.edge-generalmills.com/7bb42593-aca1-4740-9a74-0d60abc658f8.jpg',
  categoria: 'trending',
  name: 'Tacos de pollo al chipotle',
  ingredients: [
    {
      name: 'pollo',
      amount: '200 gramos',
    },
    {
      name: 'tortillas de maíz',
      amount: '8 unidades',
    },
    {
      name: 'salsa de chipotle',
      amount: '2 cucharadas',
    },
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
    {
      name: 'salsa de chipotle',
      amount: '2 cucharadas',
    },
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
};

function App(): JSX.Element {
  const [recipe, setRecipe] = useState({});
  const [showView, setShowView] = useState(false);

  const showElement = () => {
    setRecipe(demo);
    setShowView(true);
  };

  return (
    <View style={styles.recipeView}>
      <Button title="Press me" onPress={() => showElement()} />

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
