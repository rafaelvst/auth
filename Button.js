import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
     <Text style={textStyle}>
       {children}
     </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
   alignSelf: 'center',
   color: '#FFF',
   fontSize: 14,
   fontWeight: '600',
   paddingTop: 10,
   paddingBottom: 10
  },

  buttonStyle: {
    alignSelf: 'stretch',
    width: null,
    backgroundColor: '#1BD0A0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFF',

  }
};

export { Button };
