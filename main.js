function ringkas(){
  var input=document.getElementById("inputText").value.trim();

  if (input === "") return; 

  var summary = input;
  document.getElementById("hasilRingkasan").innerText = summary;

  let history=JSON.parse(localStorage.getItem("summaryHistory")) || [];
  history.push(summary);
  localStorage.setItem("summaryHistory", JSON.stringify(history));
  renderHistory();
}

function reset(){
  document.getElementById("inputText").value="";
  document.getElementById("hasilRingkasan").innerText = "belum ada ringkasan";
}

function renderHistory(){
  const riwayatList= document.getElementById("riwayatRingkasan");
  riwayatList.innerHTML = ""; // Clear previous history

  let history = JSON.parse(localStorage.getItem("summaryHistory")) || []; 

  if (history.length === 0) {
    riwayatList.innerHTML = "<li class='text-gray-500 '>Tidak ada riwayat ringkasan</li>";
    return;
  }

  history.forEach((item, index) => {
    let li= document.createElement("li");
    li.className="bg-blue-100 text-blue-800 p-[5px] xl:p-[10px] rounded text-[10px] xl:text-[15px] hover:bg-blue-300 transition duration-300";
    li.textContent = item.slice(0, 100) + (item.length > 100 ? "..." : ""); // Tampilkan preview ringkasan

     // On click → tampilkan ringkasan lengkap
    li.addEventListener("click", () => {
      document.getElementById("hasilRingkasan").value = item;
    });

    li.innerText = item;
    riwayatList.appendChild(li);
    });
  };

function copyInput() {
  const teks = document.getElementById("inputText").value;
  navigator.clipboard.writeText(teks);
}

function copyOutput() {
  const teks = document.getElementById("hasilRingkasan").value;
  navigator.clipboard.writeText(teks);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("buttonCopyInput").addEventListener("click", copyInput);
  document.getElementById("buttonCopyOutput").addEventListener("click", copyOutput);
});

// Fungsi untuk membuka file picker
function triggerFilePicker() {
  document.getElementById("fileInput").click();
}

// Fungsi untuk membaca file txt dan menaruh ke inputText
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file && file.name.endsWith(".txt")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("inputText").value = e.target.result;
    };
    reader.readAsText(file);
  } else {
    alert("Hanya file .txt saja yang dapat diunggah.");
  }
}

// Pasang event listener setelah elemen dimuat
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("buttonInsert").addEventListener("click", triggerFilePicker);
  document.getElementById("fileInput").addEventListener("change", handleFileUpload);
});

// Event listener untuk tombol insert
document.getElementById("buttonInsert").addEventListener("click", triggerFilePicker);

// Event listener untuk input file
document.getElementById("fileInput").addEventListener("change", handleFileUpload);

window.onload = renderHistory;

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-sidebar");
  const closeBtn = document.getElementById("close-sidebar");
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");
  const title = document.getElementById("title");

  let sidebarOpen = false;

  function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    sidebar.classList.add("translate-x-0");
    mainContent.classList.add("xl:ml-[250px]");
    title.classList.add("xl:ml-[230px]");
    sidebarOpen = true;
  }

  function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    sidebar.classList.remove("translate-x-0");
    mainContent.classList.remove("xl:ml-[250px]");
    title.classList.remove("xl:ml-[230px]");
    sidebarOpen = false;
  }

  toggleBtn.addEventListener("click", () => {
    if (sidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  closeBtn.addEventListener("click", () => {
    closeSidebar();
  });
});
