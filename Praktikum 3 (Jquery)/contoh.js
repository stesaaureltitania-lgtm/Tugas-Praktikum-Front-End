document.getElementById('addButton').addEventListener('click', function() {
    // 1. Ambil nilai dari input
    const itemName = document.getElementById('itemInput').value;

    // 2. Validasi jika input kosong
    if (itemName === "") {
        document.getElementById('message').textContent = "Barang tidak boleh kosong!";
        return;
    }

    // 3. Bersihkan pesan error jika ada
    document.getElementById('message').textContent = "";

    // 4. Buat elemen <li> baru dan atur class/teksnya
    const newListItem = document.createElement('li');
    newListItem.className = "list-item";
    newListItem.textContent = itemName;

    // 5. Tempelkan <li> ke dalam <ul> (id="itemList")
    document.getElementById('itemList').appendChild(newListItem);

    // 6. Kosongkan input text setelah berhasil ditambah
    document.getElementById('itemInput').value = "";
});

$('#addButton').click(function() {
    // 1. Ambil nilai dari input
    const itemName = $('#itemInput').val();

    // 2. Validasi jika input kosong
    if (itemName === "") {
        $('#message').text("Barang tidak boleh kosong!");
        return;
    }

    // 3. Bersihkan pesan error jika ada
    $('#message').text("");

    // 4 & 5. Buat elemen <li> baru, isi teksnya, dan tempelkan ke #itemList
    const newListItem = $('<li class="list-item"></li>').text(itemName);
    $('#itemList').append(newListItem);

    // 6. Kosongkan input text setelah berhasil ditambah
    $('#itemInput').val("");
});