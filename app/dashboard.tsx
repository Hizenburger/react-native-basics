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
import { COLORS } from "@/styles/colors";

import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function AboutScreen() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style = {styles.container}>
        <Text style = {styles.text}>Dashboard</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
