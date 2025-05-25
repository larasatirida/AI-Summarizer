import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Summarizer({
  inputText,
  setInputText,
  summary,
  onSummarize,
  onReset,
  onCopy,
  onFileUpload,
  model,
  setModel,
}) {
  
  return (
    <main className="flex flex-col xl:flex-row justify-center items-center transition duration-300 ease-in-out">
      {/* Input */}
      <div className="relative flex flex-col">
        <p className="text-[10px] xl:text-[15px] mb-[5px] mt-[30px] xl:mt-[50px] text-center">
          Masukkan teks untuk diringkas
        </p>
        
        <select 
        value={model} 
        onChange={(e) => setModel(e.target.value)} 
        className="text-xs mb-4 p-2 border border-gray-300 rounded" 
      > 
      <option value="deepseek/deepseek-chat-v3-0324:free">
      DeepSeek V3
      </option> 
      <option value="meta-llama/llama-3.3-70b-instruct:free"> 
      Llama 3.3 70B Instruct (Meta) 
      </option> 
      <option value="google/gemini-2.0-flash-exp:free"> 
      Gemini Flash 2.0 Experimental (Google) 
      </option> 
      </select> 
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="text-[8px] xl:text-[15px] border-2 border-blue-300 rounded-lg p-[5px] mx-[20px] w-[300px] xl:w-[450px] h-[150px] xl:h-[300px]"
          rows="5"
          cols="50"
          title="Input text area"
          placeholder="Masukkan teks di sini"
        />
        {/* Buttons */}
        <i
          title="insert file"
          className="bi bi-paperclip text-[10px] xl:text-[20px] absolute bottom-[10px] left-[30px] rounded px-[5px] py-[1px] hover:bg-gray-300 transition duration-500 cursor-pointer"
          onClick={() => document.getElementById("fileInput").click()}
        />
        <input
          type="file"
          id="fileInput"
          accept=".txt"
          className="hidden"
          onChange={onFileUpload}
        />
        <i
          title="copy text"
          className="bi bi-clipboard text-[10px] xl:text-[20px] absolute bottom-[10px] left-[55px] rounded px-[5px] py-[1px] hover:bg-gray-300 transition duration-500 cursor-pointer"
          onClick={() => onCopy(inputText)}
        />
        <i
          title="clear text"
          className="bi bi-trash3 text-[10px] xl:text-[20px] absolute bottom-[10px] right-[55px] rounded px-[5px] py-[1px] hover:bg-gray-300 transition duration-500 cursor-pointer"
          onClick={onReset}
        />
        <i
          title="send text"
          className="bi bi-arrow-up-circle-fill text-[10px] xl:text-[20px] absolute bottom-[10px] right-[30px] rounded px-[5px] py-[1px] hover:bg-gray-300 transition duration-500 cursor-pointer"
          onClick={onSummarize}
        />
      </div>

      {/* Output */}
      <div className="relative flex flex-col">
        <p className="text-[10px] xl:text-[15px] mb-[5px] mt-[30px] xl:mt-[50px] text-center">
          Hasil Ringkasan
        </p>
        <textarea
          value={summary}
          readOnly
          className="text-[8px] xl:text-[15px] border-2 border-blue-300 rounded-lg p-[5px] mx-[20px] w-[300px] xl:w-[450px] h-[150px] xl:h-[300px]"
          rows="5"
          cols="50"
          title="Hasil ringkasan"
          placeholder="Hasil ringkasan akan muncul di sini"
        />
        <i
          title="copy text"
          className="bi bi-clipboard text-[10px] xl:text-[20px] absolute bottom-[10px] right-[40px] rounded px-[5px] py-[1px] hover:bg-gray-300 transition duration-500 cursor-pointer"
          onClick={() => onCopy(summary)}
        />
        
      </div>
    </main>
  );
}
