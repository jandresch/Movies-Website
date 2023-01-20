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

        movieContainer.classList.add('card');
        movieContainer.setAttribute('id', movie.id);
        movieContainer.setAttribute('style', `background-image: url('${poster}');`);
        movieTitleContainer.classList.add('card-name');
        moreInfoBtn.classList.add('inactive');

        moviesList.appendChild(movieContainer)
        movieContainer.appendChild(movieTitleContainer);
        movieTitleContainer.appendChild(movieTitle);
        movieTitleContainer.appendChild(moreInfoBtn);
        moreInfoBtn.appendChild(btnInfoText);

        // movieContainer.addEventListener('click', () =>{mainMoviesBg.setAttribute('style',  `background-image: url('${bgPoster}');`)});
        movieContainer.addEventListener('mouseover', () => {
            movieTitleContainer.classList.add('card-hover');
            moreInfoBtn.classList.remove('inactive');
            mainMoviesBg.setAttribute('style',  `background-image: url('${bgPoster}');`)
        });
        movieContainer.addEventListener('mouseout', () => {
            movieTitleContainer.classList.remove('card-hover');
            moreInfoBtn.classList.add('inactive'); 
        });
        moreInfoBtn.onclick = () => {location.hash = `more-info=${movie.original_title}/${movie.id}`};
    });
}

async function getAllTrendingMovies(){
    const response = await fetch(`${mainUrl}/trending/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    const movies = data.results;

    movies.forEach(movie => {
        const poster = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;
        const movieContainer = document.createElement('li');
        const movieTitleContainer = document.createElement('figcaption');
        const movieTitle = document.createTextNode(movie.title);
        const moreInfoBtn = document.createElement('button');
        const btnInfoText = document.createTextNode('more info');

        movieContainer.classList.add('card');
        movieContainer.setAttribute('id', movie.id);
        movieContainer.setAttribute('style', `background-image: url('${poster}');`);
        movieTitleContainer.classList.add('card-name');
        moreInfoBtn.classList.add('inactive');

        generalSectionContentContainer.appendChild(movieContainer)
        movieContainer.appendChild(movieTitleContainer);
        movieTitleContainer.appendChild(movieTitle);
        movieTitleContainer.appendChild(moreInfoBtn);
        moreInfoBtn.appendChild(btnInfoText);

        movieContainer.addEventListener('mouseover', () => {
            movieTitleContainer.classList.add('card-hover');
            moreInfoBtn.classList.remove('inactive');
        });
        movieContainer.addEventListener('mouseout', () => {
            movieTitleContainer.classList.remove('card-hover');
            moreInfoBtn.classList.add('inactive'); 
        })
    });
}


async function getPopularMoviesList(numPage){
    const response = await fetch(`${mainUrl}/movie/popular?api_key=${API_KEY}&page=${numPage}`);
    const data = await response.json();
    const movies = data.results;

    popularMoviesContainer.innerHTML ='';

    movies.forEach(movie => {
        const poster = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;
        const movieContainer = document.createElement('li');
        const movieTitleContainer = document.createElement('figcaption');
        const movieTitle = document.createTextNode(movie.title);
        const moreInfoBtn = document.createElement('button');
        const btnInfoText = document.createTextNode('more info');

        movieContainer.classList.add('card');
        movieContainer.setAttribute('id', movie.id);
        movieContainer.setAttribute('style', `background-image: url('${poster}');`);
        movieTitleContainer.classList.add('card-name');
        moreInfoBtn.classList.add('inactive');

        if(location.hash.startsWith('#movies')){
            generalSectionContentContainer.appendChild(movieContainer)
        }else{
            popularMoviesContainer.appendChild(movieContainer);
        }
        
        movieContainer.appendChild(movieTitleContainer);
        movieTitleContainer.appendChild(movieTitle);
        movieTitleContainer.appendChild(moreInfoBtn);
        moreInfoBtn.appendChild(btnInfoText);

        movieContainer.addEventListener('mouseover', () => {
            movieTitleContainer.classList.add('card-hover');
            moreInfoBtn.classList.remove('inactive');
        });
        movieContainer.addEventListener('mouseout', () => {
            movieTitleContainer.classList.remove('card-hover');
            moreInfoBtn.classList.add('inactive'); 
        })
    })
}

async function getPopularSeriesList(numPage){
    const response = await fetch(`${mainUrl}/tv/popular?api_key=${API_KEY}&page=${numPage}`);
    const data = await response.json();
    const series = data.results;

    popularSeriesContainer.innerHTML ='';

    series.forEach(serie => {
        const poster = 'https://image.tmdb.org/t/p/w300/' + serie.poster_path;
        const serieContainer = document.createElement('li');
        const serieTitleContainer = document.createElement('figcaption');
        const serieTitle = document.createTextNode(serie.name);
        const moreInfoBtn = document.createElement('button');
        const btnInfoText = document.createTextNode('more info');

        serieContainer.classList.add('card');
        serieContainer.setAttribute('id', serie.id);
        serieContainer.setAttribute('style', `background-image: url('${poster}');`);
        serieTitleContainer.classList.add('card-name');
        moreInfoBtn.classList.add('inactive');

        if(location.hash.startsWith('#series')){
            generalSectionContentContainer.appendChild(serieContainer)
        }else{
            popularSeriesContainer.appendChild(serieContainer);
        }

        serieContainer.appendChild(serieTitleContainer);
        serieTitleContainer.appendChild(serieTitle);
        serieTitleContainer.appendChild(moreInfoBtn);
        moreInfoBtn.appendChild(btnInfoText);

        serieContainer.addEventListener('mouseover', () => {
            serieTitleContainer.classList.add('card-hover');
            moreInfoBtn.classList.remove('inactive');
        });
        serieContainer.addEventListener('mouseout', () => {
            serieTitleContainer.classList.remove('card-hover');
            moreInfoBtn.classList.add('inactive'); 
        })
    })
}

async function getMovieInformation(movieId){
    const response = await fetch(`${mainUrl}/movie/${movieId}?api_key=${API_KEY}`);
    const movie = await response.json();

    movieGeneralContainer.innerHTML = "";
    console.log(movie);
//     <section class="general_section more_info-section">
//     <button>Hola sapos</button>
//     <div class="movie_general-container">
//         <div class="movie_left_section"></div>
//         <div class="movie_right_section"></div>
//     </div>
//     <div class="related-movies"></div>
// </section>
    

    const selectMovieLeftSection = document.createElement('div');
    const selectMovieRightSection = document.createElement('div');
    const relatedMoviesSection = document.createElement('div');
    const moviePoster = document.createElement('img');
    const movieCategories = document.createElement('ul');
    const movieCategoriesTitle = document.createElement('strong');
    const movieCategoriesTitleText = document.createTextNode('Categories')
    
    generalSection.classList.add('more_info-section')
    selectMovieLeftSection.classList.add('movie_left_section');
    selectMovieRightSection.classList.add('movie_right_section');
    moviePoster.classList.add('card');
    moviePoster.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

    generalSection.append(backHomeBtn, movieGeneralContainer, relatedMoviesSection);
    movieGeneralContainer.append(selectMovieLeftSection, selectMovieRightSection);
    selectMovieLeftSection.append(moviePoster, movieCategories);
    movieCategories.appendChild(movieCategoriesTitle);
    movieCategoriesTitle.appendChild(movieCategoriesTitleText);

    backHomeBtn.append(backHomeIcon, backHomeBtnText);

    movie.genres.forEach(genre => {
        const categoriesElement = document.createElement('li');
        const genreTitle = document.createTextNode(genre.name);
        categoriesElement.appendChild(genreTitle);
        movieCategories.append(categoriesElement);
    })

}

getMoviesCategoriesList();
getSeriesCategoriesList();
getTrendingMovies();
getPopularMoviesList();
getPopularSeriesList();





