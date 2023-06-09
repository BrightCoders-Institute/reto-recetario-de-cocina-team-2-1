import React from 'react';
import {Image, TouchableHighlight} from 'react-native';

const IconButton = ({url, action, imageStyles, containerStyles}: any) => {
  return (
    <TouchableHighlight onPress={action} style={containerStyles}>
      <Image style={imageStyles} source={url} />
    </TouchableHighlight>
  );
};

export default IconButton;
