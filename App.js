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



  class DecksScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 5, backgroundColor: '#ccebff', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Decks!</Text>
        <Button
          title="Go to Decks"
          onPress={() => this.props.navigation.navigate('Decks')} />
        </View>
        );
      }
    }



class DeckDetailsScreen extends React.Component {
   render() {
     return (
       <View style={{ flex: 5, backgroundColor: '#99d6ff', justifyContent: 'center', alignItems: 'center' }}> 
       <Text>DeckDetails!</Text>
        <Button
          title="Go to DeckDetails"
          onPress={() => this.props.navigation.navigate('DeckDetails')} /> 
        </View>
        );
      }
    }
class AddCardScreen extends React.Component {
  render() {
    return (
       <View style={{ flex: 5, backgroundColor: '#66c2ff', justifyContent: 'center', alignItems: 'center' }}> 
        <Text>AddCard!</Text>
        <Button
          title="Go to AddCard"
          onPress={() => this.props.navigation.navigate('AddCard')} />
        </View>
        );
      }
    }
class AddDeckScreen extends React.Component {
  render() {
    return (

        <View style={{ flex: 5, backgroundColor: '#33adff', justifyContent: 'center', alignItems: 'center' }}>
        <Text>AddDeck!</Text>
        <Button
          title="Go to AddDeck"
          onPress={() => this.props.navigation.navigate('AddDeck')} /> 
        </View>
        );
      }
    }
class QuizScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 5, backgroundColor: '#008ae6', justifyContent: 'center', alignItems: 'center' }}>   
        <Text>Quiz!</Text>
         <Button
          title="Go to Quiz"
          onPress={() => this.props.navigation.navigate('Quiz')}
        />
        </View>
               
        );
  }
}

 
 const DecksStack = createStackNavigator({
  Deck: DecksScreen,
 });
 const DeckDetailsStack = createStackNavigator({
  DeckDetails: DeckDetailsScreen,
 });
 const AddCardStack = createStackNavigator({
  AddCard: AddCardScreen,
 });
 const AddDeckStack = createStackNavigator({
  AddDeck: AddDeckScreen,
 });
 const QuizStack = createStackNavigator({
  Quiz: QuizScreen,
 });
       
export default createAppContainer(createBottomTabNavigator(
{

Decks: DecksStack,
DeckDetails: DeckDetailsStack,
AddCard: AddCardStack,
AddDeck: AddDeckStack,
Quiz: QuizStack,

},

));

 


   
