import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SignupPage from "./components/pages/SignupPage";
import { Navigation } from "react-native-navigation";
export default class App extends Component {
  render() {
    return <SignupPage />;
  }
}
