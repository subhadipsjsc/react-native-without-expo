import React, { Component } from 'react'
import { Text, View ,StyleSheet , Button ,Alert} from 'react-native'

import {Navigation} from 'react-native-navigation';



export default class App extends Component {    

    constructor(props) {
        super(props);
        this.gotoscreen = this.gotoscreen.bind(this);                         
    }
    

    gotoscreen (screenName) {
        Navigation.push(this.props.componentId, {
            component: {
              name: screenName
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading ...</Text>

                <View style={styles.button_container}>

                    <Button
                        title="SignUp"
                        style={styles.button}
                        onPress={ this.gotoscreen.bind(this, 'auth_signup')}
                    />

                    <Button
                    title="LogIn"
                    style={styles.button} 
                    onPress={ this.gotoscreen.bind(this, 'auth_login')}             
                    />

                    
                </View>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
      fontSize: 28,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:"100%"
    },
    button: {
        backgroundColor: 'green',
        width: '40%',
        height: 40
    }
})
