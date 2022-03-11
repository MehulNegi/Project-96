import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import SoundButton from '../components/SoundButton'

export default class HomeScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <SoundButton color={this.props.navigation.getParam('color')}/>
        <TouchableOpacity style= {{alignItems: 'center', justifyContent: 'center',                  borderWidth: 2, width: 200, height: 40, marginTop: 80, alingSelf: 'center',                 marginLeft: 70, backgroundColor: 'blue'}} onPress={()=>{
          this.props.navigation.navigate('ResultScreen');
        }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Results
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
