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

  export default class Screen4 extends Component {
    static navigationOptions = {
        title: 'Screen 2'
    }
      render() {
          return (
              <View style={styles.container}>
                  <Text> StackNavigator screen 2 </Text>
                  <TouchableHighlight onPress={() => this.props.navigation.navigate('Screen5')} style={styles.TouchableHighlight} underlayColor={'#f1f1f1'}>
                      <Text style={styles.text}> Go to Screen 3 </Text>

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
        backgroundColor: 'silver',
        marginVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
    }
})