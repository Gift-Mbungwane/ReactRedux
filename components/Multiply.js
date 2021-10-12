import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { doubleNumber, tripleNumber, reset } from "../actions/MultiplyAction";

class Multiply extends Component<Props> {
  constructor(props: Props) {
    super(props);
    /* this.state = {
      count: 0,
    };
    */
  }

  doubleNumber = () => {
    // this.setState({ count: this.state.count + 1 });

    this.props.doubleNumber();
  };

  tripleNumber = () => {
    //this.setState({ count: this.state.count - 1 });
    this.props.tripleNumber();
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
        <Text style={styles.text}>Result:{this.props.result}</Text>
        <TouchableOpacity onPress={this.doubleNumber}>
          <Text style={styles.text}>Double Number</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.tripleNumber}>
          <Text style={styles.text}>Triple Number</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.reset}>
          <Text style={styles.text}>reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

const mapStateToProps = (state) => {
  return {
    result: state.multiply.result,
  };
};
const mapDispatchToProps = {
  doubleNumber,
  tripleNumber,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Multiply);
