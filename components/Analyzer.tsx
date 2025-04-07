import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { analyzeSentiment } from "../api";

export default function SentimentAnalyzer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const sentimentResult = await analyzeSentiment(text);
      setResult(sentimentResult);
    } catch (error) {
      console.error("Error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred during analysis"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vietnamese Sentiment Analysis</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập văn bản để phân tích cảm xúc..."
        value={text}
        onChangeText={setText}
        multiline
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAnalyze}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Phân tích</Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      )}

      {error && !loading && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {result && !loading && !error && (
        <View
          style={[styles.resultContainer, { backgroundColor: result.color }]}
        >
          <Text style={styles.emoji}>{result.emoji}</Text>
          <Text style={styles.resultText}>
            Cảm xúc: {translateSentiment(result.sentiment)}
          </Text>
        </View>
      )}
    </View>
  );
}

// Helper function to translate sentiment to Vietnamese
function translateSentiment(sentiment: string): string {
  switch (sentiment.toLowerCase()) {
    case "positive":
      return "TÍCH CỰC";
    case "negative":
      return "TIÊU CỰC";
    case "neutral":
      return "TRUNG TÍNH";
    default:
      return sentiment.toUpperCase();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
  },
  input: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loader: {
    marginVertical: 20,
  },
  resultContainer: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  emoji: {
    fontSize: 72,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  errorContainer: {
    width: "100%",
    padding: 15,
    backgroundColor: "#ffdddd",
    borderRadius: 10,
    marginTop: 10,
  },
  errorText: {
    color: "#d32f2f",
    textAlign: "center",
  },
  scoreText: {
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },
});
