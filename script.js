function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    // Dapatkan elemen img
    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) {
        // Tema terang
        // Ganti gambar dengan avatar-light
        img.src = "rb.png";
        // Tambahkan atribut title menjadi "Semoga kekuatan menyertaimu"
        img.title = "Allah selalu bersamamu";
        img.alt = "Foto profil mode terang";
    } else {
        // Tema gelap
        // Pertahankan gambar normal (avatar)
        img.src = "klik.png";
        img.alt = "Foto profil mode gelap";
        img.title = "Datanglah ke Sisi Gelap Bulan";
    }
}
