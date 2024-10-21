import { View, Text } from "react-native";
import styles from "../styles";
export default function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Cal Talk</Text>
    </View>
  );
}
