import { Platform, StyleSheet,Dimensions } from "react-native";

var { width } = Dimensions.get("window");
var box_count = 2;
var box_height = width / box_count - 100;
export default StyleSheet.create({
  headerContainer: {
    marginTop: Platform.OS === "ios" ? 0 : -30,
    backgroundColor: "transparent"
  },
  container: {
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 10
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
    fontSize: 15,
    color: "#292929",
    fontWeight: "500"
  },
  containerLink: {
    fontSize: 13,
    color: "#18d492",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  categorySingle: {
    height: box_height,
    width: box_height,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#f76074",
    marginBottom: 10
  },
  gradientBackground: {},
  scrollListText: {
    // padding: 10,
    fontSize: 30,
    // color: "#f1d8cf",
    fontWeight: "bold"
  },
  optionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#292929",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  option: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10
  },
  optionText: {
    color: "#ffffff",
    marginLeft: 5,
    fontSize: 12
  },
  optionIcon: {
    color: "#ffffff"
  }
});
