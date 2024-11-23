document.getElementById("nameForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah pengiriman form secara default

    const nameInput = document.getElementById("name").value.trim();
    const errorElement = document.getElementById("error");
    const responseElement = document.getElementById("response");

    // Reset pesan
    errorElement.style.display = "none";
    responseElement.style.display = "none";

    // Validasi inputan kosong
    if (nameInput === "") {
        errorElement.textContent = "Nama tidak boleh kosong!";
        errorElement.style.display = "block";
        return;
    }

    // Data yang akan dikirim ke server
    const data = { name: nameInput };

    // Kirim data menggunakan Fetch API
    fetch("server.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((result) => {
            if (result.status === "success") {
                responseElement.textContent = result.message;
                responseElement.className = "success";
                responseElement.style.display = "block";
            } else {
                responseElement.textContent = result.message;
                responseElement.className = "error";
                responseElement.style.display = "block";
            }
        })
        .catch((error) => {
            responseElement.textContent = `Error: ${error.message}`;
            responseElement.className = "error";
            responseElement.style.display = "block";
        });
});
