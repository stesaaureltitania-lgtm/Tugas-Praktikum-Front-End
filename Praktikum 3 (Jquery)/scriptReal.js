const API_KEY = '7ab92b63b627f25d4863f853b604d887'; // <-- MANDATORY

var genres = {};

// Saat dokumen selesai dimuat
$.getJSON(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    .done(function(r) {
        r.genres.forEach(function(genre) {
            genres[genre.id] = genre.name;
        });
    })
    .fail(function() {
        alert("Gagal mengambil data genre");
    });

// Event handler saat tombol search di-klik
$('#searchButton').click(function(e) {
    e.preventDefault(); // Mencegah form submit bawaan browser

    // Clear error message
    $('#error').text(""); 

    // Disabled search button & ubah text jadi loading
    $('#searchButton').prop('disabled', true).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...');

    // Clear previous results
    $('#result').html("");

    // 1. Ambil nilai dari input
    const movieTitle = $('#title').val();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}&include_adult=false`;

    // Fetch data API
    $.getJSON(url)
        .done(function(r) {
            // 2. Validasi jika data tidak ditemukan
            if (r.results.length === 0) {
                $('#error').text('!!! No movie with this title.');
                return;
            }

            // 3. Bersihkan pesan error jika ada
            $('#error').text("");

            // 4 & 5. Buat elemen dan tempelkan ke #result
            r.results.forEach(function(movie) {
                const tableCell = createCell(movie);
                $('#result').append(tableCell);
            });
        })
        .fail(function() {
            $('#error').text('!!! Terjadi kesalahan pada server.');
        })
        .always(function() {
            // Re-enable search button
            $('#searchButton').prop('disabled', false).text('Search');
        });
});

// Fungsi membuat baris tabel
function createCell(movie) {
    const row = $('<tr></tr>');

    // Row number
    const movieNo = $('#result tr').length + 1;
    const colNo = $('<td width="10"></td>').append($('<h2 class="display-5"></h2>').text(`#${movieNo}`));
    row.append(colNo);

    // Poster
    const posterUrl = (movie.poster_path !== null)
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '';
    const colPoster = $('<td width="100"></td>').append($('<img>').attr({ src: posterUrl, height: 200 }));
    row.append(colPoster);

    // Movie information container
    const td = $('<td></td>');

    // Title, Overview, Rating
    td.append($('<h2 class="display-5"></h2>').text(movie.title));
    td.append($('<p></p>').text(movie.overview));
    td.append($('<span class="badge badge-success p-2"></span>').text(`Rating: ${movie.vote_average}`));

    // Genres
    movie.genre_ids.forEach(function(id) {
        const genre = $('<span class="badge badge-warning ml-2 p-2"></span>').text(genres[id]);
        td.append(genre);
    });

    row.append(td);

    return row;
}