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
    
export default class ClassDetails extends Component {
    constructor(props) {
        super(props)
        console.log(props.route.params.classData)
    }
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}> {this.props.route.params.classData.title} </Text>
                <Text style={styles.text}> {this.props.route.params.classData.building} </Text>
                <Text style={styles.text}> {this.props.route.params.classData.date} </Text>
                <Text style={styles.text}> {this.props.route.params.classData.time} </Text>
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
        backgroundColor: 'red',
        marginVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
    }
})