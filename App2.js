import React, {Component} from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {Constants} from 'expo'

import AddCard from './views/AddCard'
import DeckDetails from './views/DeckDetails'
import Decks from './views/Decks'
import AddDeck from './views/AddDeck'
import Quiz from './views/Quiz'
import { setLocalNotification } from './helpers/utils'

function FlashcardStatusBar({ backgroundColor, ...props }) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar
                translucent
                {...props}
            />
        </View>
    )
}

export default class Home extends React.Component {
componentDidMount = () => {
        setLocalNotification()
        
    render() {
        return (
            <View style={styles.container}>
                <AppStackNavigator />
                <FlashcardStatusBar barStyle="dark-content" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerTitle: {
        fontSize: 24
    }
})


const AppStackNavigator = createStackNavigator({
        
    
        Home: {
            screen:Decks ,
            navigationOptions: {
                title: 'Flashcard Decks',
                headerTitleStyle: {
                    fontSize:24
                }
            }
        },
        AddCard: {
            screen: AddCard,
            navigationOptions: {
                title: 'Add a Card',
                headerMode: 'none',
                headerTitleStyle: {
                    fontSize: 24
                }
            }
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions: {
                title: 'Add a deck',
                headerTitleStyle: {
                    fontSize: 24
                }
            }
        },
        DeckDetails: {
  
            screen: DeckDetails,
            navigationOptions: {
                title: 'DeckDetails',
                headerTitleStyle: {
                    fontSize: 24
                }
            }
        },
       
        Quiz: {
            screen: Quiz,
            navigationOptions: {
                title: 'Quiz',
                headerTitleStyle: {
                    fontSize: 24
        
            }
        }
    }
}
)

           


