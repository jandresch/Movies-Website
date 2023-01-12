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
    generalSection.innerHTML = '';
    trendingMoviesSection.classList.remove('inactive');
    generalMoviesSection.classList.remove('inactive');
    generalSeriesSection.classList.remove('inactive');
    generalSection.classList.add('inactive')
    moreTrendsBtn.onclick = () => {location.hash = 'trending'};
    moreMoviesBtn.onclick = () => {location.hash = 'movies'};
    moreSeriesBtn.onclick = () => {location.hash = 'series'};
}
// <section id="trendingMoviesSection" class="general_section">
//             <div class="general_section-header">
//                 <h2>Trending Movies <hr></h2>
//                 <button id="backHomeBtn" class="home-button"><i class="fa-solid fa-arrow-left"></i> Home</button>
//             </div>
//             <div id="trendingMoviesContainer" class="general_section-container">
//                 <li class="movie-card"><figcaption class="movie_card-name movie_card-hover">HOla <button class="inactive">more info</button></figcaption></li>
//             </div>
//         </section>>
const generalSection = document.createElement('section');
const generalHeaderContainer = document.createElement('div');
const generalHeaderTextContainer = document.createElement('h3');
const generalSectionLine = document.createElement('hr');
const backHomeBtn = document.createElement('button');
const backHomeIcon = document.createElement('i');
const backHomeBtnText = document.createTextNode('Home');
const generalSectionContentContainer = document.createElement('div');

generalSection.classList.add('general_section');
generalSection.classList.add('inactive');
generalHeaderContainer.classList.add('general_section-header');
backHomeIcon.classList.add('fa-solid');
backHomeIcon.classList.add('fa-arrow-left')
generalSectionContentContainer.classList.add('general_section-container');
backHomeBtn.setAttribute('id', 'backHomeBtn');







function trendingSection(){
    generalSection.innerHTML = '';
    getAllTrendingMovies()
    const generalHeaderTitle = document.createTextNode('Trending Movies');
    trendingMoviesSection.classList.add('inactive');
    generalMoviesSection.classList.add('inactive');
    generalSeriesSection.classList.add('inactive');
    
    generalSection.classList.remove('inactive');
    
    main.appendChild(generalSection)
    generalSection.append(generalHeaderContainer, generalSectionContentContainer);
    generalHeaderContainer.appendChild(generalHeaderTextContainer);
    generalHeaderTextContainer.append(generalHeaderTitle, generalSectionLine);
    generalHeaderContainer.appendChild(backHomeBtn);
    backHomeBtn.append(backHomeIcon, backHomeBtnText);
    generalSection.setAttribute('id', 'trendingMoviesSection');

    backHomeBtn.onclick = () => {location.hash = 'home'};
    
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