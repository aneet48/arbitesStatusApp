import React, { Component } from "react";
import { Header } from "react-native-elements";
import styles from "../../../assets/styles/lightMode";

const AppHeader = props => {
  return (
    <Header
      leftComponent={{
        icon: "arrow-back",
        color: "#FFFFFF",
        // color: "#000",
        onPress: () => props.navigation.goBack()
      }}
      centerComponent={{
        text: "Select a category",
        style: {
          fontFamily: "Satisfy-Regular",
          fontSize: 25,
          color: "#FFFFFF"
          // color: "#292929"
        }
      }}
      containerStyle={styles.headerContainer}
    />
  );
};

export default AppHeader;
