import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title }) => {
  const { buttonStyle, textStyle } = styles;

    return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

const styles = {
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Helvetica neue',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 29,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // width: 179,
    width: 237,
    height: 53,
    borderRadius: 7,
    backgroundColor: '#008AD8',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 4,
    shadowOpacity: 1
  }
};

export { Button };
