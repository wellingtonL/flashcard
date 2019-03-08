import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import {Constants} from 'expo'

import AddCard from './views/AddCard'
import DeckDetails from './views/DeckDetails'
import Decks from './views/Decks'
import AddDeck from './views/AddDeck'
import Quiz from './views/Quiz'
import { setLocalNotification } from './utils/helpers'

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

const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: Decks,
            navigationOptions: {
                title: 'Flashcard Decks'
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
        Deck: {
            screen: Deck,
            navigationOptions: {
                title: 'Deck',
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
)

const MainContainer = createAppContainer(MainNavigator)
export default class App extends React.Component {
    componentDidMount = () => {
        setLocalNotification()
    }

    render() {
        return (
            <View style={styles.container}>
                <FlashcardStatusBar barStyle="dark-content" />
                <MainContainer />
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
