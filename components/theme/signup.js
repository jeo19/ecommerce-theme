import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from "react-native";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
const { width, height } = Dimensions.get("window");
export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
  align-items: center;
  align-content: space-around;
  justify-content: space-evenly;
  margin-top: 10;
`;
export const SubContainer = styled.View`
  background-color: white;
`;
export const Logo = styled.Text`
  color: black;
  font-size: 50;
  font-weight: bold;
  letter-spacing: 3px;
`;
export const Slogun = styled.Text`
  text-align: center;
  color: #a0a0a0;
  font-size: 15;
`;
export const Email = styled.TextInput`
  font-size: 20;
  width: 300;
  border: 2px solid #a0a0a0;
  border-radius: 7;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 15px;
  padding-left: 25px;
`;
export const Passwd = styled.TextInput`
  font-size: 20;
  width: 300;
  border: 2px solid #a0a0a0;
  border-radius: 7;
  padding: 15px;
  padding-left: 25px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top-width: 0;
`;
export const GetPasswd = styled.Text`
  color: #a0a0a0;
  width: 300;
  font-size: 15;
  text-align: right;
  font-weight: 100;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const LabelText = styled.Text`
  color: black;
  width: 300;
  text-align: center;
`;
export const LoginText = styled(LabelText)`
  font-size: 25;
  font-weight: 300;
  background-color: #a0a0a0;
  padding: 15px;
  border-radius: 7;
`;
export const SignupText = styled(LabelText)`
  color: #a0a0a0;
  padding: 5px;
`;
export const SignupButton = styled(LabelText)`
  font-size: 15;
`;
