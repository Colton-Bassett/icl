import React, {Component} from 'react';
import { createDrawerNavigator, createAppContainer 
} from '@react-navigation/drawer';
import { 
    createStackNavigator
} from '@react-navigation/stack';
import StackNavigator from './StackNavigator';
import DiscountStackNavigator from './DiscountStackNavigator';
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

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </DrawerContentScrollView>
    );
  }


export default class DrawerNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Classes"> 
               
                    <Drawer.Screen name="Classes" component={StackNavigator}/>
                    <Drawer.Screen name="Discounts" component={DiscountStackNavigator}/>
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}