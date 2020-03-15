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
    
export default class DiscountDetails extends Component {
    constructor(props) {
        super(props)
        console.log(props.route.params.discountData)
    }
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}> {this.props.route.params.discountData.title} </Text>
                <Text style={styles.text}> {this.props.route.params.discountData.info} </Text>
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