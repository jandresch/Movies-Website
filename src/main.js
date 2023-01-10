const mainUrl = 'https://api.themoviedb.org/3';

async function getMoviesCategoriesList(){
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY);
    const data = await response.json();

    const categories = data.genres;
    categories.forEach(category => {
        const categoryContainer = document.createElement('li');
        categoryContainer.classList.add('category-container');
        categoryContainer.setAttribute('id', category.id);
        const categoryTitle = document.createTextNode(category.name);

        categoryContainer.appendChild(categoryTitle);
        moviesCategoriesList.appendChild(categoryContainer);
    })
}

async function getSeriesCategoriesList(){
    const response = await fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=' + API_KEY);
    const data = await response.json();

    const categories = data.genres;
    categories.forEach(category => {
        const categoryContainer = document.createElement('li');
        categoryContainer.classList.add('category-container');
        categoryContainer.setAttribute('id', category.id);
        const categoryTitle = document.createTextNode(category.name);

        categoryContainer.appendChild(categoryTitle);
        seriesCategoriesList.appendChild(categoryContainer);
    })
}

async function getTrendingMovies(){
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await response.json();
    const movies = data.results;

    const moviesPreview = movies.slice(0, 9);
    moviesPreview.forEach(movie => {
        const poster = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;
        const bgPoster = 'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path;
        const movieContainer = document.createElement('li');
        const movieTitleContainer = document.createElement('figcaption');
        const movieTitle = document.createTextNode(movie.title);
        const moreInfoBtn = document.createElement('button');
        const btnInfoText = document.createTextNode('more info');

        movieContainer.classList.add('movie-card');
        movieContainer.setAttribute('id', movie.id);
        movieContainer.setAttribute('style', `background-image: url('${poster}');`);
        movieTitleContainer.classList.add('movie_card-name');
        moreInfoBtn.classList.add('inactive');

        moviesList.appendChild(movieContainer)
        movieContainer.appendChild(movieTitleContainer);
        movieTitleContainer.appendChild(movieTitle);
        movieTitleContainer.appendChild(moreInfoBtn);
        moreInfoBtn.appendChild(btnInfoText);

        // movieContainer.addEventListener('click', () =>{mainMoviesBg.setAttribute('style',  `background-image: url('${bgPoster}');`)});
        movieContainer.addEventListener('mouseover', () => {
            movieTitleContainer.classList.add('movie_card-hover');
            moreInfoBtn.classList.remove('inactive');
            mainMoviesBg.setAttribute('style',  `background-image: url('${bgPoster}');`)
        });
        movieContainer.addEventListener('mouseout', () => {
            movieTitleContainer.classList.remove('movie_card-hover');
            moreInfoBtn.classList.add('inactive'); 
        })
    });
}

async function getPopularMoviesList(){
    const response = await fetch(mainUrl + '/movie/popular?api_key=' + API_KEY);
    const data = await response.json();
    const movies = data.results;

    movies.forEach(movie => {
        const poster = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;
        const movieContainer = document.createElement('li');
        const movieTitleContainer = document.createElement('figcaption');
        const movieTitle = document.createTextNode(movie.title);
        const moreInfoBtn = document.createElement('button');
        const btnInfoText = document.createTextNode('more info');

        movieContainer.classList.add('movie-card');
        movieContainer.setAttribute('id', movie.id);
        movieContainer.setAttribute('style', `background-image: url('${poster}');`);
        movieTitleContainer.classList.add('movie_card-name');
        moreInfoBtn.classList.add('inactive');

        popularMoviesContainer.appendChild(movieContainer)
        movieContainer.appendChild(movieTitleContainer);
        movieTitleContainer.appendChild(movieTitle);
        movieTitleContainer.appendChild(moreInfoBtn);
        moreInfoBtn.appendChild(btnInfoText);

        movieContainer.addEventListener('mouseover', () => {
            movieTitleContainer.classList.add('movie_card-hover');
            moreInfoBtn.classList.remove('inactive');
        });
        movieContainer.addEventListener('mouseout', () => {
            movieTitleContainer.classList.remove('movie_card-hover');
            moreInfoBtn.classList.add('inactive'); 
        })
    })
    console.log(data, movies);
}


getMoviesCategoriesList();
getSeriesCategoriesList();
getTrendingMovies();
getPopularMoviesList()

function focusMovie(contenido){
    console.log('maldicion ' + contenido);
}

function toggleInactiveAtribute(component){
    component.classList.toggle('inactive');
}

moviesCategoriesBtn.onclick = () => {
    toggleInactiveAtribute(moviesCategoriesList);

    if(!seriesCategoriesList.classList.contains('inactive')){
        toggleInactiveAtribute(seriesCategoriesList);
    };
};

seriesCategoriesBtn.onclick = () => {
    toggleInactiveAtribute(seriesCategoriesList);

    if(!moviesCategoriesList.classList.contains('inactive')){
        toggleInactiveAtribute(moviesCategoriesList);
    };
}

