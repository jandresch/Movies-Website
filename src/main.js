const moviesList = document.getElementById('moviesList');
async function getTrendingMovies(){
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await response.json();

    const movies = data.results;
    movies.forEach(movie => {
        const movieContainer = document.createElement('li');
        movieContainer.classList.add('movie-card');
        movieContainer.setAttribute('style', `    background-image: url('https://image.tmdb.org/t/p/w300/${movie.poster_path}');`);
        // const movieImg = document.createElement('img');
        // movieImg.classList.add('movie-img');
        // movieImg.setAttribute('alt', movie.title);
        // movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path);

        // movieContainer.appendChild(movieImg);
        moviesList.appendChild(movieContainer)
    });
}

getTrendingMovies();