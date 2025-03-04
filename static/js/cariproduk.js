
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("input[placeholder='Cari Pupuk']");
    const searchButton = searchInput.nextElementSibling; // Tombol pencarian

    function searchProduct() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `/produk?q=${encodeURIComponent(query)}`;
        }
    }

    searchButton.addEventListener("click", searchProduct);

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });
});

