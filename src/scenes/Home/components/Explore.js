import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../../assets/styles/lightMode";
import MatIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }

  _gotoTod=()=>{this.props.navigation.navigate('TOD')}

  render() {
    return (
      <View style={styles.firstContainer}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#f76074",
              flex: 1,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={this._gotoTod}
          >
            <MatIcons name="format-quote-open" size={24} color="#FFFFFF" />
            <Text style={styles.firstContainerText}>
              {" "}
              Thought of the day
            </Text>
            <MatIcons name="format-quote-close" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <TouchableOpacity
            style={[
              styles.rightContainer,
              { backgroundColor: "#18d492", marginBottom: 2 }
            ]}
          >
            <View style={styles.rightContainerText}>
              <MatIcons
                name="alert-decagram-outline"
                size={24}
                color="#FFFFFF"
              />
              <Text
                style={{ color: "#ffffff", marginLeft: 5, fontSize: 17 }}
              >
                Latest
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.rightContainer,
              { backgroundColor: "#fd7b49", marginTop: 2 }
            ]}
          >
            <View style={styles.rightContainerText}>
              <MatIcons name="fire" size={24} color="#FFFFFF" />
              <Text style={{ color: "#ffffff", fontSize: 17 }}>
                Popular
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
