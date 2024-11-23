<?php
// Atur header untuk menangani CORS dan JSON
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Cek apakah data dikirim melalui POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ambil data JSON dari request body
    $input = json_decode(file_get_contents('php://input'), true);

    // Cek apakah input name ada dan tidak kosong
    if (!empty($input['name'])) {
        // Berikan respons sukses
        echo json_encode([
            'status' => 'success',
            'message' => 'Hello, ' . htmlspecialchars($input['name']) . '! Selamat datang di AJAX!'
        ]);
    } else {
        // Berikan respons error
        echo json_encode([
            'status' => 'error',
            'message' => 'Name field cannot be empty.'
        ]);
    }
} else {
    // Respons jika bukan metode POST
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid request method.'
    ]);
}
