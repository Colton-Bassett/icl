import React, {Component} from 'react';
import { 
    createStackNavigator, createAppContainer, DrawerActions
} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import Screen4 from './Screen4';
import DiscountDetails from './DiscountDetails';
//import { NavigationContainer } from '@react-navigation/native';
import { MyList } from './DiscountFlatList.js';

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
export default class DiscountStackNavigator extends Component {
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
                <Stack.Screen name="Discounts" component={MyList}/>
                <Stack.Screen name="DiscountDetails" component={DiscountDetails} options={{ title: 'Discount Details' }}/>
            </Stack.Navigator>  
        )
    }
}