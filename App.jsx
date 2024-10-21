import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cal Talk</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
