import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  headerContainer: {
    marginTop: Platform.OS === "ios" ? 0 : -30,
    backgroundColor: "transparent"
  },
  container: {
    paddingLeft: 13,
    paddingRight: 13
  },
  firstContainer: {
    flexDirection: "row",
    height: 160
  },
  firstContainerText: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontSize: 18
  },
  rightContainer: {
    flex: 1,
    marginLeft: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  rightContainerText: {
    fontSize: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  categoryContainer: {
    paddingTop: 20,
    paddingBottom: 20
  },
  containerTitle: {
    fontSize: 18,
    color: "#292929",
    fontWeight: "500"
  },
  containerLink: {
    color: "#18d492",
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});
