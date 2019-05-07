import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../../../assets/styles/lightMode";
import Icon from "react-native-vector-icons/Feather";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.Item,
      opacity: 0.5
    };
  }

  selected = () => {
    let opacity = this.state.opacity == 1 ? 0.5 : 1;
    this.setState({ opacity: opacity });
  };

  gotoCat =()=>{
      this.props.navigation.navigate("SingleCat");
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10
        }}
      >
        <Text
          style={[
            styles.scrollListText,
            { color: `rgba(255,255,255,${this.state.opacity})` }
          ]}
          onPress={this.selected}
        >
          {" "}
          {this.state.name}{" "}
        </Text>
        {this.state.opacity == 1 && (
          <Icon
            name="arrow-right-circle"
            size={30}
            color="#ffffff"
            onPress={this.gotoCat}
          />
        )}
      </View>
    );
  }
}

export default Item;
