
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("input[placeholder='Cari Pupuk']");
    const searchButton = searchInput.nextElementSibling; // Tombol pencarian

    function searchProduct() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `/produk?q=${encodeURIComponent(query)}`;
        }
    }

    // Event listener untuk tombol pencarian
    searchButton.addEventListener("click", searchProduct);

    // Event listener untuk menekan Enter pada input
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });
});

