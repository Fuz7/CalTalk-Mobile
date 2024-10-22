import { TouchableOpacity, Text } from "react-native";
import styles from "../styles.jsx";
export default function Instruction() {
  return (
    <TouchableOpacity style={styles.instructionContainer}>
      <Text style={styles.instructionText}>Instruction</Text>
    </TouchableOpacity>
  );
}
