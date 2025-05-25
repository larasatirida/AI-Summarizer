import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header className="text-xs xl:text-md p-4 bg-blue-500 text-white flex items-center w-full">
      <button onClick={toggleSidebar} title="open sidebar">
        <i className="bi bi-layout-sidebar-inset xl:text-lg px-[5px] py-[1px] rounded hover:bg-blue-300 transition duration-500" />
      </button>
      <h1
        id="title"
        className={`ml-[10px] font-bold text-sm xl:text-3xl transition duration-500 ease-in-out ${
          sidebarOpen ? "xl:ml-[230px]" : ""
        }`}
      >
        AI Summarizer
      </h1>
    </header>
  );
}
