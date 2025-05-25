import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import History from "./components/History";
import Summarizer from "./components/Summarizer";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("belum ada ringkasan");
  const [history, setHistory] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [model, setModel] = useState("deepseek/deepseek-chat-v3-0324:free");

useEffect(() => { 
const storedHistory = 
JSON.parse(localStorage.getItem("summaryHistory")) || []; 
    setHistory(storedHistory); 
  }, []); 

const handleSummarize = () => { 
if (inputText.trim() === "") return; 
// Simulasi ringkasan: output sama dengan input 
    setSummary(inputText); 
 const newHistory = [...history, inputText]; 
    setHistory(newHistory); 
    localStorage.setItem("summaryHistory", JSON.stringify(newHistory)); 
  }; 


  // Reset input & summary
  const handleReset = () => {
    setInputText("");
    setSummary("belum ada ringkasan");
  };

  // Copy hasil ringkasan
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  // Upload file .txt
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith(".txt")) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setInputText(ev.target.result);
      };
      reader.readAsText(file);
    } else {
      alert("Hanya file .txt saja yang dapat diunggah.");
    }
  };

  return (
    <div className="font-[poppins]">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <History
        history={history}
        setSummary={setSummary}
        setInputText={setInputText}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <main
        id="main-content"
        className={`flex flex-col xl:flex-row justify-center items-center transition duration-300 ease-in-out ${
          sidebarOpen ? "xl:ml-[250px]" : ""
        }`}
      >
        <Summarizer
          inputText={inputText}
          setInputText={setInputText}
          summary={summary}
          onSummarize={handleSummarize}
          onReset={handleReset}
          onCopy={handleCopy}
          onFileUpload={handleFileUpload}
          model={model}
          setModel={setModel}
        />
      </main>
    </div>
  );
}
