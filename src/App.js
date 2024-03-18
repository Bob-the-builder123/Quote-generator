import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  },[]);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(`${data.content} - ${data.author}`);
    } catch (error) {
      console.error("Error fetching quote", error); 
    }
  };

  const handleClick = () => {
    fetchQuote();
  };

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <button onClick={handleClick}>Generate Quote</button>
    </div>
  );
}