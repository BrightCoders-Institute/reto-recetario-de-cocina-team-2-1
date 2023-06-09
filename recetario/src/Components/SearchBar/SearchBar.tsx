import React from 'react';
import { View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

const SearchBar: React.FC = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
        placeholder="Search..."
      />
      <Icon name="search" type="material" />
    </View>
  );
};

export default SearchBar;
