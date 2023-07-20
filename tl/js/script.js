// Menjalankan kode setelah konten DOM telah dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", function () {
  // Mengambil semua elemen dengan kelas "timeline-item" dan menyimpannya dalam variabel "timelineItems"
  var timelineItems = document.querySelectorAll(".timeline-item");

  // Mengambil nilai "activeIndex" dari localStorage
  var activeIndex = localStorage.getItem("activeIndex");

  // Memeriksa setiap elemen pada "timelineItems"
  timelineItems.forEach(function (item, index) {
    // Jika indeks elemen sama dengan nilai "activeIndex" yang diambil dari localStorage,
    // tambahkan kelas "active" ke elemen tersebut
    if (index === parseInt(activeIndex)) {
      item.classList.add("active");
    }
  });

  // Menambahkan event listener "click" pada setiap elemen di "timelineItems"
  timelineItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      // Menghapus kelas "active" dari semua elemen di "timelineItems"
      timelineItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Menambahkan kelas "active" pada elemen yang diklik
      this.classList.add("active");

      // Menyimpan nilai indeks elemen yang diklik ke dalam localStorage dengan nama "activeIndex"
      localStorage.setItem("activeIndex", index.toString());
    });
  });
});
