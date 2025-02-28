const produkData = [
    { id: 1, nama: "NPK SANBLEND 15-15-15", merek: "SANBLEND", lokasi: "Medan", harga: 50000, harga_diskon: 45000, gambar: "/static/img/produk/sanblend151515.png", deskripsi: "Pupuk A sangat cocok untuk tanaman buah dan sayuran, meningkatkan hasil panen." },
    { id: 2, nama: "NPK SANBLEND 7-6-34", merek: "SANBLEND", lokasi: "Medan", harga: 50000, harga_diskon: 45000, gambar: "/static/img/produk/sanblend7634.png", deskripsi: "Pupuk A sangat cocok untuk tanaman buah dan sayuran, meningkatkan hasil panen." },
    { id: 3, nama: "NPK SANBLEND 12-12-17-2", merek: "SANBLEND", lokasi: "Medan", harga: 50000, harga_diskon: 45000, gambar: "/static/img/produk/sanblend1212172.png", deskripsi: "Pupuk A sangat cocok untuk tanaman buah dan sayuran, meningkatkan hasil panen." },
    { id: 4, nama: "NPK SANBLEND 13-6-27-4", merek: "SANBLEND", lokasi: "Medan", harga: 50000, harga_diskon: 45000, gambar: "/static/img/produk/sanblend136274.png", deskripsi: "Pupuk A sangat cocok untuk tanaman buah dan sayuran, meningkatkan hasil panen." },
    { id: 5, nama: "NPK MUTIARA 20-10-10", merek: "MUTIARA", lokasi: "Riau", harga: 60000, harga_diskon: null, gambar: "/static/img/produk/mutiara201010.png", deskripsi: "Pupuk B memberikan nutrisi optimal untuk tanaman padi dan palawija." },
    { id: 6, nama: "NPK MUTIARA 9-25-25", merek: "MUTIARA", lokasi: "Riau", harga: 60000, harga_diskon: null, gambar: "/static/img/produk/mutiara92525.png", deskripsi: "Pupuk B memberikan nutrisi optimal untuk tanaman padi dan palawija." },
    { id: 7, nama: "NPK MUTIARA 13-13-24", merek: "MUTIARA", lokasi: "Riau", harga: 60000, harga_diskon: null, gambar: "/static/img/produk/mutiara131324.png", deskripsi: "Pupuk B memberikan nutrisi optimal untuk tanaman padi dan palawija." },
    { id: 8, nama: "NPK MUTIARA 16-16-16", merek: "MUTIARA", lokasi: "Riau", harga: 60000, harga_diskon: null, gambar: "/static/img/produk/mutiara161616.png", deskripsi: "Pupuk B memberikan nutrisi optimal untuk tanaman padi dan palawija." },
    { id: 9, nama: "MEROKE CPN", merek: "MEROKE", lokasi: "Aceh", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/merokecpn.png", deskripsi: "Pupuk C diformulasikan khusus untuk tanaman perkebunan seperti kelapa sawit." },
    { id: 10, nama: "MEROKE FOSFAT", merek: "MEROKE", lokasi: "Aceh", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/merokefosfat.png", deskripsi: "Pupuk C diformulasikan khusus untuk tanaman perkebunan seperti kelapa sawit." },
    { id: 11, nama: "MEROKE SOP", merek: "MEROKE", lokasi: "Aceh", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/merokesop.png", deskripsi: "Pupuk C diformulasikan khusus untuk tanaman perkebunan seperti kelapa sawit." },
    { id: 12, nama: "ZA DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-za.png", deskripsi: "Pupuk Berkualitas untuk Pertumbuhan Optimal dan Hasil Panen Berkualitas!." },
    { id: 13, nama: "RP DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-rp.png", deskripsi: "Pupuk Berkualitas untuk Akar Sehat dan Pertumbuhan Optimal!." },
    { id: 14, nama: "ZA KRISTAL DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-zakristal.png", deskripsi: "Pupuk Kristal Berkualitas untuk Hasil Panen Optimal dan Pertumbuhan Sehat!." },
    { id: 15, nama: "TSP DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-tsp.png", deskripsi: "Pupuk Fosfat Berkualitas untuk Pertumbuhan Optimal dan Tanaman Sehat!" },
    { id: 16, nama: "NPK 13.6.27.4 DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: null, gambar: "/static/img/produk/daunsawit-npk136274.png", deskripsi: "Pupuk Lengkap untuk Meningkatkan Kualitas Hasil Panen!" },
    { id: 17, nama: "NPK 12.12.17.2 DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: null, gambar: "/static/img/produk/daunsawit-npk1212172.png", deskripsi: "Pupuk Seimbang untuk Pertumbuhan Tanaman yang Optimal dan Hasil Panen Berkualitas!" },
    { id: 18, nama: "NPK 15.15.15 DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-npk151515.png", deskripsi: "Pupuk Seimbang untuk Pertumbuhan Tanaman yang Optimal dan Hasil Panen Berkualitas!" },
    { id: 19, nama: "MAP DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-map.png", deskripsi: "Pupuk Fosfat Berkualitas untuk Pertumbuhan Akar dan Pembungaan yang Optimal!" },
    { id: 20, nama: "KCl/MOP DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-kclmop.png", deskripsi: "Pupuk Kalium Berkualitas untuk Hasil Panen Maksimal dan Ketahanan Tanaman yang Lebih Baik!" },
    { id: 21, nama: "SP-36 DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-sp36.png", deskripsi: "Pupuk Fosfat untuk Memacu Pembungaan dan Meningkatkan Kualitas Tanaman Sawit!" },
    { id: 22, nama: "DAP DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-dap.png", deskripsi: " Pupuk Berkualitas untuk Pertumbuhan Generatif yang Optimal dan Kadar Protein yang Lebih Tinggi!" },
    { id: 23, nama: "Granular Amonium Klorida DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: null, gambar: "/static/img/produk/daunsawit-granular.png", deskripsi: " Pupuk Nitrogen untuk Pertumbuhan Tanaman Sawit yang Lebih Cepat dan Sehat!" },
    { id: 24, nama: "MKP 52+34 DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-mkp.png", deskripsi: " Pupuk Berkualitas untuk Meningkatkan Produktivitas dan Kualitas Hasil Panen!" },
    { id: 25, nama: "KNO3 DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-kno3.png", deskripsi: "  Pupuk Kalium Nitrat untuk Meningkatkan Kualitas dan Produksi Tanaman Sawit!" },
    { id: 26, nama: "CAN DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-can.png", deskripsi: "Pupuk Nitrogen Kalsium untuk Menyuburkan Tanah dan Meningkatkan Kualitas Hasil Panen!" },
    { id: 27, nama: "Ammonium Fosfat DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: null, gambar: "/static/img/produk/daunsawit-amonium.png", deskripsi: "Pupuk Berkualitas untuk Meningkatkan Hasil Panen yang Optimal!" },
    { id: 28, nama: "KNO Merah DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-knomerah.png", deskripsi: "Pupuk Kalium Nitrat untuk Meningkatkan Kualitas Hasil Panen!" },
    { id: 29, nama: "Zinc Sulfat DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-zinc.png", deskripsi: "Pupuk Mikro untuk Meningkatkan Toleransi dan Pertumbuhan Tanaman!" },
    { id: 30, nama: "KIESERITE DAUN SAWIT", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/daunsawit-kieserite.png", deskripsi: "Pupuk Magnesium untuk Pertumbuhan Optimal Tanaman Sawit!" },
    { id: 31, nama: "LAOYING MESTI-PATENBIRU ", merek: "DAUN SAWIT", lokasi: "Medan", harga: 70000, harga_diskon: null, gambar: "/static/img/produk/mesti-patenbiru.png", deskripsi: "Pupuk Magnesium untuk Pertumbuhan Optimal Tanaman Sawit!" },
];

function displayProducts(limit = null) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    const displayedProducts = limit ? produkData.slice(0, limit) : produkData;

    displayedProducts.forEach(produk => {
        const productElement = document.createElement("a");
        productElement.href = `#produk-${produk.id}`;
        productElement.className = "shadow-lg border-2 border-gray-300 rounded-lg p-2 md:p-4 product h-60 md:h-80";
        productElement.setAttribute("data-name", produk.nama.toLowerCase());
        productElement.setAttribute("data-brand", produk.merek.toLowerCase());
        productElement.setAttribute("data-location", produk.lokasi.toLowerCase());
        productElement.innerHTML = `
  <img class="w-28 md:w-32 h-36 md:h-48 mx-auto object-cover" src="${produk.gambar}" alt="${produk.nama}">
  <p class="text-gray-700 text-sm font-semibold">Pupuk</p>
  <h2 class="font-bold text-sm md:text-base">${produk.nama}</h2>
  <p class="text-gray-600 mt-2 text-xs md:text-base">Rp ${produk.harga.toLocaleString()}</p>
  ${produk.harga_diskon ? `<p class="text-xs line-through text-red-600 pb-2">Rp ${produk.harga_diskon.toLocaleString()}</p>` : ""}
`;
        productList.appendChild(productElement);
        productElement.addEventListener("click", (event) => {
            event.preventDefault();
            openModal(produk);
        });

    });
}

displayProducts();

function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const brandFilter = document.getElementById('brandFilter').value.toLowerCase();
    const locationFilter = document.getElementById('locationFilter').value.toLowerCase();

    document.querySelectorAll('.product').forEach(product => {
        const productName = product.getAttribute('data-name');
        const productBrand = product.getAttribute('data-brand');
        const productLocation = product.getAttribute('data-location');
        const matchesSearch = productName.includes(searchInput);
        const matchesBrand = !brandFilter || productBrand === brandFilter;
        const matchesLocation = !locationFilter || productLocation === locationFilter;
        product.style.display = (matchesSearch && matchesBrand && matchesLocation) ? 'block' : 'none';
    });
}

function openModal(produk) {
    document.getElementById("modalProductName").textContent = produk.nama;
    document.getElementById("modalProductImage").src = produk.gambar;
    document.getElementById("modalProductBrand").textContent = produk.merek;
    document.getElementById("modalProductLocation").textContent = produk.lokasi;
    document.getElementById("modalProductPrice").textContent = `Rp ${produk.harga.toLocaleString()}`;

    if (produk.harga_diskon) {
        document.getElementById("modalProductDiscount").textContent = `Diskon: Rp ${produk.harga_diskon.toLocaleString()}`;
    } else {
        document.getElementById("modalProductDiscount").textContent = "";
    }

    document.getElementById("modalProductDescription").textContent = produk.deskripsi;
    document.getElementById("buyProductButton").href = `/form?product=${encodeURIComponent(produk.nama)}`;

    document.getElementById("productModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("productModal").classList.add("hidden");
}

if (window.location.pathname.includes("/produk")) {
    displayProducts();
} else {
    displayProducts(10); 
}