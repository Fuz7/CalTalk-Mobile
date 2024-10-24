import Instruction from "./src/components/Instruction";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import styles from "./src/styles";
import Title from "./src/components/Title";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <View style={styles.togglersContainer}>
        <Instruction />
        <TouchableOpacity style={styles.languageContainer}>
          <Text style={styles.languageText}>English</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
