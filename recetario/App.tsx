import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from './src/Components/SearchBar/SearchBar'; 
const App: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SearchBar/>
    </View>
  );
};

export default App;
