/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { 
  NavigationContainer 
} from '@react-navigation/native';

import { 
  createStackNavigator 
} from '@react-navigation/stack';

import { createDrawerNavigator 
} from '@react-navigation/drawer';

import { MyList } from './components/FlatList.js';
import DrawerNavigator from "../../../../../../../Users/coltonbassett/Documents/Schoolwork/Spring2020/cs-4600/ICL/components/DrawerNavigator.js"
import StackNavigator from "../../../../../../../Users/coltonbassett/Documents/Schoolwork/Spring2020/cs-4600/ICL/components/StackNavigator.js"

declare var global: {HermesInternal: null | {}}; 

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  /* 2. Get the param */
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
        })
      }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      {/*
      <NavigationContainer>
        {/*<StatusBar barStyle="dark-content" /> */}
        {/*<MyList/>
         <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{title: 'Overview'}}
          />
          <Stack.Screen 
            name="Details" 
            component={DetailsScreen} 
            initialParams={{ itemId: 69, otherParam: "KappaPride" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      */}
      <DrawerNavigator />
    </>
  );
};

export default App;