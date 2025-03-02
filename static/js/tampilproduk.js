
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("q");

    if (query) {
        const products = document.querySelectorAll(".shadow-lg"); // Semua produk
        products.forEach(product => {
            const productName = product.querySelector("h2").textContent.toLowerCase();
            if (!productName.includes(query.toLowerCase())) {
                product.style.display = "none"; // Sembunyikan produk yang tidak cocok
            }
        });
    }
});
