import {IconButton} from '../';
import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './StylesRecipeView';
import {RecipeViewProps} from '../../interfaces/interfaces';

const RecipeView: React.FC<RecipeViewProps> = ({
  recipe,
  closeView,
  likeAction,
}) => {
  return (
    <View style={styles.recipeView}>
      <View style={styles.containerImage}>
        <Image style={styles.tinyLogo} source={{uri: recipe.image}} />
        <View style={styles.navBar}>
          <IconButton
            action={closeView}
            containerStyles={{...styles.icon, ...styles.firtsIcon}}
            imageStyles={{...styles.icon, ...styles.firtsIcon}}
            url={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2048px-VisualEditor_-_Icon_-_Close_-_white.svg.png',
            }}
          />
          <IconButton
            action={() => likeAction(recipe)}
            imageStyles={styles.icon}
            url={require('../../images/sharethis.png')}
          />
          <IconButton
            action={() => likeAction(recipe)}
            imageStyles={styles.icon}
            url={require('../../images/heart.png')}
          />
        </View>
        <View style={styles.nameSection}>
          <Text style={styles.textTitle}>RECENT</Text>
          <Text style={styles.textTitle}>{recipe.name}</Text>
        </View>
      </View>

      <View style={styles.containerDescription}>
        <View>
          <Text style={styles.textDescription}>
            Ingredientes for {recipe.amount} serving
          </Text>
          <ScrollView style={styles.scrollView}>
            <View>
              {recipe.ingredients.map((item: any, index: any) => (
                <View style={styles.listContainer} key={index}>
                  <Text style={styles.textDescription}>{item.name}</Text>
                  <Text style={styles.textDescription}> {item.amount}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeView;
