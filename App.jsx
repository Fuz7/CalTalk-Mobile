import { StatusBar } from "expo-status-bar";
import { SafeAreaView, } from "react-native";
import styles from "./src/styles";
import Title from "./src/components/Title";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
