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

    generateContent('movie', moviesList, moviesPreview);
    
    moviesPreview.forEach(movie => {
        const container = document.getElementById(`${movie.id}`);
        const bgPoster = 'https://image.tmdb.org/t/p/w780/' + movie.backdrop_path;

        container.addEventListener('mouseover', () => {
            mainMoviesBg.setAttribute('style',  `background-image: url('${bgPoster}');`);
        });
    })
};

async function getAllTrendingMovies(){
    const response = await fetch(`${mainUrl}/trending/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    const movies = data.results;

    generateContent('movie', generalSectionContentContainer, movies);
}

async function getPopularMoviesList(numPage){
    const response = await fetch(`${mainUrl}/movie/popular?api_key=${API_KEY}&page=${numPage}`);
    const data = await response.json();
    const movies = data.results;
    let mainContainer;

    if(location.hash.startsWith('#movies')){
        mainContainer = generalSectionContentContainer;
    }else{
        mainContainer = popularMoviesContainer;
    }

    popularMoviesContainer.innerHTML ='';
    generalSection.setAttribute('style', `background: `);

   generateContent('movie', mainContainer, movies);
};

async function getPopularSeriesList(numPage){
    const response = await fetch(`${mainUrl}/tv/popular?api_key=${API_KEY}&page=${numPage}`);
    const data = await response.json();
    const series = data.results;
    let mainContainer;

    popularSeriesContainer.innerHTML = '';
    generalSection.setAttribute('style', `background: `);

        if(location.hash.startsWith('#tv')){
           mainContainer = generalSectionContentContainer;
        }else{
            mainContainer = popularSeriesContainer;
        }

    generateContent('tv', mainContainer,series);
}

async function getMovieInformation(movieId){
    const response = await fetch(`${mainUrl}/movie/${movieId}?api_key=${API_KEY}`);
    const movie = await response.json();

    movieGeneralContainer.innerHTML = "";
    console.log(movie);
    
    const selectedMovieLeftSection = document.createElement('div');
    const selectedMovieRightSection = document.createElement('div');
    const moviePoster = document.createElement('img');
    const movieTagline = document.createElement('strong');
    const movieCategories = document.createElement('ul');
    const movieCategoriesTitle = document.createElement('strong');
    const movieTitle = document.createElement('h2');
    const movieOverview = document.createElement('p');
    const movieOriginalTitleContainer = document.createElement('strong');
    const movieOriginalTitle = document.createElement('span');
    const movieLanguageContainer = document.createElement('strong');
    const movieLanguage = document.createElement('span');
    const movieReleaseDateContainer = document.createElement('strong');
    const movieReleaseDate = document.createElement('span');
    const movieScoreContainer = document.createElement('strong');
    const movieScore = document.createElement('span');

    generalSection.setAttribute('style', `background: linear-gradient(180deg, var(--opacity-blue), var(--dark-blue)), no-repeat center / cover url(https://image.tmdb.org/t/p/w780//${movie.backdrop_path})`);
    generalSection.classList.add('more_info-section')
    selectedMovieLeftSection.classList.add('movie_left_section');
    selectedMovieRightSection.classList.add('movie_right_section');
    moviePoster.classList.add('card');
    moviePoster.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);
    movieTagline.innerText = movie.tagline;
    movieCategoriesTitle.innerText = 'Categories';
    movieTitle.innerText = movie.title;
    movieOverview.innerText = movie.overview;
    movieOriginalTitleContainer.innerText = 'Original Title:';
    movieOriginalTitle. innerText = movie.original_title;
    movieLanguageContainer.innerText = 'Original Language:'
    movieLanguage.innerText = movie.spoken_languages[0].name;
    movieReleaseDateContainer.innerText = 'Release Date:';
    movieReleaseDate.innerText = movie.release_date;
    movieScoreContainer.innerText = 'Score:';
    movieScore.innerText = `${movie.vote_average} / 10`;

    generalSection.append(backHomeBtn, movieGeneralContainer);
    movieGeneralContainer.append(selectedMovieLeftSection, selectedMovieRightSection);
    selectedMovieLeftSection.append(moviePoster, movieTagline);
    movieCategories.appendChild(movieCategoriesTitle);
    selectedMovieRightSection.append(
        movieTitle,
        movieOverview,
        movieCategories,
        movieOriginalTitleContainer,
        movieLanguageContainer,
        movieReleaseDateContainer,
        movieScoreContainer);
    movieOriginalTitleContainer.appendChild(movieOriginalTitle);
    movieLanguageContainer.appendChild(movieLanguage);
    movieReleaseDateContainer.appendChild(movieReleaseDate);
    movieScoreContainer.appendChild(movieScore);
    backHomeBtn.append(backHomeIcon, backHomeBtnText);

    movie.genres.forEach(genre => {
        const categoriesElement = document.createElement('li');
        const genreTitle = document.createTextNode(genre.name);
        categoriesElement.appendChild(genreTitle);
        movieCategories.append(categoriesElement);
    });

    getRelatedContent('movie', movie.id);

};

async function getSerieInformation(serieId){
    const response = await fetch(`${mainUrl}/tv/${serieId}?api_key=${API_KEY}`);
    const serie = await response.json();

    movieGeneralContainer.innerHTML = "";
    console.log(serie);
    
    const selectedSerieLeftSection = document.createElement('div');
    const selectedSerieRightSection = document.createElement('div');
    const moviePoster = document.createElement('img');
    const serieTagline = document.createElement('strong');
    const serieCategories = document.createElement('ul');
    const serieCategoriesTitle = document.createElement('strong');
    const serieTitle = document.createElement('h2');
    const serieOverview = document.createElement('p');
    const serieOriginalTitleContainer = document.createElement('strong');
    const serieOriginalTitle = document.createElement('span');
    const serieLanguageContainer = document.createElement('strong');
    const serieLanguage = document.createElement('span');
    const serieReleaseDateContainer = document.createElement('strong');
    const serieReleaseDate = document.createElement('span');
    const serieScoreContainer = document.createElement('strong');
    const serieScore = document.createElement('span');
    
    generalSection.setAttribute('style', `background: linear-gradient(180deg, var(--opacity-blue), var(--dark-blue)), no-repeat center / cover url(https://image.tmdb.org/t/p/w780//${serie.backdrop_path})`);
    generalSection.classList.add('more_info-section')
    selectedSerieLeftSection.classList.add('movie_left_section');
    selectedSerieRightSection.classList.add('movie_right_section');
    moviePoster.classList.add('card');
    moviePoster.setAttribute('src', `https://image.tmdb.org/t/p/w300/${serie.poster_path}`);
    serieTagline.innerText = serie.tagline;
    serieCategoriesTitle.innerText = 'Categories';
    serieTitle.innerText = serie.name;
    serieOverview.innerText = serie.overview;
    serieOriginalTitleContainer.innerText = 'Original Title:';
    serieOriginalTitle. innerText = serie.original_name;
    serieLanguageContainer.innerText = 'Original Language:'
    serieLanguage.innerText = serie.spoken_languages[0].name;
    serieReleaseDateContainer.innerText = 'Release Date:';
    serieReleaseDate.innerText = serie.first_air_date;
    serieScoreContainer.innerText = 'Score:';
    serieScore.innerText = `${serie.vote_average} / 10`;


    generalSection.append(backHomeBtn, movieGeneralContainer);
    movieGeneralContainer.append(selectedSerieLeftSection, selectedSerieRightSection);
    selectedSerieLeftSection.append(moviePoster, serieTagline);
    serieCategories.appendChild(serieCategoriesTitle);
    selectedSerieRightSection.append(
        serieTitle,
        serieOverview,
        serieCategories,
        serieOriginalTitleContainer,
        serieLanguageContainer,
        serieReleaseDateContainer,
        serieScoreContainer);
    serieOriginalTitleContainer.appendChild(serieOriginalTitle);
    serieLanguageContainer.appendChild(serieLanguage);
    serieReleaseDateContainer.appendChild(serieReleaseDate);
    serieScoreContainer.appendChild(serieScore);
    backHomeBtn.append(backHomeIcon, backHomeBtnText);

    serie.genres.forEach(genre => {
        const categoriesElement = document.createElement('li');
        const genreTitle = document.createTextNode(genre.name);
        categoriesElement.appendChild(genreTitle);
        serieCategories.append(categoriesElement);
    })
    getRelatedContent('tv', serie.id);
};

async function getRelatedContent(content, id){
    const response = await fetch(`${mainUrl}/${content}/${id}/recommendations?api_key=${API_KEY}`);
    const data = await response.json();
    const contents = data.results.slice(0,10);

    console.log(contents);
    recommendationsList.innerHTML = '';

    main.append(recommendationsSection);
    generateContent(content, recommendationsList, contents);
};

function generateContent(section, sectionContainer, contents){
    contents.forEach(content => {
        const poster = 'https://image.tmdb.org/t/p/w300/' + content.poster_path;
        const contentContainer = document.createElement('li');
        const contentTitleContainer = document.createElement('figcaption');
        const contentTitle = document.createTextNode(content.name || content.title);
        const moreInfoBtn = document.createElement('button');
        const btnInfoText = document.createTextNode('more info');

        contentContainer.classList.add('card');
        contentContainer.setAttribute('id', content.id);
        contentContainer.setAttribute('style', `background-image: url('${poster}');`);
        contentTitleContainer.classList.add('card-name');
        moreInfoBtn.classList.add('inactive');

        sectionContainer.appendChild(contentContainer)
        contentContainer.appendChild(contentTitleContainer);
        contentTitleContainer.append(contentTitle, moreInfoBtn);
        moreInfoBtn.appendChild(btnInfoText);

        contentContainer.addEventListener('mouseover', () => {
            contentTitleContainer.classList.add('card-hover');
            moreInfoBtn.classList.remove('inactive');
        });
        contentContainer.addEventListener('mouseout', () => {
            contentTitleContainer.classList.remove('card-hover');
            moreInfoBtn.classList.add('inactive'); 
        });
        moreInfoBtn.addEventListener('click',() => {
            location.hash = `more-info=${section}/${content.name}/${content.id}`;
        });
    })
}

getMoviesCategoriesList();
getSeriesCategoriesList();
getTrendingMovies();
getPopularMoviesList();
getPopularSeriesList();





