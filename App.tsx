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

import DrawerNavigator from "./components/DrawerNavigator.js"

declare var global: {HermesInternal: null | {}}; 


const App = () => {
    return (
        <>
            <DrawerNavigator />
        </>
    );
};

export default App;