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
export default class UserScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Tạo nhân vật</Text>
        <Image style={styles.avatar} source={require('./icon/av3.png')} />
        <TextInput
          style={styles.TextInPut}
          placeholder="Nhập tên của bạn ..."
          onChangeText={(data) => {
            this.setState({name: data});
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Mess', {username: this.state.name});
          }}>
          <Text style={styles.btn}>Xong</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  avatar: {width: 70, height: 70, marginBottom: 10},
  Text: {fontSize: 30, fontWeight: 'bold', marginBottom: 20, marginTop: 20},
  TextInPut: {fontSize: 20},
  btn: {
    fontSize: 20,
    backgroundColor: '#0099CC',
    color: 'white',
    padding: 10,
    borderRadius: 20,
  },
});
