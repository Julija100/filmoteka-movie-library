import { refs } from './refs';
import { onSearch } from './onSearch';
import { onHomePageLoad } from './popMoviesloadFunctions';
import { onLibraryWatсhedClick } from './addMovieToLibrary';
// import switchLoadingDots from './switchLoadingDots';

const navigationLinks = document.getElementsByClassName('navigation-link'); //получение классов (массив)

[...navigationLinks].forEach(navigationLink => {
  //перебор массива
  navigationLink.addEventListener('click', function (e) {
    e.preventDefault(); //остановить обработку ссылки

    navigateTo(e.currentTarget.getAttribute('href')); //добавляет новое состояние в историю браузера
  });
});

function onHomeBtnClick() {
  onHomePageLoad();
  refs.library.classList.add('visually-hidden');
  refs.popularMoveisNav.classList.remove('visually-hidden');
  refs.sectionContainer.classList.remove('visually-hidden');
  refs.searchMovieForm.classList.remove('visually-hidden');
  refs.libraryButtons.classList.add('visually-hidden');
  refs.mylibraryBtn.classList.remove('active-navigation');
  refs.homeBtn.classList.add('active-navigation');
  refs.footer.classList.remove('show-footer-in-library');
  refs.myLibraryIsActive.classList.remove('active-navigation');
  refs.myHomeIsActive.classList.add('active-navigation');
}

function onMyLibraryBtnClick() {
  refs.library.classList.remove('visually-hidden');
  refs.sectionContainer.innerHTML = '';
  refs.popularMoveisNav.classList.add('visually-hidden');
  refs.sectionContainer.classList.add('visually-hidden');
  refs.searchMovieForm.classList.add('visually-hidden');
  refs.libraryButtons.classList.remove('visually-hidden');
  refs.mylibraryBtn.classList.add('active-navigation');
  refs.homeBtn.classList.remove('active-navigation');
  refs.footer.classList.add('show-footer-in-library');
  refs.myLibraryIsActive.classList.add('active-navigation');
  refs.myHomeIsActive.classList.remove('active-navigation');
  
  onLibraryWatсhedClick();
}

function realisePageSwiching(path) {
  if (path === '/library') {
    onMyLibraryBtnClick();
  } else {
    onHomeBtnClick();
  }
}

const navigateTo = path => {
  // history.pushState(null, null, path);
  realisePageSwiching(path);
};
window.addEventListener('popstate', () => {
  realisePageSwiching(window.location.pathname);
});

realisePageSwiching(window.location.pathname);
document.querySelector('.search-movie-form').addEventListener('submit', onSearch);
document.querySelector('.search-movie-form').addEventListener('submit', onSearch);
