import React from 'react';
import {IconButtonProps} from '../../interfaces/interfaces';
import {Image, TouchableHighlight} from 'react-native';

const IconButton: React.FC<IconButtonProps> = ({
  url,
  action,
  imageStyles,
  containerStyles,
}) => {
  return (
    <TouchableHighlight
      underlayColor="#D3D3D3"
      onPress={action}
      style={containerStyles}>
      <Image style={imageStyles} source={url} />
    </TouchableHighlight>
  );
};

export default IconButton;
