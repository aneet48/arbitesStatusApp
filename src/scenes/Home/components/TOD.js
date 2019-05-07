import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Header } from "react-native-elements";
import styles from "../../../assets/styles/lightMode"
import image from "../../../assets/images/life.jpg"
import Icon from "react-native-vector-icons/Feather";


const window = Dimensions.get("window");
const width = window.width - 30
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <LinearGradient
        colors={["#f76074", "#f79eaa"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%"
        }}
      >
        <Header
          leftComponent={{
            icon: "arrow-back",
            color: "#FFFFFF",
            // color: "#000",
            onPress: () => this.props.navigation.goBack()
          }}
          centerComponent={{
            text: "Thought of the day",
            style: {
              fontFamily: "Satisfy-Regular",
              fontSize: 25,
              color: "#FFFFFF"
              // color: "#292929"
            }
          }}
          containerStyle={styles.headerContainer}
        />
        <View style={{ height: width, width: width, alignSelf: "center", }}>
          <ImageBackground
            source={image}
            imageStyle={{  borderRadius: 10 }}
            style={{ width: "100%", height: "100%" }}
          >
            <View
              style={{
                // flex: 1,
                justifyContent: "center",
                alignContent: "center",
                width:"100%",
                height:"100%",
                // margin: 20,
                // borderWidth: 5,
                // borderColor: :"rgba(255,255,255,0.8)",
                // borderRadius: 20,
                // padding: 30
                backgroundColor:"rgba(0,0,0,0.6)"
              }}
            >
              <Text
                selectable
                style={{
                  textAlign: "center",
                  fontFamily: "Satisfy-Regular",
                  color: "#ffffff",
                  fontSize: 25,
                  padding: 10
                }}
              >
                Everyone wants happiness, no one wants pain, but you can’t
                make a rainbow without a little rain
              </Text>
              <Text
                selectable
                style={{
                  textAlign: "center",
                  fontFamily: "Satisfy-Regular",
                  color: "#ffffff",
                  fontSize: 15,
                  // padding: 20,
                  marginTop: 40
                }}
              >
                -Zion Lee
              </Text>
            </View>
          </ImageBackground>
          <View>

          </View>
        </View>
        {/* <Text>jkerherh</Text> */}
        {/* <View
          style={{
            // flex: 1,
            justifyContent: "flex-end",
            alignContent: "center",
            margin: 20,
            borderWidth: 5,
            borderColor: "rgba(255,255,255,0.8)",
            borderRadius: 20,
            padding: 30
          }}
        >
          <Text
            selectable
            style={{
              textAlign: "center",
              fontFamily: "Satisfy-Regular",
              color: "#ffffff",
              fontSize: 40
              // padding: 20
            }}
          >
            Everyone wants happiness, no one wants pain, but you can’t make
            a rainbow without a little rain
          </Text>
          <Text
            selectable
            style={{
              textAlign: "center",
              fontFamily: "Satisfy-Regular",
              color: "#ffffff",
              fontSize: 20,
              // padding: 20,
              marginTop: 40
            }}
          >
            -Zion Lee
          </Text>
        </View> */}
      </LinearGradient>
    );
  }
}
