window.addEventListener('DOMContentLoaded', navigate);
window.addEventListener('hashchange', navigate);

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
    }else{
        console.log('Estas en el home');
        homeLocation();
    }
}

function homeLocation(){
    console.log('Estas en el home');
    trendingMoviesSection.classList.remove('inactive');
    generalMoviesSection.classList.remove('inactive');
    generalSeriesSection.classList.remove('inactive');
    generalSection.classList.add('inactive')

    getPopularMoviesList(1);
    moreTrendsBtn.onclick = () => {location.hash = 'trending'};
    moreMoviesBtn.onclick = () => {location.hash = 'movies'};
    moreSeriesBtn.onclick = () => {location.hash = 'series'};
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

let numberOfPage = 1;

function moviesSection(){

    const generalHeaderTitle = document.createTextNode('Movies');
    const pageNumber = document.createTextNode(numberOfPage);


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

    getPopularMoviesList(numberOfPage);
    backHomeBtn.onclick = () => {location.hash = 'home'};

        previousBtn.onclick = () => {
            if(numberOfPage > 1){
                numberOfPage--; 
                console.log(numberOfPage); 
                moviesSection()
            }
        }
            
        nextBtn.onclick = () => {
            if(numberOfPage < 6){
                numberOfPage++; 
                console.log(numberOfPage); 
                moviesSection()}
            }
    
}

function seriesSection(){
    trendingMoviesSection.classList.add('inactive');
    generalMoviesSection.classList.add('inactive');
    generalSeriesSection.classList.remove('inactive');   
}