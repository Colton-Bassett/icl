import React, {Component} from 'react';
import { createDrawerNavigator, createAppContainer 
} from '@react-navigation/drawer';
import { 
    createStackNavigator
} from '@react-navigation/stack';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
{/*
{
    initialRouteName: 'Home',
    drawerWidth: 300,
    drawerPosition: 'left',
}
);
*/}


export default class DrawerNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Stack" component={StackNavigator}/>
                    <Drawer.Screen name="Stack 2" component={StackNavigator}/>
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}