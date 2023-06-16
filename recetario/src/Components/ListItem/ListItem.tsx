import React from 'react';
import {Text, TouchableHighlight, View, Image} from 'react-native';
import styles from './StylesListItem';

const ListItem = ({recipe, action}: any) => {
  return (
    <TouchableHighlight
      style={styles.itemContainer}
      onPress={() => action(recipe)}>
      <View>
        <Image style={styles.itemImage} source={{uri: recipe.image}} />
        <Text style={styles.text}>{recipe.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
