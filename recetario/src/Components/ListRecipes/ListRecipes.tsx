import React from 'react';
import {ScrollView, View} from 'react-native';
import {ListItem} from '../index';
import styles from './StylesListRecipes';

const ListRecipes = ({data, action}: any) => {
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
