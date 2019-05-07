import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions, FlatList } from "react-native";
import Header from "./components/Header";
import Item from "./components/Item";
import styles from "../../assets/styles/lightMode";
import LinearGradient from "react-native-linear-gradient";
import { SearchBar } from "react-native-elements";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "Love",
        "Life",
        "Heart",
        "Romantic",
        "Heart Break",
        "Romantic",
        "sad",
        "Marraige",
        "Husband",
        "Wife",
        "Love",
        "Life",
        "Heart",
        "Romantic",
        "Heart Break",
        "Romantic",
        "sad",
        "Marraige",
        "Husband",
        "Wife",
      ]
    };
  }

  render() {
    return (
      // <View style={styles.gradientBackground}>
      //   <Header {...this.props} />

      //   <ScrollView style={[styles.container,{flexDirection: 'row',flexWrap: 'wrap',}]}>
      //     {/* <View style={styles.categorySingle}>
      //       <Text style={{ color: "#000" }}>Life</Text>
      //     </View>
      //     <View style={[styles.categorySingle, { borderColor: "#f6dd89" }]}>
      //       <Text style={{ color: "#000" }}>Love</Text>
      //     </View>
      //     <View style={[styles.categorySingle, { borderColor: "#00d5a4" }]}>
      //       <Text style={{ color: "#000" }}>Romantive</Text>
      //     </View>
      //     <View style={[styles.categorySingle, { borderColor: "#0fc9d7" }]}>
      //       <Text style={{ color: "#000" }}>Heart</Text>
      //     </View> */}

      //   </ScrollView>
      // </View>
      <LinearGradient
        colors={["#f3686d", "#faa555"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%"
        }}
      >
        <>
          <Header {...this.props} />
          {/* <SearchBar
            // placeholder="Search Here..."
            // onChangeText={this.updateSearch}
            // value={search}
          /> */}
          <ScrollView style={styles.scrollList}>
            {this.state.data.map((item, index) => {
              return (
                <View key={index}>
                  <Item Item={item} {...this.props} />
                </View>

                // <Text key={index} style={styles.scrollListText}>
                //   {" "}
                //   {item}
                // </Text>
              );
            })}
          </ScrollView>
        </>
      </LinearGradient>
    );
  }
}
