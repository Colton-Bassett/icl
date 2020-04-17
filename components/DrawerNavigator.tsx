import React, {Component, Props} from 'react';
import { createDrawerNavigator
} from '@react-navigation/drawer';
import { 
    createStackNavigator
} from '@react-navigation/stack';
import StackNavigator from './StackNavigator.js';
import DiscountStackNavigator from './DiscountStackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

// function CustomDrawerContent(props) {
//     return (
//       <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//         <DrawerItem label="Help" onPress={() => alert('Link to help')} />
//       </DrawerContentScrollView>
//     );
//   }


export default class DrawerNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator 
                initialRouteName="Classes"
                > 
                    <Drawer.Screen name="Classes" component={StackNavigator} />
                    <Drawer.Screen name="Discounts" component={DiscountStackNavigator}/>
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}