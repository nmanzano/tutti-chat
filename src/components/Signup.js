import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import FormBox from './FormBox';

// const { titleFont } = styles;

class Signup extends Component {

  render() {
    return (
      <View style={styles.mainView}>
        <StatusBar
          barStyle='light-content'
        />
        <View style={styles.viewPosition}>
          <Text style={styles.titleFont}>
            tutti
          </Text>
        </View>

        <View style={styles.gettingStarted}>
          <Text style={styles.gettingStartedText}>
            Sign up
          </Text>
        </View>

        <View style={styles.formBox}>
          <FormBox />
        </View>

        <View style={styles.haveAccount}>
          <Text style={styles.haveAccountTxt}>
            Already have an account? Login
          </Text>
        </View>

      </View>

    );
  }
}

const styles = {
  mainView: {
    height: 1000,
    width: null,
    backgroundColor: '#EA415D'
  },
  viewPosition: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // top: 46.7,
    top: 70,
  },
  titleFont: {
    fontFamily: 'Helvetica neue',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 43,
    letterSpacing: -3.24,
    textAlign: 'center',
  },
  gettingStarted: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 90,
  },
  gettingStartedText: {
    fontFamily: 'Helvetica neue',
    fontSize: 23,
    color: '#fff',
    fontWeight: '300',
    textAlign: 'center'
  },
  formBox: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 120
  },
  haveAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 140,
  },
  haveAccountTxt: {
    color: '#fcf9f9',
    fontFamily: 'Helvetica neue',
    fontSize: 18,
    lineHeight: 24,
    height: 24,
    textAlign: 'center',
  }
};

export default Signup;
