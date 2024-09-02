"use client"; // This marks the component as a Client Component

import React, { useState } from "react";
import { askQuestion } from "../api/api"; // Import the askQuestion function

export default function HomePage() {
  const [question, setQuestion] = useState(""); // State for the user's question
  const [answer, setAnswer] = useState(""); // State for the answer from the API

  const handleAsk = async () => {
    try {
      const response = await askQuestion(question); // Call the askQuestion function
      setAnswer(response); // Update the answer state with the API response
    } catch (error) {
      setAnswer("There was an error processing your request."); // Handle errors
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ask a Question</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)} // Update question state as the user types
        placeholder="Type your question here"
        style={{
          width: "300px",
          padding: "10px",
          fontSize: "16px",
          color: "black",
        }}
      />
      <button
        onClick={handleAsk} // Trigger the API call when the button is clicked
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Ask
      </button>
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <strong>Answer:</strong> {answer}
      </div>
    </div>
  );
}
