import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import io from 'socket.io-client';

export default class MessageScreen extends React.Component {
  constructor({props}) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
      obj: {},
      name: '',
    };
  }

  componentDidMount() {
    this.setState({name: this.props.route.params.username});
    this.socket = io('http://192.168.1.2:3000/');
    this.socket.on('get message', (obj) => {
      this.setState({chatMessages: [...this.state.chatMessages, obj]});
      console.log('aaa', this.state.chatMessages);
    });
  }
  submitChatMessage() {
    this.socket.emit('chat message', this.state.obj);
    this.setState({chatMessage: ''});
  }

  render() {
    const chatMessages = this.state.chatMessages.map((obj) => {
      switch (obj.name) {
        case this.state.name:
          return (
            <View style={{flexDirection: 'row-reverse'}}>
              <Image
                style={styles.avataruser}
                source={require('./icon/av1.png')}></Image>
              <View style={{marginLeft: 5}}>
                <Text
                  style={{marginTop: 15, marginLeft: 'auto', marginRight: 5}}>
                  {obj.name}
                </Text>
                <Text style={styles.itemMessage}>{obj.chatMessage}</Text>
              </View>
            </View>
          );

        default:
          return (
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.avataruser}
                source={require('./icon/av1.png')}></Image>
              <View style={{marginLeft: 5}}>
                <Text style={{marginTop: 15}}>{obj.name}</Text>
                <Text style={styles.itemMessage}>{obj.chatMessage}</Text>
              </View>
            </View>
          );
      }
    });

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>{chatMessages}</ScrollView>
        <View style={styles.boxsend}>
          <TextInput
            placeholder={'Message...'}
            style={styles.textinput}
            autoCorrect={false}
            value={this.state.chatMessage}
            onSubmitEditing={() => this.submitChatMessage()}
            onChangeText={(chatMessage) => {
              this.setState({chatMessage});
              this.setState({
                obj: {
                  name: this.state.name,
                  chatMessage: this.state.chatMessage,
                },
              });
            }}
          />
          <TouchableOpacity onPress={() => this.submitChatMessage()}>
            <Image
              style={styles.sendBtn}
              source={require('./icon/sendicon.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textinput: {
    borderWidth: 2,
    borderRadius: 30,
    flex: 1,
    height: 40,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  scrollview: {},
  boxsend: {flexDirection: 'row'},
  sendBtn: {
    width: 70,
    height: 55,
    marginTop: 2,
  },
  itemMessage: {
    borderRadius: 30,
    backgroundColor: '#00B2EE',
    color: 'white',
    fontSize: 20,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  avataruser: {
    width: 60,
    height: 60,
    marginTop: 14,
  },
});
