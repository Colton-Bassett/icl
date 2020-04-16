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
import DiscountData from './DiscountData';

import Amplify from '@aws-amplify/core';
import config from '../aws-exports';
Amplify.configure(config);
import { API, graphqlOperation } from 'aws-amplify';

const ListDiscounts = `
query {
    listCourses(limit: 100) {
        items {
            id title building date time isCourse info
    }
}
}
`;

export class MyList extends Component {
    constructor() {
        super();
        // super(props)
        this.state = {
            discounts: []
        };
    }
    actionOnRow(item) {
        // Passing class data (for clicked row) to ClassDetails for display
        this.props.navigation.push('DiscountDetails', {
        discountData: item,
        });
    }

    sortData(discounts) {
        var discountlist = []
        console.log("sortData:", discountlist.length)
        for (i = 0; i < discounts.length; i++) {
            if (!discounts[i].isCourse) {
                discountlist.push(discounts[i])
            }
        };
        console.log("sortData:", discountlist)
        return discountlist
        
    };

    renderItem = ({item}) => {
        return  ( 
            <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Text style={styles.title}> {item.title}</Text>
                        <Text style={styles.body}> {item.info}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );    
    };

    async componentDidMount() {
        try {
            // const discounts = await API.graphql(graphqlOperation(ListDiscounts));
            // console.log(discounts)
            // this.setState({ discounts: discounts['data']['listCourses']['items'] });
            // console.log("state discounts", this.state.discounts)

            const discounts = await API.graphql(graphqlOperation(ListDiscounts));
            var d = discounts['data']['listCourses']['items'];
            this.setState({discounts: this.sortData(d)});
            //console.log("state courses", this.state.courses)

        } catch (err) {
            console.log('error: ', err);
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.discounts}
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