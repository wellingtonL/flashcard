import React, {Component} from 'react';
import { StyleSheet, Button, Text, View, AsyncStorage, Platform } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import { setLocalNotification } from './helpers/utils'

// views
import Decks from './views/Decks'
import DeckDetails from './views/DeckDetails'
import AddCard from './views/AddCard'
import AddDeck from './views/AddDeck'
import Quiz from './views/Quiz'
import HomeScreen from './views/HomeScreen'

  

  const AppNavigator=createStackNavigator(
  {
  Deck:Decks,
  DeckDetail: DeckDetails,
  AddCards: AddCard,
  AddDecks: AddDeck,
  Quizs: Quiz
 })

const AppContainer=createAppContainer(AppNavigator)

export default class App extends React.Component {

    render() {
      return (
        <View style={styles.container}>
        <AppContainer />
        </View>
        )
    }
  }
  


const styles=StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
})
