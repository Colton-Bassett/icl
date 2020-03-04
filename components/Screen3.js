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

  export default class Screen3 extends Component {
    static navigationOptions = {
        drawerLabel: 'Add Group',
        drawerIcon: () => (
            <Image source={require('../icons/group.png')} />
        )
    }
      render() {
          return (
              <View style={styles.view}>
                  <Text> DrawerNavigator Screen 3 </Text>
                  <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.TouchableHighlight} underlayColor={'#f1f1f1'}>
                      <Text style={styles.text}> Go Back </Text>

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
        backgroundColor: 'green',
    },
    text: {
        fontSize: 20,
        color: 'black'
    },
    touchableHighlight: {
        backgroundColor: 'orange',
        paddingVertical: 20,
        paddingHorizontal: 50,
        margin: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
    }
})