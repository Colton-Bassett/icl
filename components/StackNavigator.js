import React, {Component} from 'react';
import { 
    createStackNavigator, createAppContainer, DrawerActions
} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

import { NavigationContainer } from '@react-navigation/native';
import { MyList } from './FlatList.js';

const Stack = createStackNavigator();
{/* 
const MyStackNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Screen4: {screen: Screen4},
    Screen5: {screen: Screen5},

},
{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: { height: 55, backgroundColor: 'Orange'},
        headerTitleStyle: {fontWeight: 'bold', color: 'white'},
    }
}
);


const AppContainer = createAppContainer(MyStackNavigator);
*/}
export default class StackNavigator extends Component {
    render() {
        //return <AppContainer screenProps={{ openDraw: () => this.props.navigation.dispatch(DrawerActions.openDrawer())}} />;
        return (
            
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={MyList}/>
                    <Stack.Screen name="Screen4" component={Screen4}/>
                    <Stack.Screen name="Screen5" component={Screen5}/>
                </Stack.Navigator>
            

        )
    }
}