import React from 'react';
import {ListItem} from '../index';
import {ListRecipesProps} from '../../interfaces/interfaces';
import {ScrollView, View} from 'react-native';
import styles from './StylesListRecipes';

const ListRecipes: React.FC<ListRecipesProps> = ({data, action}: any) => {
  return (
    <View style={styles.listContainer}>
      <ScrollView horizontal={true}>
        {data.map((element: any) => (
          <ListItem recipe={element} key={element.id} action={action} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ListRecipes;
