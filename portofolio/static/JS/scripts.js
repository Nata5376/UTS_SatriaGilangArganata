(function () {
  // Ambil elemen judul typing dan container matrix background
  const typingEl = document.getElementById("typing-text");
  const matrixRoot = document.getElementById("matrix-fall");

  // -------------------------------------------------------
  // 1) Typing animation untuk nama di hero section
  // -------------------------------------------------------
  function runTyping() {
    if (!typingEl) return;

    const text = typingEl.dataset.text || "";
    let index = 0;
    let forward = true;

    setInterval(() => {
      // Tampilkan sebagian teks berdasarkan index
      typingEl.textContent = text.slice(0, index);

      // Logic maju-mundur untuk efek ketik lalu hapus
      if (forward) {
        index += 1;
        if (index > text.length + 2) forward = false;
      } else {
        index -= 1;
        if (index < 0) forward = true;
      }
    }, 120);
  }

  // -------------------------------------------------------
  // 2) Generator satu kolom "404" untuk efek waterfall
  // -------------------------------------------------------
  function createColumn(leftPercent, duration, delay) {
    const col = document.createElement("span");
    col.className = "matrix-col";

    col.style.left = `${leftPercent}%`;
    col.style.animationDuration = `${duration}s`;
    col.style.animationDelay = `-${delay}s`;

    col.textContent = "404\n404\n404\n404\n404\n404\n404\n404";
    return col;
  }

  // -------------------------------------------------------
  // 3) Render beberapa kolom acak agar background hidup
  // -------------------------------------------------------
  function runMatrix() {
    if (!matrixRoot) return;

    for (let i = 0; i < 22; i += 1) {
      const leftPercent = Math.random() * 100;
      const duration = 5 + Math.random() * 8;
      const delay = Math.random() * 10;

      matrixRoot.appendChild(createColumn(leftPercent, duration, delay));
    }
  }

  // Jalankan semua efek setelah script load
  runTyping();
  runMatrix();
})();