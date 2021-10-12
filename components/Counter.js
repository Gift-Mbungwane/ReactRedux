import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { decrement, increment, reset } from "../actions/CounterAction";

class Counter extends Component<Props> {
  constructor(props: Props) {
    super(props);
    /* this.state = {
      count: 0,
    };
    */
  }

  increment = () => {
    // this.setState({ count: this.state.count + 1 });

    this.props.increment();
  };

  decrement = () => {
    //this.setState({ count: this.state.count - 1 });
    this.props.decrement();
  };

  reset = () => {
    // this.setState({ count: 0 });
    this.props.reset();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={this.decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.props.count}</Text>
        <TouchableOpacity onPress={this.increment}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.reset}>
          <Text style={styles.text}>reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  text: {
    fontSize: 40,
  },
});

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
