import React, {Component} from 'react';
import { 
    createStackNavigator
} from '@react-navigation/stack';

import DiscountDetails from './DiscountDetails';
import { View, Text, Button, Image, Alert, TouchableOpacity } from 'react-native';
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
                <Stack.Screen name="Discounts" component={MyList}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity activeOpacity = { .5 } onPress={this.props.navigation.openDrawer}
                        style={{ marginLeft: 10}}
                        > 
                        
                        <Image 
                        source={require('../icons/menu.png')}  />          
                        </TouchableOpacity>
    
                    )
                }}
                />
                <Stack.Screen name="DiscountDetails" component={DiscountDetails} options={{ title: 'Discount Details' }}/>
            </Stack.Navigator>  
        )
    }
}