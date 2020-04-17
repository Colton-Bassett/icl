import React, {Component, Props} from 'react';
import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator.js';
import DiscountStackNavigator from './DiscountStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Alert,
    Image,
  } from 'react-native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
        <View style={styles.container2}>
        </View>
        <View style={styles.container}>
            <View style={styles.item}>
                <View style={styles.bigImageContainer}>
                    <Image
                        style={styles.bigImage}
                        source={require('../icons/Avatar.png')}
                    />         
                </View>
                <Text style={styles.text}> {"ICL"} </Text>
            </View>
        </View>
        <View style={styles.container2}>

        </View>


        <DrawerItemList {...props} />

        </DrawerContentScrollView>
        
    );
}


export default class DrawerNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator 
                initialRouteName="Classes"
                drawerContent={props => <CustomDrawerContent {...props} />}
                drawerContentOptions={{
                    activeTintColor: "#BA1C21",
                    activeBackgroundColor: "#C9C9C9",
                  }}
                > 
                    <Drawer.Screen name="Classes" component={StackNavigator} />
                    <Drawer.Screen name="Discounts" component={DiscountStackNavigator}/>
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        marginTop: -20,
        backgroundColor: '#881518'
    },
    text: {
        color: 'white',
        paddingTop: 10,
        paddingLeft: 20,
        fontSize: 18,
    },
    container2: {
        flex: 1,
        height: 15,

    },
    item: {
      paddingTop: 10,
      paddingBottom: 15,
      marginVertical: 8,
    },
    item2: {
        paddingTop: 10,
        paddingBottom: 20,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
    title: {
        fontSize: 16,
        marginHorizontal: 16,
        fontWeight: '700'
    },
    body: {
        fontSize: 14,
        marginHorizontal: 16,
        fontWeight: '300',
        color: '#707070'
    },
    bodyRight: {
        fontSize: 14,
        marginHorizontal: 16,
        textAlign: "right",
        fontWeight: '300',
        color: '#707070',

      },
    contentContainer: {
        backgroundColor: 'white',
    },
    bigImageContainer: {
        paddingTop: 10,
        paddingLeft: 20,
    },
    bigImage: {
        width: 70,
        height: 70,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
    }
  });