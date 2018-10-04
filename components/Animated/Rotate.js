import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Animated,
  Easing,
  TouchableWithoutFeedback
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const rotateValue = new Animated.Value(0);
const rotation = rotateValue.interpolate({
  inputRange: [0, 1],
  outputRange: ["0deg", "180deg"]
});
export default class Rotate extends React.Component {
  onPressIn = () => {
    rotateValue.setValue(0);
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  };
  onPressOut = () => {
    Animated.timing(rotateValue, {
      toValue: 0,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  };
  render() {
    const transformStyle = { transform: [{ rotate: rotation }] };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
        >
          <Animated.View style={transformStyle}>
            <FontAwesome name="caret-up" size={64} color="green" />
          </Animated.View>
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
  }
});
