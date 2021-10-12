import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { DECREMENT, INCREMENT, RESET } from "./actions/CounterAction";
import Counter from "./components/Counter";
import GoogleDriveFilesList from "./components/GoogleDriveFilesList";
import Multiply from "./components/Multiply";
import store from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
        <Multiply />
        <GoogleDriveFilesList />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
