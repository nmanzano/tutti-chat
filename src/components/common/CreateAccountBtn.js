import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CreateAccountBtn = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;

    return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
          Create Account
        </Text>
      </TouchableOpacity>
    );
  };

const styles = {
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Helvetica neue',
    fontWeight: '300',
    color: '#f60068',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    lineHeight: 24,
  },
  buttonStyle: {
    // width: 179,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: 124,
    height: 24,
    bottom: 33,
    left: 86,
  }
};

export { CreateAccountBtn };
