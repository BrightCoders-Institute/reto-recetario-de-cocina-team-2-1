import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    position: 'relative',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
  inputContainerResults: {
    top: 30,
    position: 'absolute',
    marginTop: 20,
    backgroundColor: '#fff',
    width: width * 0.8,
    borderColor: 'gray',
    borderWidth: 1,
  },
  textResult: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});

export default styles;
