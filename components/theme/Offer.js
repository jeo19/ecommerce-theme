import { Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import Image from "react-native-scalable-image";
const { width, height } = Dimensions.get("window");
console.log(width);
export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
  align-items: center;
  align-content: space-around;
  justify-content: space-evenly;
  margin-top: 10;
`;
export const SubTitle = styled.Text`
  width: ${width - 10};
  font-size: 25;
  font-weight: 600;
  padding: 20px;
`;
export const SearchView = styled.View`
  flex-direction: row;
  justify-content: center;
  width: ${width - 30};
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 9;
`;
export const SearchBox = styled.TextInput`
  font-size: 15;
  width: ${width - 60};
  padding: 15px;
  padding-left: 5px;
`;
export const ImgBox = {
  borderRadius: 7
};
// const SliderBox = () => {
//   return <Image style={{ borderRadius: 20 }} />;
// };
// export default SliderBox;
export const ProductContainer = styled.View`
  justify-content: center;
  border-radius: 7;
  padding: 5px;
  border: 1px solid #a0a0a0;
`;
export const ProductImg = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ProductName = styled.Text`
  font-size: 15;
  font-weight: bold;
  text-align: left;
  padding-left: 10px;
`;
export const ProductCost = styled.View`
  padding-left: 10px;
  flex-direction: row;
`;
export const ProductNcost = styled.Text`
  font-size: 17;
  text-align: left;
`;
export const ProductPcost = styled.Text`
  font-size: 14;
  text-align: left;
  padding-left: 5px;
  padding-top: 3px;
  color: #a0a0a0;
  text-decoration-line: line-through;
`;
export const ProductOff = styled.Text`
  font-size: 14;
  text-align: left;
  padding-left: 5px;
  padding-top: 3px;
  color: #a0a0a0;
`;
