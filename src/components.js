// Components from HTML document
const main = document.querySelector('main');
const moviesCategoriesBtn = document.querySelector('#navTexts .nav_categories-movies');
const moviesCategoriesList = document.querySelector('.nav_categories-movies .movies');
const seriesCategoriesBtn = document.querySelector('#navTexts .nav_categories-series');
const seriesCategoriesList = document.querySelector('.nav_categories-series .series');
const searchBar = document.getElementById('searchBar');
const searchBarBtn = document.getElementById('searchBarBtn');
const mainMoviesBg = document.querySelector('.main_movies_section');
const trendingMoviesSection = document.getElementById('trendingMoviesSection');
const trendingArrowLeftContainer = document.getElementById('trendingArrowLeftContainer');
const trendingArrowRightContainer = document.getElementById('trendingArrowRightContainer');
const scrollTrendingList = document.querySelector('.main_movies_list-container')
const generalMoviesSection = document.getElementById('generalMoviesSection');
const generalSeriesSection = document.getElementById('generalSeriesSection');
const moreTrendsBtn = document.getElementById('trendsBtn');
const moreMoviesBtn = document.getElementById('moreMoviesBtn');
const moreSeriesBtn = document.getElementById('moreSeriesBtn');
const moviesList = document.getElementById('moviesList');
const popularMoviesContainer = document.getElementById('popularMoviesContainer');
const popularSeriesContainer = document.getElementById('popularSeriesContainer');

// Components from JS
const generalSection = document.createElement('section');
const generalHeaderContainer = document.createElement('div');
const generalHeaderTextContainer = document.createElement('h3');
const generalSectionLine = document.createElement('hr');
const backHomeBtn = document.createElement('button');
const backHomeIcon = document.createElement('i');
const backHomeBtnText = document.createTextNode('Home');
const generalSectionContentContainer = document.createElement('div');
const generalSectionPageBtns = document.createElement('div');
const previousBtn = document.createElement('button');
const previousBtnIcon = document.createElement('i');
const pageNum = document.createElement('strong');
const nextBtn = document.createElement('button');
const nextBtnIcon = document.createElement('i');

const movieGeneralContainer = document.createElement('div');


generalSection.classList.add('general_section');
generalSection.classList.add('inactive');
generalHeaderContainer.classList.add('general_section-header');
backHomeIcon.classList.add('fa-solid', 'fa-arrow-left');
generalSectionContentContainer.classList.add('general_section-container');
generalSectionPageBtns.classList.add('btnsSection');
previousBtnIcon.classList.add('fa-solid', 'fa-chevron-left');
nextBtnIcon.classList.add('fa-solid', 'fa-chevron-right');

movieGeneralContainer.classList.add('movie_general-container')


backHomeBtn.setAttribute('id', 'backHomeBtn');