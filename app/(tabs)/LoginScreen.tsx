import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Validation Error", "Please fill in all fields first.");
      return;
    }

    setLoading(true);

    // simulate login with fake API delay
    setTimeout(async () => {
      await AsyncStorage.setItem("userToken", "fake-token");
      Alert.alert("Login Success", `Welcome, ${email}`);
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        mode="outlined"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        label="Password"
        mode="outlined"
      />

      <Button
        mode="contained"
        onPress={handleLogin}
        loading={loading}
        disabled={loading}
        style={styles.button}
        contentStyle={{ paddingVertical: 8 }}
      >
        Login
      </Button>

      <Text style={styles.footerText}>
        Don't have an account? <Text style={styles.link}>Sign Up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: { fontSize: 30, fontWeight: "bold", marginBottom: 20, color: "gray" },
  input: { width: "100%", marginBottom: 16 },
  button: { width: "100%", marginTop: 10, backgroundColor: "#0066FF" },
  footerText: { marginTop: 20, fontSize: 14, color: "#555" },
  link: { color: "#0066ff", fontWeight: "bold" },
});
