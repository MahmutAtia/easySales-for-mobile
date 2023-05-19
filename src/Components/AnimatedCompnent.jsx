import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Gesture, GestureDetector, PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
  } from 'react-native-reanimated';


const AnimatedCompnent = () => {
    const start = useSharedValue({ x: 0, y: 0 });
    const AnimatedView = Animated.createAnimatedComponent(View);
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });
  const   animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
      backgroundColor: isPressed.value ? "yellow" : "blue",
    };
  });




  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = start.value.x;
      context.translateY = start.value.y;
    },

})

  // gesture

const gesture = Gesture.Pan()
  .onBegin(() => {
    isPressed.value = true;
  })
  .onUpdate((e) => {
    offset.value = {
      x: e.translationX + start.value.x,
      y: e.translationY + start.value.y,
    };
  })
  .onEnd(() => {
    start.value = {
      x: offset.value.x,
      y: offset.value.y,
    };
  })
  .onFinalize(() => {
    isPressed.value = false;
  });


  return (
    <View className="flex-1 items-center justify-center">
          <PanGestureHandler onGestureEvent={onDrag} >

      <AnimatedView style={ [styles.ball,animatedStyles]} />
    </PanGestureHandler>
    </View>
  );
};

export default AnimatedCompnent;



const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});