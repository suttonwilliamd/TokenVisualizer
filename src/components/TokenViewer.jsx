import { useState, useEffect } from "react";
// Use the browser-compatible fork until upstream fixes the module
// npm install @nem035/gpt-3-encoder
import { decode } from "@nem035/gpt-3-encoder";

export default function TokenViewer() {
  const [tokenId, setTokenId] = useState(0);
  const [token, setToken] = useState("");

  useEffect(() => {
    try {
      const decoded = decode([tokenId]);
      setToken(decoded);
    } catch {
      setToken("<invalid token>");
    }
  }, [tokenId]);

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setTokenId(value);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 50256) {
      setTokenId(value);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "black",
      color: "limegreen",
      fontFamily: "monospace",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
    }}>
      <div style={{
        fontSize: "4rem",
        border: "2px solid limegreen",
        borderRadius: "1rem",
        padding: "2rem",
        marginBottom: "1rem",
        maxWidth: "80%",
        wordBreak: "break-word",
        textAlign: "center",
      }}>
        {token || " "}
      </div>
      <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        Token ID: <input 
          type="number" 
          value={tokenId} 
          onChange={handleInputChange} 
          min={0} max={50256}
          style={{
            background: "black",
            color: "limegreen",
            border: "1px solid limegreen",
            borderRadius: "5px",
            padding: "0.25rem 0.5rem",
            fontSize: "1.25rem",
            width: "100px",
            textAlign: "center"
          }}
        />
      </div>
      <input
        type="range"
        min="0"
        max="50256"
        value={tokenId}
        onChange={handleSliderChange}
        style={{ width: "80%" }}
      />
    </div>
  );
}
