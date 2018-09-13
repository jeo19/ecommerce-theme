import React, { Component } from "react";
import {
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Text,
  View
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import GridView from "react-native-super-grid";
import Image from "react-native-scalable-image";
const { width, height } = Dimensions.get("window");
import {
  Container,
  SubTitle,
  SearchBox,
  SearchView,
  SliderBox,
  ProductContainer,
  ProductName,
  ProductImg,
  ProductCost,
  ProductNcost,
  ProductPcost,
  ProductOff,
  NotifyText,
  NotifyIcon,
  CartText,
  CartIcon
} from "../theme/Offer";
import { FontAwesome } from "@expo/vector-icons";
export default class OfferPage extends Component {
  static navigationOptions = {
    headerTitle: <Text style={{ fontSize: 14, fontWeight: "bold" }}>Home</Text>,
    headerRight: (
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row"
          }}
        >
          <NotifyText>Notify</NotifyText>
          <NotifyIcon>2</NotifyIcon>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingLeft: 5,
            paddingRight: 5
          }}
        >
          <CartText>Cart</CartText>
          <CartIcon>1</CartIcon>
        </TouchableOpacity>
      </View>
    )
  };
  render() {
    const ProductItems = [
      {
        ImgUrl: require("../../assets/products/Highlander.png"),
        Product: "Highlander",
        Ncost: 50,
        Pcost: 70,
        OffPercent: 33
      },
      {
        ImgUrl: require("../../assets/products/MactreeShoes.png"),
        Product: "Mactree",
        Ncost: 49,
        Pcost: 50,
        OffPercent: 2
      },
      {
        ImgUrl: require("../../assets/products/PumaBackpack.png"),
        Product: "Puma Bag",
        Ncost: 120,
        Pcost: null,
        OffPercent: null
      },
      {
        ImgUrl: require("../../assets/products/MissChase.png"),
        Product: "Miss Chase",
        Ncost: 50,
        Pcost: null,
        OffPercent: null
      },
      {
        ImgUrl: require("../../assets/products/Highlander.png"),
        Product: "Highlander",
        Ncost: 50,
        Pcost: 70,
        OffPercent: 33
      },
      {
        ImgUrl: require("../../assets/products/MactreeShoes.png"),
        Product: "Mactree",
        Ncost: 49,
        Pcost: 50,
        OffPercent: 2
      },
      {
        ImgUrl: require("../../assets/products/PumaBackpack.png"),
        Product: "Puma Bag",
        Ncost: 120,
        Pcost: null,
        OffPercent: null
      },
      {
        ImgUrl: require("../../assets/products/MissChase.png"),
        Product: "Miss Chase",
        Ncost: 50,
        Pcost: null,
        OffPercent: null
      }
    ];
    return (
      <Container>
        <SubTitle>SUMMER OFFER</SubTitle>
        <SearchView>
          <FontAwesome
            color="#a0a0a0"
            size={20}
            name="search"
            style={{ marginLeft: 20 }}
          />
          <SearchBox
            placeholder={"Search"}
            underlineColorAndroid={"transparent"}
          />
        </SearchView>
        <Image
          width={width - 30}
          style={SliderBox}
          source={require("../../assets/slider/slide.png")}
        />
        <GridView
          itemDimension={130}
          items={ProductItems}
          style={{ width: width - 20 }}
          renderItem={item => (
            <ProductContainer>
              <ProductImg>
                <Image width={width / 2 - 80} source={item.ImgUrl} />
              </ProductImg>
              <ProductName>{item.Product}</ProductName>
              <ProductCost>
                <ProductNcost>${item.Ncost}</ProductNcost>
                {item.Pcost != null ? (
                  <ProductPcost>${item.Pcost}</ProductPcost>
                ) : (
                  <Text />
                )}
                {item.OffPercent != null ? (
                  <ProductOff>({item.OffPercent}% off)</ProductOff>
                ) : (
                  <Text />
                )}
              </ProductCost>
            </ProductContainer>
          )}
        />
      </Container>
    );
  }
}
