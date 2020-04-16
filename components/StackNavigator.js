import React, {Component, Props} from 'react';
import { 
    createStackNavigator, createAppContainer, DrawerActions
} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import Screen4 from './Screen4';
import ClassDetails from './ClassDetails';
import { View, Text, Button, Image } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { MyList } from './FlatList.js';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
{/* 
{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: { height: 55, backgroundColor: 'Orange'},
        headerTitleStyle: {fontWeight: 'bold', color: 'white'},
    }
}
);
*/}

function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../icons/menu.png')}
      />
    );
  }

export default class StackNavigator extends Component {
    constructor() {
        super();
        // super(props)
    }

    render() {
        return (
            <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#881518',
                
            },
                headerTintColor: '#fff',
            }}
            >
                <Stack.Screen name="Classes" component={MyList} 
                />
                <Stack.Screen name="ClassDetails" component={ClassDetails} options={{ title: 'Class Details' }}/>
            </Stack.Navigator>  
        )
    }
}