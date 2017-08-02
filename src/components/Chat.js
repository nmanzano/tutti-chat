import React, { Component } from 'react';
import { View, TextInput, Text, Button, ScrollView } from 'react-native';
import firebase from 'firebase';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = { chat: '',
    messages: []

   };

    // displaying the data from firebase
    firebase.database().ref('Room').child('Chat').on('value', (snapshot) => {
    
      // this.setState.message.push(snapshot.val())
      let msg = snapshot.val();
      let messages = [];
      for (let outerKey in msg) {
        for (let innerKey in msg[outerKey]) {
          messages.push(msg[outerKey][innerKey]);
        }
      }

      this.setState({ "messages": messages});

    });
  }

  render() {
    return (


      <View>


        {/* Below is the button for logging out of the current user */}
        <View style={styles.logOutPostion}>
          <View style={styles.logOutBtn}>

            <Button
              onPress={() => firebase.auth().signOut()}
              title='Log Out'
            />

          </View>

        </View>


  <ScrollView style={styles.chatwindowStyle}>
            {/* sorting out the view */}
            {this.state.messages.map((message, index) => (
                <View key={`message-${index}`} >

                <Text style={styles.textViewStyle} >
                    {message}
                  </Text>

                </View>
              ))}
  </ScrollView>


        <View style={styles.inputpostionStyle}>

          <TextInput
            style={styles.messageInputStyle}
            placeholder="Type your message"
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
            firebase.database().ref('Room').child('Chat')
            .child(this.props.username)
            .push(this.state.chat: text);
            this.chattextInput.setNativeProps({ text: '' });
          }}
          />
        </View>


      </View>

    );
  }
}


const styles = {
  buttonpostionStyle: {
    bottom: 15,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    left: 310,
    height: 20,
    width: 60,
  },
  chatwindowStyle: {
      backgroundColor: '#f0f8ff',
      height: 550,
      top: 5,
    },
  inputpostionStyle: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: 300,
    top: 10,
    left: 6
  },
  messageInputStyle: {
    height: 17,
    opacity: 0.64,
    color: '#008AD8',
    fontfamily: 'Lucida Grande',
    fontsize: 14,
    lineheight: 17
  },
  textInputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },

  textViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    left: 6
  },
  logOutPostion: {
    height: 60,
    width: 375,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1
  },
  logOutBtn: {
    right: 150,
    top: 20
  }

};

export default Chat;
