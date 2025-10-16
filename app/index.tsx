import React, { useState } from "react";
import { COLORS } from "@/styles/colors";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ToastAndroid,
  Vibration,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

// const COLORS = {
//   bsuGreen: "#009b77",
//   bsuYellow: "#c8b273",
// };

const IMAGE = {
  logo: require("../assets/images/BSU_BOKOD_LOGO.webp"),
};

const LoginPage = () => {
  //useState hooks for form fields and password visibility
  const [passwordToggle, setPasswordToggle] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");



  //Mock user data
  const userData: [string, string, string] = ["user", "test@example.com", "password123"];

  //Mock login function
  const handleLogin = () => {
    let errorMessage = "";
    if (!username || !email || !password) {
      errorMessage = "All fields are required";
      Vibration.vibrate(100);
    } else if (
      username.toLowerCase() !== userData[0] ||
      email.toLowerCase() !== userData[1] ||
      password !== userData[2]
    ) {
      errorMessage = "Invalid username, email or password";
      Vibration.vibrate(100);
    } else {
      errorMessage = "";
      ToastAndroid.show(`Welcome, ${username}!`, ToastAndroid.SHORT);
      router.push("/dashboard");
    }

    setError(errorMessage);

    if (errorMessage) {
      ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(`Welcome, ${username}!`, ToastAndroid.SHORT);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            flexDirection: "column",
            backgroundColor: COLORS.bsuGreen,
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 0.2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={IMAGE.logo}
              style={{
                width: 100,
                height: 100,
              }}
            />

            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
              Benguet State University
            </Text>
          </View>

          <View
            style={{
              flex: 0.8,
              backgroundColor: "white",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <View style={{ flex: 1 }}>
              <View style={styles.inputContainer}>
                <Ionicons
                  style={styles.iconLeft}
                  name="person-outline"
                  size={24}
                  color="black"
                />
                <TextInput
                  value={username}
                  style={styles.input}
                  onChangeText={setUsername}
                  placeholder="Username"
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons
                  style={styles.iconLeft}
                  name="mail-outline"
                  size={24}
                  color="black"
                />
                <TextInput
                  value={email}
                  style={styles.input}
                  keyboardType="email-address"
                  placeholder="Email"
                  onChangeText={setEmail}
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons style={styles.iconLeft} name="key-outline" size={24} color="black" />

                <TextInput
                  value={password}
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={passwordToggle}
                  onChangeText={setPassword}
                />

                <TouchableOpacity
                  onPress={() => setPasswordToggle(!passwordToggle)}
                >
                  <Ionicons
                    style={styles.iconRight}
                    name={passwordToggle ? "eye-off-outline" : "eye-outline"}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>

              <Text
                style={{
                  alignSelf: "flex-end",
                  color: "black",
                }}
              >
                forgot password?
              </Text>

              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.bsuGreen,
    marginBottom: 10,
    borderRadius: 10,
    padding: 2,
    height: 40,
    width: 300,
  },
  iconLeft: {
    marginLeft: 10,
  },
  iconRight: {
    marginRight: 10,
  },
  button: {
    backgroundColor: COLORS.bsuGreen,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default LoginPage;
