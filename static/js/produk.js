const produkData = [
    { id: 1, nama: "Pupuk NPK SANBLEND 15-15-15", merek: "SANBLEND", lokasi: "Medan", harga: 50000, harga_diskon: 45000, gambar: "/static/img/produk/sanblend151515.png", deskripsi: "Pupuk A sangat cocok untuk tanaman buah dan sayuran, meningkatkan hasil panen." },
    { id: 2, nama: "Pupuk NPK SANBLEND 7-6-34", merek: "SANBLEND", lokasi: "Medan", harga: 50000, harga_diskon: 45000, gambar: "/static/img/produk/sanblend7634.png", deskripsi: "Pupuk A sangat cocok untuk tanaman buah dan sayuran, meningkatkan hasil panen." },
    { id: 3, nama: "Pupuk NPK SANBLEND 12-12-17-2", merek: "SANBLEND", lokasi: "Medan", harga: 50000, harga_diskon: 45000, gambar: "/static/img/produk/sanblend1212172.png", deskripsi: "Pupuk A sangat cocok untuk tanaman buah dan sayuran, meningkatkan hasil panen." },
    { id: 4, nama: "Pupuk NPK SANBLEND 13-6-27-4", merek: "SANBLEND", lokasi: "Medan", harga: 50000, harga_diskon: 45000, gambar: "/static/img/produk/sanblend136274.png", deskripsi: "Pupuk A sangat cocok untuk tanaman buah dan sayuran, meningkatkan hasil panen." },
    { id: 5, nama: "Pupuk NPK MUTIARA 20-10-10", merek: "MUTIARA", lokasi: "Riau", harga: 60000, harga_diskon: null, gambar: "/static/img/produk/mutiara201010.png", deskripsi: "Pupuk B memberikan nutrisi optimal untuk tanaman padi dan palawija." },
    { id: 6, nama: "Pupuk NPK MUTIARA 9-25-25", merek: "MUTIARA", lokasi: "Riau", harga: 60000, harga_diskon: null, gambar: "/static/img/produk/mutiara92525.png", deskripsi: "Pupuk B memberikan nutrisi optimal untuk tanaman padi dan palawija." },
    { id: 7, nama: "Pupuk NPK MUTIARA 13-13-24", merek: "MUTIARA", lokasi: "Riau", harga: 60000, harga_diskon: null, gambar: "/static/img/produk/mutiara131324.png", deskripsi: "Pupuk B memberikan nutrisi optimal untuk tanaman padi dan palawija." },
    { id: 8, nama: "Pupuk NPK MUTIARA 16-16-16", merek: "MUTIARA", lokasi: "Riau", harga: 60000, harga_diskon: null, gambar: "/static/img/produk/mutiara161616.png", deskripsi: "Pupuk B memberikan nutrisi optimal untuk tanaman padi dan palawija." },
    { id: 9, nama: "Pupuk MEROKE CPN", merek: "MEROKE", lokasi: "Aceh", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/merokecpn.png", deskripsi: "Pupuk C diformulasikan khusus untuk tanaman perkebunan seperti kelapa sawit." },
    { id: 10, nama: "Pupuk MEROKE FOSFAT", merek: "MEROKE", lokasi: "Aceh", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/merokefosfat.png", deskripsi: "Pupuk C diformulasikan khusus untuk tanaman perkebunan seperti kelapa sawit." },
    // { id: 11, nama: "Pupuk MEROKE SOP", merek: "MEROKE", lokasi: "Aceh", harga: 70000, harga_diskon: 65000, gambar: "/static/img/produk/merokesop.png", deskripsi: "Pupuk C diformulasikan khusus untuk tanaman perkebunan seperti kelapa sawit." },
];


function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    produkData.forEach(produk => {
        const productElement = document.createElement("a");
        productElement.href = `#produk-${produk.id}`;
        productElement.className = "shadow-lg border-2 border-gray-300 rounded-lg p-2 md:p-4 product h-60 md:h-80";
        productElement.setAttribute("data-name", produk.nama.toLowerCase());
        productElement.setAttribute("data-brand", produk.merek.toLowerCase());
        productElement.setAttribute("data-location", produk.lokasi.toLowerCase());
        productElement.innerHTML = `
  <img class="w-28 md:w-32 h-36 md:h-48 mx-auto object-cover" src="${produk.gambar}" alt="${produk.nama}">
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
    document.getElementById("buyProductButton").href = `form.html?product=${encodeURIComponent(produk.nama)}`;

    document.getElementById("productModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("productModal").classList.add("hidden");
}