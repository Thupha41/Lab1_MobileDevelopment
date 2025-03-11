import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import SentimentAnalyzer from "./components/Analyzer";
import Cv from "./components/Cv";
export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <SentimentAnalyzer />
      <Cv />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
