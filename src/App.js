import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Login from './components/Login';
import Chat from './components/Chat';
import { Spinner } from './components/common/Index';

class App extends Component {
  state = { loggedIn: null, userID: '', email: '' };

  // componentWillMount is a lifecycle method. A lifecycle method is
  // a method that is automatically invoked inside of our component.
  // all we have to do is define it and if we define it, it will be
  // automatically called.
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAbDNDySXhkB7X73NoT3s5Lz_go8Is2mCc',
      authDomain: 'tutti-724e4.firebaseapp.com',
      databaseURL: 'https://tutti-724e4.firebaseio.com',
      projectId: 'tutti-724e4',
      storageBucket: 'tutti-724e4.appspot.com',
      messagingSenderId: '77125320804'
    });


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true,
          userID: firebase.auth().currentUser.uid
        });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }


  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Chat
            username={this.state.userID}
          />
        );

      case false:
        return <Login />;

      default:
        return <Spinner size='large' />;
    }
  }
  render() {
    return (
      <View>
        {this.renderContent()}
        {/* <Login /> */}
      </View>
    );
  }
}

export default App;
