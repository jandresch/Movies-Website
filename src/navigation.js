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
        // location.hash = 'home'
    }
}

function homeLocation(){
    console.log('Estas en el home');
    trendingMoviesSection.classList.remove('inactive');
    generalMoviesSection.classList.remove('inactive');
    generalSeriesSection.classList.remove('inactive');
    moreTrendsBtn.onclick = () => {location.hash = 'trending'};
    moreMoviesBtn.onclick = () => {location.hash = 'movies'};
    moreSeriesBtn.onclick = () => {location.hash = 'series'};
}

function trendingSection(){
    trendingMoviesSection.classList.add('inactive');
    generalMoviesSection.classList.add('inactive');
    generalSeriesSection.classList.add('inactive');
}

function moviesSection(){
    trendingMoviesSection.classList.add('inactive');
    generalMoviesSection.classList.remove('inactive');
    generalSeriesSection.classList.add('inactive');
}

function seriesSection(){
    trendingMoviesSection.classList.add('inactive');
    generalMoviesSection.classList.add('inactive');
    generalSeriesSection.classList.remove('inactive');   
}