import React from 'react';
import { Component, Node, } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ItemList from './ItemList';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      data: []
    }
  }
  handleSave = () => {
    const { text, data } = this.state;
    data.push({ text });
    this.setState({ data, text: '' });
    console.log(this.state.data);
  };

  render() {
    const { text, data } = this.state
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.title}>
          <Text style={styles.title_text}>To-Do Application</Text></View>
          <View
            style={{ backgroundColor: '#ccc', padding: 10, flexDirection: 'row' }}>
            <TextInput style={styles.input} value={text} onChangeText={(text) => this.setState({ text })} />
            <TouchableOpacity onPress={this.handleSave} style={styles.button}>
              <Text style={styles.title_text}>Ekle</Text>
            </TouchableOpacity>
          </View>
        
        <View>
          {data.map((item)=>{
            return (<ItemList text={item.text}/>)
            })
        }
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    backgroundColor: '#cd950c',
    padding: 20,
  },
  title_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
    borderRadius:10
  },
  button: {
    padding: 10,
    backgroundColor: '#cd950c',
    borderRadius: 10,
    marginLeft: 10,
  },
});

//export default App;
