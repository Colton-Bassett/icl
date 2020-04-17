import React, {Component, Props} from 'react';
import { 
    createStackNavigator
} from '@react-navigation/stack';

import ClassDetails from './ClassDetails';
import { View, Text, Button, Image, Alert, TouchableOpacity } from 'react-native';
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
    constructor(props) {
        super(props);
        // super(props)
    }

    navigateToDrawer() {
        this.props.navigation.openDrawer()
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
                <Stack.Screen name="ClassDetails" component={ClassDetails} options={{ title: 'Class Details' }}/>
            </Stack.Navigator>  
        )
    }
}
