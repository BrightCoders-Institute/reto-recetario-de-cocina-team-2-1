import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
        placeholder="Search..."
        onChangeText={text => setSearchText(text)}
        onSubmitEditing={handleSearch}
        value={searchText}
      />
    </View>
  );
};
