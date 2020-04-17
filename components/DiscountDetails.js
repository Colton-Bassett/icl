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
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <View style={styles.bigImageContainer}>
                        <Image
                            style={styles.bigImage}
                            source={require('../icons/Avatar.png')}
                        />         
                        </View>

                    <View style={styles.titleContainer}>
                            <Text style={styles.text}> {this.props.route.params.discountData.title} </Text>
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.rowContainer}>
                            <Image
                                style={styles.smallImage}
                                source={require('../icons/info.png')}
                            />
                            <Text style={styles.text2}> {this.props.route.params.discountData.info} </Text>
                        </View>
                    </View>
                </View>
                </View>

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
        fontSize: 26,
        fontWeight: 'bold',
        margin: 20,
    },
    text2: {
        fontSize: 18,
        alignItems: 'flex-start',

        margin: 20,
    },
    touchableHighlight: {
        backgroundColor: 'red',
        marginVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    item: {
        paddingTop: 10,
        paddingBottom: 20,
        marginVertical: 8,
        flex: 1,

    },
    bodyContainer: {
        paddingVertical: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
    },
    titleContainer: {
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
    },
    bigImageContainer: {
        alignItems: 'center',
        paddingTop: 20,

    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
      itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        width: '100%'

    },
    bigImage: {
        width: 100,
        height: 100,
      },
    smallImage: {
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
        width: 25,
        height: 25,

    }
})