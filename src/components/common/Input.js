import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType }) => {
  const { inputStyle, containerStyle, textLabel } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textLabel}>{label}</Text>
      <TextInput
        style={inputStyle}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        autoCapitalize='none'
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    fontFamily: 'Helvetica neue',
    width: 180,
    fontSize: 23,
    fontWeight: '300',
    textAlign: 'left',
    height: 20,
  },
  textLabel: {
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 160,
    padding: 10,
    width: 182,
    left: 93,
    // borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#bbbbbb',
  }
};
export { Input };
