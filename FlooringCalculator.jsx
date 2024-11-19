import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";

const FlooringCalculator = () => {
  const [size, setSize] = useState("");
  const [isSquareFeet, setIsSquareFeet] = useState(true);
  const [flooringPrice, setFlooringPrice] = useState("");
  const [installationCost, setInstallationCost] = useState("");
  const [results, setResults] = useState(null);

  const calculateCosts = () => {
    const sizeValue = parseFloat(size);
    const flooringPriceValue = parseFloat(flooringPrice);
    const installationCostValue = parseFloat(installationCost);

    if (!sizeValue || !flooringPriceValue || !installationCostValue) {
      alert("Please fill out all fields correctly!");
      return;
    }

    const flooring = sizeValue * flooringPriceValue;
    const installation = sizeValue * installationCostValue;
    const totalCost = flooring + installation;
    const tax = totalCost * 0.13;

    setResults({
      flooring,
      installation,
      totalCost,
      tax,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flooring Calculator</Text>

      <View style={styles.switchContainer}>
        <Text>Square Feet</Text>
        <Switch
          value={isSquareFeet}
          onValueChange={() => setIsSquareFeet(!isSquareFeet)}
        />
        <Text>Square Meters</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder={`Room size (${isSquareFeet ? "sq ft" : "sq m"})`}
        keyboardType="numeric"
        onChangeText={setSize}
        value={size}
      />
      <TextInput
        style={styles.input}
        placeholder="Price per unit of flooring"
        keyboardType="numeric"
        onChangeText={setFlooringPrice}
        value={flooringPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Price per unit of installation"
        keyboardType="numeric"
        onChangeText={setInstallationCost}
        value={installationCost}
      />

      <Button title="Calculate" onPress={calculateCosts} />

      {results && (
        <View style={styles.results}>
          <Text>
            Flooring Cost (before tax): ${results.flooring.toFixed(2)}
          </Text>
          <Text>
            Installation Cost (before tax): ${results.installation.toFixed(2)}
          </Text>
          <Text>Total Cost (before tax): ${results.totalCost.toFixed(2)}</Text>
          <Text>Tax: ${results.tax.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  results: { marginTop: 20 },
});

export default FlooringCalculator;
