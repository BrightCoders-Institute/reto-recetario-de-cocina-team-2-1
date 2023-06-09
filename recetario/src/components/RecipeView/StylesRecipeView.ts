import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  recipeView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#4E4C4C',
  },
  //Estilos Header
  containerImage: {
    width: '100%',
    height: 350,
    position: 'relative',
  },
  nameSection: {
    padding: 15,
    bottom: 0,
    position: 'absolute',
  },
  navBar: {
    padding: 15,
    top: 0,
    position: 'absolute',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
  containerDescription: {
    padding: 15,
    height: 'auto',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  firtsIcon: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  //Estilos para los textos
  textTitle: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20,
  },
  textDescription: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  //Estilos Listado de Ingredientes
  listContainer: {
    padding: 15,
    flexDirection: 'row',
  },
  scrollView: {
    marginTop: 10,
    height: 250,
  },
});

export default styles;
