import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CalculatorScreen = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(expression).toString()); // Be careful using eval()
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result || expression || "0"}</Text>
      <View style={styles.buttonContainer}>
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map((btn) => (
          <TouchableOpacity key={btn} style={styles.button} onPress={() => handlePress(btn)}>
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  result: { fontSize: 36, marginBottom: 20 },
  buttonContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
  button: { width: 70, height: 70, justifyContent: "center", alignItems: "center", margin: 5, backgroundColor: "#f0f0f0", borderRadius: 10 },
  buttonText: { fontSize: 24, fontWeight: "bold" },
});

export default CalculatorScreen;