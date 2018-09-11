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
const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
  align-items: center;
  align-content: space-around;
  justify-content: space-evenly;
  margin-top: 10;
`;
const SubContainer = styled.View`
  background-color: white;
`;
const Logo = styled.Text`
  color: black;
  font-size: 50;
  font-weight: bold;
  letter-spacing: 3px;
`;
const Slogun = styled.Text`
  text-align: center;
  color: #a0a0a0;
  font-size: 15;
`;
const Email = styled.TextInput`
  font-size: 20;
  width: 300;
  border: 2px solid #a0a0a0;
  border-radius: 7;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 15px;
`;
const Passwd = styled.TextInput`
  font-size: 20;
  width: 300;
  border: 2px solid #a0a0a0;
  border-radius: 7;
  padding: 15px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top-width: 0;
`;
const GetPasswd = styled.Text`
  color: #a0a0a0;
  width: 300;
  font-size: 15;
  text-align: right;
  font-weight: 100;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const LabelText = styled.Text`
  color: black;
  width: 300;
  text-align: center;
`;
const LoginText = styled(LabelText)`
  font-size: 25;
  font-weight: 300;
  background-color: #a0a0a0;
  padding: 15px;
  border-radius: 7;
`;
const SignupText = styled(LabelText)`
  color: #a0a0a0;
  padding: 5px;
`;
const SignupButton = styled(LabelText)`
  font-size: 15;
`;
export default class Signup extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <SubContainer>
          <Logo>Spark</Logo>
          <Slogun>Mobile UI Kit</Slogun>
        </SubContainer>
        <SubContainer>
          <Email
            placeholder={"Email Adress"}
            underlineColorAndroid={"transparent"}
          />
          <Passwd
            placeholder={"Password"}
            underlineColorAndroid={"transparent"}
          />
          <TouchableOpacity>
            <GetPasswd>Forgot Password?</GetPasswd>
          </TouchableOpacity>
          <TouchableOpacity>
            <LoginText>Login</LoginText>
          </TouchableOpacity>
        </SubContainer>
        <SubContainer>
          <SignupText>New member?</SignupText>
          <TouchableOpacity>
            <SignupButton>CREATE ACCOUNT</SignupButton>
          </TouchableOpacity>
        </SubContainer>
      </Container>
    );
  }
}
const Form = () => (
  <View>
    <Passwd placeholder={"Password"} />
  </View>
);
