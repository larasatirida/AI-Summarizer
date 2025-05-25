import React from "react";

export default function History({
  history,
  setSummary,
  setInputText,
  sidebarOpen,
  setSidebarOpen,
}) {
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <section
      id="sidebar"
      className={`fixed z-[9999] top-0 left-0 h-full w-[150px] xl:w-[250px] bg-white text-blue-500 transition-transform duration-300 ease-in-out overflow-y-auto ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={closeSidebar} title="close sidebar">
        <i className="bi bi-layout-sidebar-inset xl:text-[25px] absolute top-[20px] left-[15px] px-[5px] py-[1px] rounded hover:bg-blue-300 transition duration-500" />
      </button>
      <h2 className="text-center xl:mt-[30px] text-[10px] xl:text-[15px] font-semibold p-[5px] mt-[15px]">
        Riwayat Ringkasan
      </h2>
      <ul className="space-y-2 p-4 text-sm h-[300px] xl:h-[500px] overflow-y-auto">
        {history.length === 0 ? (
          <li className="text-gray-500">Tidak ada riwayat ringkasan</li>
        ) : (
          history.map((item, index) => (
            <li
              key={index}
              className="bg-blue-100 text-blue-800 p-[5px] xl:p-[10px] rounded text-[10px] xl:text-[15px] hover:bg-blue-300 transition duration-500 cursor-pointer"
              onClick={() => {
                setSummary(item);
                setInputText();
              }}
            >
              {item.length > 100 ? item.slice(0, 100) + "..." : item}
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
