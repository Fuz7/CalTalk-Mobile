import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const sa = "sd";
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cal Talk</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    shadowRadius: 1.84,

    // Android Shadow
    elevation: 4,
  },
});
