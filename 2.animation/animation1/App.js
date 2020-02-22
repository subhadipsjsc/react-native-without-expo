import React from 'react';
import { StyleSheet, View, Dimensions, Text ,Animated} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';


export default class Example extends React.Component {
   constructor(props) {
      super(props);
      this.transX = new Animated.Value(0)
      this.onGestureEvent = Animated.event([
         {nativeEvent: {translationX:this.transX }}
      ])
   }

   
   render() {
      return (
         <View style={styles.container}>
            
            <PanGestureHandler onGestureEvent={this.onGestureEvent} >
                  
               <Animated.View style={[ styles.box, { transform: [{ translateX: this.transX}] }]} >
                  <Text> hello </Text>
               </Animated.View>

            </PanGestureHandler>
         </View>
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