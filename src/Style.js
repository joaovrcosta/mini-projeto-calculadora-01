import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  results: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#121214",
  },
  resultText: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
    padding: 12,
    textAlign: "right",
    right: 30,
  },
  historyText: {
    color: "#E34243",
    fontSize: 20,
    marginRight: 10,
    alignSelf: "flex-end",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#8257e5",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 90,
    minHeight: 90,
    flex: 2,
  },
  textButton: {
    color: "#E34243",
    fontSize: 24,
  },
});
