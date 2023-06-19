import React from 'react';
import {ListItemProps} from '../../interfaces/interfaces';
import {Text, TouchableHighlight, View, Image} from 'react-native';
import styles from './StylesListItem';

const ListItem: React.FC<ListItemProps> = ({recipe, action}: any) => {
  return (
    <TouchableHighlight
      underlayColor="#D3D3D3"
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
