const moviesCategoriesBtn = document.querySelector('#navTexts .nav_categories-movies');
const moviesCategoriesList = document.querySelector('.nav_categories-movies .movies');
const seriesCategoriesBtn = document.querySelector('#navTexts .nav_categories-series');
const seriesCategoriesList = document.querySelector('.nav_categories-series .series');

const moviesList = document.getElementById('moviesList');

async function getTrendingMovies(){
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await response.json();

    const movies = data.results;
    movies.forEach(movie => {
        const movieContainer = document.createElement('li');
        movieContainer.classList.add('movie-card');
        movieContainer.setAttribute('style', `    background-image: url('https://image.tmdb.org/t/p/w300/${movie.poster_path}');`);

        moviesList.appendChild(movieContainer)
    });
}

async function getMoviesCategoriesList(){
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY);
    const data = await response.json();

    const categories = data.genres;
    categories.forEach(category => {
        const categoryContainer = document.createElement('li');
        categoryContainer.classList.add('categorie-container');
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
        categoryContainer.classList.add('categorie-container');
        categoryContainer.setAttribute('id', category.id);
        const categoryTitle = document.createTextNode(category.name);

        categoryContainer.appendChild(categoryTitle);
        seriesCategoriesList.appendChild(categoryContainer);
    })
}

function toggleInactiveAtribute(component){
    component.classList.toggle('inactive');
}

getTrendingMovies();
getMoviesCategoriesList();
getSeriesCategoriesList();

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

