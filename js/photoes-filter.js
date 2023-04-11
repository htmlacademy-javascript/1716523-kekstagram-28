import { addsPicturesTemplates } from './random-user-pictures.js';
import { debounce } from './util.js';

const filterInterface = document.querySelector('.img-filters');
const defaultFilterButton = filterInterface.querySelector('#filter-default');
const randomFilterButton = filterInterface.querySelector('#filter-random');
const mostCommentedFilterButton = filterInterface.querySelector('#filter-discussed');
const RENDER_DELAY = 500;

const showDefaultPhotoes = function (descriptions) {
  return descriptions;
};

const showRandomPhotoes = function (descriptions) {
  return descriptions.slice().sort(() => Math.random() - 0.5).slice(0, 10);
};

const showMostCommentedPhotoes = function (descriptions) {
  return descriptions.slice().sort((a, b) => b.comments.length - a.comments.length);
};

const showFilter = function (descriptions) {
  filterInterface.classList.remove('img-filters--inactive');
  const onFilterClickHandler = (evt) => {
    if (evt.target === randomFilterButton) {
      mostCommentedFilterButton.classList.remove('img-filters__button--active');
      randomFilterButton.classList.add('img-filters__button--active');
      defaultFilterButton.classList.remove('img-filters__button--active');
      addsPicturesTemplates(descriptions, showRandomPhotoes);
    } else if (evt.target === mostCommentedFilterButton) {
      mostCommentedFilterButton.classList.add('img-filters__button--active');
      randomFilterButton.classList.remove('img-filters__button--active');
      defaultFilterButton.classList.remove('img-filters__button--active');
      addsPicturesTemplates(descriptions, showMostCommentedPhotoes);
    } else if (evt.target === defaultFilterButton) {
      mostCommentedFilterButton.classList.remove('img-filters__button--active');
      defaultFilterButton.classList.add('img-filters__button--active');
      randomFilterButton.classList.remove('img-filters__button--active');
      addsPicturesTemplates(descriptions, showDefaultPhotoes);
    }
  };
  const onFilterClickDebouncerHandler = debounce(onFilterClickHandler, RENDER_DELAY);
  filterInterface.addEventListener('click', onFilterClickDebouncerHandler);
};

export { showFilter, showDefaultPhotoes };


