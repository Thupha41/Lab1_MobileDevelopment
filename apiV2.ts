export async function analyzeSentiment(text: string) {
  try {
    const response = await fetch('https://3e46-34-169-173-143.ngrok-free.app/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
   
    return {
      sentiment: data.sentiment,
      score: 0, 
      emoji: getEmojiForSentiment(data.sentiment),
      color: getColorForSentiment(data.sentiment)
    };
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
    throw error;
  }
}


function getEmojiForSentiment(sentiment: string): string {
  switch (sentiment.toLowerCase()) {
    case 'positive':
      return '😊';
    case 'negative':
      return '😞';
    case 'neutral':
      return '😐';
    default:
      return '❓';
  }
}

function getColorForSentiment(sentiment: string): string {
  switch (sentiment.toLowerCase()) {
    case 'positive':
      return '#4CAF50'; 
    case 'negative':
      return '#F44336';
    case 'neutral':
      return '#9E9E9E'; 
    default:
      return '#607D8B'; 
  }
}
// Version 1
// import { GoogleGenerativeAI } from "@google/generative-ai";
// // Initialize the Google Generative AI client
// const genAI = new GoogleGenerativeAI(
//   ""
// );
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// export async function analyzeSentiment(text: string) {
//   const prompt = `
//     Analyze the sentiment of the following text and respond with a JSON object with these fields:
//     - sentiment: either "positive", "negative", or "neutral"
//     - score: a number between -1 (very negative) and 1 (very positive)
//     - emoji: an appropriate emoji that represents the sentiment
//     - color: a hex color code that represents the sentiment (green for positive, red for negative, gray for neutral)
    
//     Text to analyze: "${text}"
//   `;

//   try {
//     const result = await model.generateContent(prompt);
//     const responseText = result.response.text();
    
//     // Extract the JSON from the response
//     const jsonMatch = responseText.match(/\{[\s\S]*\}/);
//     if (jsonMatch) {
//       return JSON.parse(jsonMatch[0]);
//     } else {
//       throw new Error("Failed to parse sentiment analysis result");
//     }
//   } catch (error) {
//     console.error("Error analyzing sentiment:", error);
//     return {
//       sentiment: "neutral",
//       emoji: "😐",
//       color: "#888888",
//       error: error instanceof Error ? error.message : "Unknown error"
//     };
//   }
// }