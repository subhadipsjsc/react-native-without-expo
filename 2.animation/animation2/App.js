import React from 'react';
import { StyleSheet, View, Dimensions, Text, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';


export default class Example extends React.Component {
    constructor(props) {
        super(props);
       
    }

    

    render() {
        return (
            <PanGestureHandler
                maxPointers={1}
                onGestureEvent={ e => console.log(JSON.stringify( e.nativeEvent,null,'\t'))}
            >
                <View style={styles.container}>
                    <Animated.View style={styles.box} >
                        <Text> ok</Text>
                    </Animated.View>
                </View>

            </PanGestureHandler>
            
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#000',
    },
});