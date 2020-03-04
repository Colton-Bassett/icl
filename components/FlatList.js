import React, {Component, Props} from 'react';
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
} from 'react-native';
import Data from './Data';

export class MyList extends Component {
    constructor() {
        super();
        // super(props)
        this.initData = Data
        this.state = {
            data: this.initData
        };
    }
    actionOnRow(item) {
        // Passing class data (for clicked row) to ClassDetails for display
        this.props.navigation.push('ClassDetails', {
        classData: item,
        });
    }

    renderItem = ({item}) => {
        return  ( 
            <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Text style={styles.title}> {item.title}</Text>
                        <Text style={styles.body}> {item.building}</Text>
                        <Text style={styles.body}> {item.date}</Text>
                    </View>
                    <View style={styles.item2}>
                        <Text style={styles.bodyRight}> {item.time}</Text>
                    </View>    
                </View>
            </TouchableWithoutFeedback>
        );    
    };

    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    item: {
      paddingTop: 10,
      paddingBottom: 20,
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
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
    }
  });