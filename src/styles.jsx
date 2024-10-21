import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEBCD",
    alignItems: "center",
    justifyContent: "start",
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    borderRadius: 20,
  },

  titleContainer: {
    backgroundColor: "#664229",
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 32,
    width: 260,
    maxHeight: 56,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.31,
    shadowRadius: 3.84,

    // Android Shadow
    elevation: 6,
  },
});