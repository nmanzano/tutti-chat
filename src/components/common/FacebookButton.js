import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FacebookButton = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;

    return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Icon name="facebook-official" size={20} color="#fcfafa" style={styles.facebookIcon} />
        <Text style={textStyle}>
           Sign up with Facebook
        </Text>
      </TouchableOpacity>
    );
  };

const styles = {
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Helvetica neue',
    color: '#fcfafa',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // width: 179,
    height: 54,
    width: 237,
    borderRadius: 4,
    backgroundColor: '#3C549A',
    shadowColor: '#374D90',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  facebookIcon: {
    // flex: 2,


  }
};

export { FacebookButton };
