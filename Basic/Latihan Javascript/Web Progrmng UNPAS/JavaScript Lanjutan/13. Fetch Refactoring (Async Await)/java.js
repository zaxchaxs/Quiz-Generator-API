

    // Memperbaiki / refactoring code dari 12. fetch agar lebih terstruktur dan mudah untuk dibaca.



// const searchButoon = document.querySelector('.search-button');
// searchButoon.addEventListener('click', function(){
//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=b25f55ac&s=' + inputKeyword.value )
//         .then(response => response.json())
//         .then(response => {
            
//             const movies = response.Search;
//             let cards = '';

//             movies.forEach(movie => {
//                 cards += showCards(movie);
//             });
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;
//             const detailButton = document.querySelectorAll('.modal-detail-button');
//             detailButton.forEach(button => {
//                 button.addEventListener('click', function() {

//                    const imdbID = this.dataset.imdbid;
//                    fetch('http://www.omdbapi.com/?apikey=b25f55ac&i=' + imdbID)
//                    .then (response => response.json())
//                     .then(response => {
//                         let movieDetail = '';
//                         movieDetail += showMovieDetails(response);
//                         const modalBody = document.querySelector('.modal-body');
//                         modalBody.innerHTML = movieDetail;
//                     });
//                 });
//             });
//         });
// });



// Seach button untuk menampilkan movie.
const searchButoon = document.querySelector('.search-button');
searchButoon.addEventListener('click', async function() {
    try {
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        // Jika tidak ditambahkan async dan await, isi movies akan berbentuk promise, karena promise nya belum resolve tpi keburu dimasukin ke movies.
        // kata2 nya gini. JS function ini asynchronous ya(yg async), nah getMovies lu tunggu promise nya selesai dulu ya baru masukin ke var movies(yg await).
        updateUI(movies);
    } catch(err) {
        console.log(err);
    };
    
});

// Saat tombol detail film ditekan
// event binding
document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('modal-detail-button')) {
        const imdbID = e.target.dataset.imdbid;
        const detailMov = await detailMovie(imdbID);
        movieDetail(detailMov);
    }
});

// func search movie
function getMovies(keyword) {
   return fetch('http://www.omdbapi.com/?apikey=b25f55ac&s=' + keyword )
        .then(response => {
            if( !response.ok){
                throw new Error(response.statusText);
            } 
            return response.json();
        
        })
        .then(response =>  {
            if(response.Response === "false") {
                throw new Error('response.Error')
            } 
              return response.Search;
        });
};

function updateUI(movies) {
    let cards = '';
    movies.forEach(movie => cards += showCards(movie));
    const movieContainer = document.querySelector('.movie-container')
    movieContainer.innerHTML = cards;
};



// funct detail movie
function detailMovie(IDmovie) {
    return fetch(`http://www.omdbapi.com/?apikey=b25f55ac&i=${IDmovie}`)
        .then (response => response.json())
        .then(response => response)
};
function movieDetail(response) {
    const movieDetail = showMovieDetails(response);
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = movieDetail;
};





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