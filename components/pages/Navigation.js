import { createStackNavigator } from "react-navigation";
import SignupPage from "./SignupPage";
import OfferPage from "./OfferPage";
export default (RootStack = createStackNavigator(
  {
    SignupScreen: {
      screen: SignupPage,
      navigationOptions: {
        header: null
      }
    },
    OfferScreen: {
      screen: OfferPage
    }
  },
  {
    initialRouteName: "SignupScreen"
  }
));
