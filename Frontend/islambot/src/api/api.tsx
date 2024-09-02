import axios from "axios";

export const askQuestion = async (questionText: string) => {
  try {
    const response = await axios.post("http://localhost:8000/ask", {
      text: questionText,
    });
    return response.data.text;
  } catch (error) {
    console.error("Error asking question:", error);
    throw error;
  }
};
