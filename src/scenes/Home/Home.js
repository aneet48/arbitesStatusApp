import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import { Card, Button } from "react-native-elements";
import Header from "./components/Header";
import Explore from "./components/Explore";
import styles from "../../assets/styles/lightMode";
import LoveImg from "../../assets/images/love.jpg";
import LifeImg from "../../assets/images/life.jpg";
import { AdMobBanner } from "react-native-admob";
var { width } = Dimensions.get("window");
var box_count = 3;
var box_height = width / box_count - 40;

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }

  gotoType = () => {
    this.props.navigation.navigate("All Categories");
  };

  render() {
    return (
      <View>
        <Header />
        <ScrollView style={styles.container}>
          <Explore {...this.props}/>
          <View style={styles.categoryContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text style={styles.containerTitle}>Quotes By type</Text>
              <TouchableOpacity onPress={this.gotoType}>
                <Text style={styles.containerLink}>View All</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                flexWrap: "wrap"
              }}
            >
              <TouchableWithoutFeedback>
                <View
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#ddd",
                    borderRadius: 5,
                    borderWidth: 1
                  }}
                >
                  <Image
                    source={LifeImg}
                    style={{
                      height: box_height,
                      width: box_height + 10,
                      borderRadius: 10,
                      margin: 5
                    }}
                  />
                  <Text style={{ alignSelf: "center", fontWeight: "500" }}>
                    Life
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>

        {/* <AdMobBanner
          adSize="fullBanner"
          adUnitID="ca-app-pub-3689074202295687/3563709172"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
        /> */}
      </View>
    );
  }
}
