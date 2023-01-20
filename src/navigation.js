window.addEventListener('DOMContentLoaded', navigate);
window.addEventListener('hashchange', navigate);
let numberOfCurrentPage = 1;

function navigate(){
    if(location.hash.startsWith('#home')){
        homeLocation();
    }else if(location.hash.startsWith('#trending')){
        console.log('Estas los trends');
        trendingSection();
    }else if(location.hash.startsWith('#movies')){
        console.log('Estas en las peliculas');
        moviesSection();
    }else if(location.hash.startsWith('#series')){
        console.log('Estas en las series');
        seriesSection();
    }else if(location.hash.startsWith('#category')){
        console.log('Estas en las categorias');
        categoriesSection();
    }else if(location.hash.startsWith('#more-info')){
        console.log('Estas en more-info');
        moreInfoSection();
    }else{
        console.log('Estas en el home');
        homeLocation();
    }

    showNavbarCategoriesList();
    searchBarBtn.onclick = () => {alert(searchBar.value)}
}

function showNavbarCategoriesList(){
    moviesCategoriesBtn.addEventListener('mouseover', () => {
        moviesCategoriesList.classList.remove('inactive');
    
        if(!seriesCategoriesList.classList.contains('inactive')){
            seriesCategoriesList.classList.add('inactive');
        };
    });
    moviesCategoriesList.addEventListener('mouseout', () => {
        moviesCategoriesList.classList.add('inactive'); 
    });
    
    seriesCategoriesBtn.addEventListener('mouseover', () => {
        seriesCategoriesList.classList.remove('inactive');
    
        if(!moviesCategoriesList.classList.contains('inactive')){
            moviesCategoriesList.classList.add('inactive');
        };
    });
    seriesCategoriesList.addEventListener('mouseout', () => {
        seriesCategoriesList.classList.add('inactive'); 
    });
}

function homeLocation(){
    console.log('Estas en el home');
    numberOfCurrentPage = 1;
    trendingMoviesSection.classList.remove('inactive');
    generalMoviesSection.classList.remove('inactive');
    generalSeriesSection.classList.remove('inactive');
    generalSection.classList.add('inactive')

    getPopularMoviesList(1);
    getPopularSeriesList(1);
    moreTrendsBtn.onclick = () => {location.hash = 'trending'};
    moreMoviesBtn.onclick = () => {location.hash = 'movies'};
    moreSeriesBtn.onclick = () => {location.hash = 'series'};
    trendingArrowLeftContainer.onclick = () => {scrollTrendingList.ascrollLeft =- 240};
    trendingArrowRightContainer.onclick = () => {scrollTrendingList.scrollLeft += 240};
}

function trendingSection(){
    const generalHeaderTitle = document.createTextNode('Trending Movies');


    generalHeaderTextContainer.innerHTML = '';
    generalSectionContentContainer.innerHTML = '';
    generalSectionPageBtns.innerHTML = '';
    
    main.appendChild(generalSection);
    generalSection.append(generalHeaderContainer, generalSectionContentContainer);
    generalHeaderContainer.append(generalHeaderTextContainer, backHomeBtn);
    generalHeaderTextContainer.append(generalHeaderTitle, generalSectionLine);
    backHomeBtn.append(backHomeIcon, backHomeBtnText);
    generalSection.setAttribute('id', 'trendingMoviesSection');
    
    trendingMoviesSection.classList.add('inactive');
    generalMoviesSection.classList.add('inactive');
    generalSeriesSection.classList.add('inactive');
    generalSection.classList.remove('inactive');

    getAllTrendingMovies()
    backHomeBtn.onclick = () => {location.hash = 'home'};

}

function moviesSection(){

    const generalHeaderTitle = document.createTextNode('Movies');
    const pageNumber = document.createTextNode(numberOfCurrentPage);

    generalHeaderTextContainer.innerHTML = '';
    generalSectionContentContainer.innerHTML = '';
    pageNum.innerHTML = '';

    main.appendChild(generalSection);
    generalSection.append(generalHeaderContainer, generalSectionContentContainer, generalSectionPageBtns);
    generalHeaderContainer.append(generalHeaderTextContainer, backHomeBtn);
    generalHeaderTextContainer.append(generalHeaderTitle, generalSectionLine);
    backHomeBtn.append(backHomeIcon, backHomeBtnText);
    generalSectionPageBtns.append(previousBtn, pageNum, nextBtn);
    previousBtn.appendChild(previousBtnIcon);
    pageNum.appendChild(pageNumber);
    nextBtn.appendChild(nextBtnIcon);
    generalSection.setAttribute('id', 'moviesSection');

    trendingMoviesSection.classList.add('inactive');
    generalMoviesSection.classList.add('inactive');
    generalSeriesSection.classList.add('inactive');
    generalSection.classList.remove('inactive');

    getPopularMoviesList(numberOfCurrentPage);
    backHomeBtn.onclick = () => {location.hash = 'home'};

        previousBtn.onclick = () => {
            if(numberOfCurrentPage > 1){
                numberOfCurrentPage--; 
                console.log(numberOfCurrentPage); 
                moviesSection()
            }
        }
            
        nextBtn.onclick = () => {
            if(numberOfCurrentPage < 6){
                numberOfCurrentPage++; 
                console.log(numberOfCurrentPage); 
                moviesSection()}
        }
    
}

function seriesSection(){
    const generalHeaderTitle = document.createTextNode('Series');
    const pageNumber = document.createTextNode(numberOfCurrentPage);

    generalHeaderTextContainer.innerHTML = '';
    generalSectionContentContainer.innerHTML = '';
    pageNum.innerHTML = '';

    main.appendChild(generalSection);
    generalSection.append(generalHeaderContainer, generalSectionContentContainer, generalSectionPageBtns);
    generalHeaderContainer.append(generalHeaderTextContainer, backHomeBtn);
    generalHeaderTextContainer.append(generalHeaderTitle, generalSectionLine);
    backHomeBtn.append(backHomeIcon, backHomeBtnText);
    generalSectionPageBtns.append(previousBtn, pageNum, nextBtn);
    previousBtn.appendChild(previousBtnIcon);
    pageNum.appendChild(pageNumber);
    nextBtn.appendChild(nextBtnIcon);
    generalSection.setAttribute('id', 'moviesSection');

    trendingMoviesSection.classList.add('inactive');
    generalMoviesSection.classList.add('inactive');
    generalSeriesSection.classList.add('inactive');
    generalSection.classList.remove('inactive');

    getPopularSeriesList(numberOfCurrentPage)
    backHomeBtn.onclick = () => {location.hash = 'home'};

        previousBtn.onclick = () => {
            if(numberOfCurrentPage > 1){
                numberOfCurrentPage--; 
                console.log(numberOfCurrentPage); 
                seriesSection()
            }
        }
            
        nextBtn.onclick = () => {
            if(numberOfCurrentPage < 6){
                numberOfCurrentPage++; 
                console.log(numberOfCurrentPage); 
                seriesSection()}
        } 
}

function moreInfoSection(){
    const [_, movieId] = location.hash.split("/");
    console.log(movieId);

    main.appendChild(generalSection);


    trendingMoviesSection.classList.add('inactive');
    generalMoviesSection.classList.add('inactive');
    generalSeriesSection.classList.add('inactive');
    generalSection.classList.remove('inactive');

    getMovieInformation(movieId);
}

function categoriesSection(){

};


// arrowBtn.addEventListener('click', () => {
//     location.hash = window.history.back();
//  });