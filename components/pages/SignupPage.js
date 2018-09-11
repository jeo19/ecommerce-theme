import React, { Component } from "react";
import { TouchableOpacity, StatusBar, Dimensions } from "react-native";
import {
  Container,
  SubContainer,
  Logo,
  Slogun,
  Email,
  Passwd,
  GetPasswd,
  LoginText,
  SignupText,
  SignupButton
} from "../theme/Signup";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
const { width, height } = Dimensions.get("window");
export default class SignupPage extends Component {
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
