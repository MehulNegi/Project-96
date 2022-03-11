import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Homescreen extends React.Component{
  render() {
    return(
      <View>
        <AppHeader/>

        <TouchableOpacity style={styles.button} onPress={() => {
          this.props.navigation.navigate('TeamScreen');
        }}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 150,
    width: 200,
    height: 100,
    backgroundColor: 'green'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
});