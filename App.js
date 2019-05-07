import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import Home from './src/scenes/Home/Home'
import Category from './src/scenes/AllCategory'
import SingleCat from './src/scenes/Quotes'
import TOD from './src/scenes/Home/components/TOD'

const HomeStack = createStackNavigator(
  {
    Home: Home,
    "All Categories": Category,
    SingleCat: SingleCat,
    TOD
  },
  { headerMode: "none" }
);

const AbDrawerNavigator = createDrawerNavigator({
  Home: HomeStack,
  "All Categories": Category
});

const Root = createAppContainer(AbDrawerNavigator);

export default Root