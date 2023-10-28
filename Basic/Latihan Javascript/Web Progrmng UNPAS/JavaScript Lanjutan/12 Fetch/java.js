

    // Ini merupakan lanjutan latiaan dari 10.2, silahkan lihat folder tersebut untuk lebih lengkapnya.
    // ini menggunkana fetch vanilla JS



// Menggunakan Fetch vanila JS
const searchButoon = document.querySelector('.search-button');

searchButoon.addEventListener('click', function(){

    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=b25f55ac&s=' + inputKeyword.value )
        .then(response => response.json()) // karen output json() masih promise, jadi harus di .then lagi
        .then(response => {
            
            const movies = response.Search; //agar bentuknya object.
            let cards = '';

            movies.forEach(movie => {
                cards += showCards(movie); //funct dibawah.
            });

            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;


            // Ketika tombol search ditekan.
            const detailButton = document.querySelectorAll('.modal-detail-button');
            detailButton.forEach(button => {
                button.addEventListener('click', function() {

                   const imdbID = this.dataset.imdbid;
                   fetch('http://www.omdbapi.com/?apikey=b25f55ac&i=' + imdbID)
                   .then (response => response.json())
                    .then(response => {
                        let movieDetail = '';
                        movieDetail += showMovieDetails(response); // Func nya dibawah.

                        const modalBody = document.querySelector('.modal-body');
                        modalBody.innerHTML = movieDetail;
                    })
                });
            });
        });
});





























function showCards(movie) {
    return `<div class="col-md-3 my-5" > 
            <div class="card" style="width: 18rem;">
            <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
            <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetail" data-imdbid="${movie.imdbID}">Show Details</a>
            </div>
            </div>    
            </div>`;
};

function showMovieDetails(result) {
    return `<div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="${result.Poster}"class="img-fluid" alt="${result.Poster}">
                </div>
                <div class="col-md">
                    <ul class="list-group fw-bolder">
                        <li class="list-group-item">${result.Title + " " + "(" + result.Year + ")"} </li>
                        <li class="list-group-item">Rating : ${result.Rated}</li>
                        <li class="list-group-item">Durasi : ${result.Runtime}</li>
                        <li class="list-group-item">Genre : ${result.Genre}</li>
                        <li class="list-group-item">Sutradara : ${result.Director}</li>
                    </ul>
                </div>
            </div>
        </div>`;
}