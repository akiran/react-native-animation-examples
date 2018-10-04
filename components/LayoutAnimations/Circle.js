import React from "react";
import { View, StyleSheet, Button, LayoutAnimation } from "react-native";

export default class Circle extends React.Component {
  state = { size: 100 };
  componentDidMount() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }
  increment = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState(state => ({ size: state.size + 100 }));
  };
  decrement = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState(state => ({ size: state.size - 100 }));
  };
  render() {
    const { size } = this.state;
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.circle,
            { width: size, height: size, borderRadius: size / 2 }
          ]}
        />
        <Button style={styles.button} title="-" onPress={this.decrement} />
        <Button style={styles.button} title="+" onPress={this.increment} />
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
    backgroundColor: "#ccc"
  }
});
