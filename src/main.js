

async function getTrendingMovies(){
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await response.json();

    const movies = data.results;
    movies.forEach(movie => {
        console.log(movie)
        const bgPoster = 'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path;
        const movieContainer = document.createElement('li');
        movieContainer.classList.add('movie-card');
        movieContainer.setAttribute('id', movie.id);
        // movieContainer.setAttribute('style', `    background-image: url('${bgPoster}');`);
        movieContainer.setAttribute('style', `    background-image: url('https://image.tmdb.org/t/p/w300/${movie.poster_path}');`);
        moviesList.appendChild(movieContainer)
        movieContainer.addEventListener('click', () =>{mainMoviesBg.setAttribute('style',  `background-image: url('${bgPoster}');`)});
    });
}

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
function focusMovie(contenido){
    console.log('maldicion ' + contenido);
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

