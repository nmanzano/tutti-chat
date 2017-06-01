import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection } from './common/Index';

class Chat extends Component {


  constructor(props) {
    super(props);
    this.state = { chat: '',
    messages: []

   };

    firebase.database().ref('Room').child('messages').on('child_added', (snapshot) => {
      console.log({ messages: snapshot.val() });
      // this.setState.message.push(snapshot.val())
      const messages = this.state.messages;
      messages.push(snapshot.val());
      this.setState({ messages });
    });
    console.log(this.props.username);
  }


  // const user = firebase.auth().currentUser;
  // const email;
  //
  //
  // if (user != null) {
  //   email = user.email
  // }

  render() {
    return (


      <View>


            {this.state.messages.map((message, index) => (
                <View key={`message-${index}`} style={styles.chatwindowStyle} >
                  <Text style={styles.textViewStyle} >
                    {message}
                  </Text>
                </View>
              ))}


        {/* <View>

        <TextInput
            style={styles.textInputStyleTwo}
            onChangeText={(value) => this.setState({ value })}
            value={this.state.value}
        />

          </View> */}


        <View style={styles.inputpostionStyle}>
          {/* <Input footerText="Type" placeholder="here"></Input> */}


          <TextInput
             ref={clearChat => this.chattextInput = clearChat}
             style={styles.textInputStyle}
             onChangeText={(text) => this.setState({ chat: text })}
             value={this.state.chat}
          />

        </View>


        {/* This button below when clicked sends data to firebase */}
        <View style={styles.buttonpostionStyle}>
          <Button
            title="send"
            onPress={() => {
            firebase.database().ref('Room')
            .child(this.props.username)
            .push(this.state.chat: text);
            this.chattextInput.setNativeProps({ text: '' });
          }}
          />
        </View>


        <View style={styles.logOutBtn}>
        <Button
          onPress={() => firebase.auth().signOut()}
          title='Log Out'
        />
        </View>


        <View>
          <Text>
            {this.userID}
          </Text>
        </View>

      </View>

    );
  }
}


const styles = {
  buttonpostionStyle: {
    bottom: 15,
    alignItems: 'flex-end',
    flexDirection: 'column',
    height: 23,
    justifyContent: 'flex-end',
    width: 60,
    left: 310,
    top: 300
  },
  inputpostionStyle: {
    // bottom: 30,
    // height: 18,
    // width: 315
    top: 300,
  },
  chatwindowStyle: {
    backgroundColor: 'yellow',
    // flexDirection: 'row',
    top: 200,
  },
  textInputStyle: {
    height: 40, borderColor: 'gray', borderWidth: 1
  },
  textInputStyleTwo: {
    height: 40, borderColor: 'gray', borderWidth: 1, bottom: 540
  },
  textViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    left: 100
  },
  logOutBtn: {
    // top: 480
  }

};

export default Chat;
