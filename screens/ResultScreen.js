import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from '../config';
import AppHeader from '../components/AppHeader';

export default class App extends Component {
constructor() {
  super();
  this.state={
    teamsRank: []
  }
}

  showTeamRank=()=>{
    var team = [];
    var teamRef = db.ref('teams/')
    teamRef.on("value", (data)=>{
      var teamList = data.val()
      for(var teams in teamList) {
        if(teamList[teams]['isButtonPressed']===true){
          teamList[teams]['teamName']=teams
          team.push(teamList[teams])
        }
      }
      team.sort(function(team1,team2){
        return team1.timestamp-team2.timestamp
      })
      this.setState({
        teamsRank: team
      })
      console.log(teamList);
    });
  }

  componentDidMount() {
    this.showTeamRank()
  }

  resetdb=()=>{
    var resetDatabase = db.ref('teams/').set({
      red:{
        isButtonPressed: false,
        timestamp: 0
      },
      green:{
        isButtonPressed: false,
        timestamp: 0
      },
      blue:{
        isButtonPressed: false,
        timestamp: 0
      },
      yellow:{
        isButtonPressed: false,
        timestamp: 0
      }
    })
    this.setState({
      teamDetails:[]
    })
    this.props.navigation.navigate('HomeScreen');
  }

  render() {
    return (
      <View style={{flex:1}}>
      <AppHeader/>
      <View>
      {this.state.teamsRank.map((teams)=>(
        <View style={{
          width: 140,
          height:55,
          borderWidth: 2,
          margin: 5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: teams.teamName
        }}>
        <Text>{teams.teamName.toUpperCase()}
        </Text>
      </View>
      ))}
      </View>
      <Button title="Reset" style={{
        width: 100,
        height:100
      }}
      onPress={this.resetdb}/>
      </View>
    );
  }
}
