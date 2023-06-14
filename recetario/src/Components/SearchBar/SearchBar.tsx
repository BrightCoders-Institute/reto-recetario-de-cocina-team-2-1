import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
} from 'react-native';
import {Icon} from 'react-native-elements';

const {width} = Dimensions.get('window');

const SearchBar = ({data, setElementSelect}: any) => {
  const [searchText, setSearchText] = useState('');
  const [dataResults, setDataResults] = useState([]);

  useEffect(() => {
    const results = data.filter((objeto: any) => {
      return objeto.name.toLowerCase().includes(searchText.toLowerCase());
    });

    if (searchText) {
      setDataResults(results);
    }
  }, [searchText, data]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <Icon name="search" type="material" style={styles.icon} />
      </View>
      {dataResults.length >= 1 && (
        <View style={styles.inputContainerResults}>
          {dataResults.map((element: any) => (
            <TouchableHighlight
              key={element.id}
              onPress={() => setElementSelect(element)}>
              <Text style={styles.textResult}>{element.name}</Text>
            </TouchableHighlight>
          ))}
        </View>
      )}
    </View>
  );
};

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
    elevation: 2,
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

export default SearchBar;
