import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Animated,
  Easing,
  TouchableWithoutFeedback
} from "react-native";
const scaleValue = new Animated.Value(0);
const circleScale = scaleValue.interpolate({
  inputRange: [0, 0.5, 1],
  outputRange: [1, 1.5, 2]
});

export default class Scale extends React.Component {
  onPressIn = () => {
    scaleValue.setValue(0);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  };
  onPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  };
  render() {
    const transformStyle = { transform: [{ scale: circleScale }] };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
        >
          <Animated.View style={[styles.circle, transformStyle]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    fontSize: 100
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ccc"
  }
});
