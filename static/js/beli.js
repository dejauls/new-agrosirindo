document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let dataPembelian = {
        nama_pembeli: document.getElementById("buyerName").value,
        email: document.getElementById("buyerEmail").value,
        no_hp: document.getElementById("buyerPhone").value,
        provinsi: document.getElementById("province").options[document.getElementById("province").selectedIndex].text,
        kabupaten: document.getElementById("regency").options[document.getElementById("regency").selectedIndex].text,
        kecamatan: document.getElementById("district").options[document.getElementById("district").selectedIndex].text,
        kelurahan: document.getElementById("village").options[document.getElementById("village").selectedIndex].text,
        alamat: document.getElementById("buyerAddress").value,
        produk: document.getElementById("productName").textContent,
        jumlah: parseInt(document.getElementById("productQuantity").value),
        total_harga: parseInt(document.getElementById("productQuantity").value) * window.productPrice
    };

    fetch("/beli", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataPembelian)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        window.location.href = "/"; // Redirect ke halaman utama setelah sukses
    })
    .catch(error => console.error("Error:", error));
});
