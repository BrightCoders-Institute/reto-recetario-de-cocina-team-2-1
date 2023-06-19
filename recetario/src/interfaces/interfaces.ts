import {
  ImageStyle,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

export interface IconButtonProps {
  url: ImageSourcePropType;
  action(): any;
  imageStyles?: StyleProp<ImageStyle>;
  containerStyles?: StyleProp<ViewStyle>;
}

export interface ListRecipesProps {
  data: Recipe[];
  action: (recipe: Recipe) => void;
}

export interface ListItemProps {
  recipe: Recipe;
  action: (recipe: Recipe) => void;
}

export interface DataItem {
  id: string;
  image: string;
  categoria: string;
  name: string;
  ingredients: {
    name: string;
    amount: string;
  }[];
  amount: number;
}

//----------------------------------------------------------

export interface Ingredient {
  name: string;
  amount: string;
}

export interface Recipe {
  id: number;
  image: string;
  categoria: string;
  name: string;
  ingredients: Ingredient[];
  amount: number;
}

export interface SearchBarProps {
  data: Recipe[];
  setElementSelect: (currentRecipe: Recipe) => void;
}

export interface RecipeViewProps {
  recipe: Recipe;
  closeView: () => void;
  likeAction: (currentRecipe: Recipe) => void;
}
