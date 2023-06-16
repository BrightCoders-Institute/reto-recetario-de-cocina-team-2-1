import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Keyboard,
} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './StylesSearchBar';

const SearchBar = ({data, setElementSelect}: any) => {
  const [searchText, setSearchText] = useState('');
  const [dataResults, setDataResults] = useState([]);

  const selectElement = (element: any) => {
    setElementSelect(element);
    setSearchText('');
    Keyboard.dismiss();
  };

  useEffect(() => {
    const results = data.filter((objeto: any) => {
      return objeto.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setDataResults(searchText ? results : []);
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

        {dataResults.length >= 1 && (
          <View style={styles.inputContainerResults}>
            {dataResults.map((element: any) => (
              <TouchableHighlight
                key={element.id}
                onPress={() => selectElement(element)}>
                <Text style={styles.textResult}>{element.name}</Text>
              </TouchableHighlight>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
