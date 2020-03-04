import React, {Component} from 'react';
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
    TouchableHighlight,
  } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = ({ screenProps }) => ({
        title: 'Home',
        headerLeft: (
            <Button onPress={() => screenProps.openDrawer()} title='OPEN' color='red' />
        )
    })
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}> This is the Homescreen </Text>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Screen4')} style={styles.touchableHighlight} underlayColor={'#f1f1f1'}>
                    <Text> Go to screen 2</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20,
    },
    touchableHighlight: {
        backgroundColor: 'yellow',
        marginVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
    }
})