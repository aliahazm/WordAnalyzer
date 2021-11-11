
import React, {Component} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const vowels = ["a","e","i","o","u"];
const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y", "z"];

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      word: '',
      noConsonant: 0,
      noVowels: 0,
      noCharacters: 0
    }
    
    
    this.analyze = () => {
      let vowel_count = 0;
      let consonant_count = 0;
      let character_count = 0;
      let str = this.state.word;

      for(let letter of str.toLowerCase()){
        if (vowels.includes(letter)){
          vowel_count++;
        }
        else if (consonants.includes(letter)){
          consonant_count++;
        }

        if (letter != ' '){
          character_count += letter.length;
        }
      }

      this.setState({noConsonant: consonant_count});
      this.setState({noVowels: vowel_count});
      this.setState({noCharacters: character_count});

    }
  }

  render() {
    return (
    <View style={styles.container}>
    <Text style={styles.header}>A Word Analyzer</Text>

      <Text >Word: </Text>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={(word) => this.setState({word})}/>
      <Button onPress={this.analyze} title='Analyze'/>
    
    
    <Text >Word: {this.state.word}</Text>
    <Text >No of Consonants: {this.state.noConsonant}</Text>
    <Text >No of Vowels: {this.state.noVowels}</Text>
    <Text >No of Characters: {this.state.noCharacters}</Text>

    
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },

  header: {
     marginTop: 60,
     fontSize: 30,
     textAlign: 'center',
     margin: 10,
  },


});
