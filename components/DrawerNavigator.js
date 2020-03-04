import React, {Component} from 'react';
import { createDrawerNavigator, createAppContainer 
} from '@react-navigation/drawer';
import { 
    createStackNavigator
} from '@react-navigation/stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
{/*
const MyDrawerNavigator = createDrawerNavigator({
    Home: { screen: createStackNavigator},
    Screen1: {screen: Screen1},
    Screen2: {screen: Screen2},
    Screen3: {screen: Screen3}
},
{
    initialRouteName: 'Home',
    drawerWidth: 300,
    drawerPosition: 'left',
}
);
 */}

//const AppContainer = createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component {
    render() {
        //return <AppContainer />;
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    {/* 
                    <Drawer.Screen name="Screen 1" component={Screen1}/>
                    <Drawer.Screen name="Screen 2" component={Screen2}/>
                    <Drawer.Screen name="Screen 3" component={Screen3}/>
                    */}
                    <Drawer.Screen name="Stack" component={StackNavigator}/>
                    <Drawer.Screen name="Screen 1" component={Screen1}/>
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}