import React, {Component} from 'react';
import { 
    createStackNavigator, createAppContainer, DrawerActions
} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import Screen4 from './Screen4';
import ClassDetails from './ClassDetails';
//import { NavigationContainer } from '@react-navigation/native';
import { MyList } from './FlatList.js';

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
export default class StackNavigator extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MyList}/>
                <Stack.Screen name="ClassDetails" component={ClassDetails}/>
            </Stack.Navigator>    
        )
    }
}