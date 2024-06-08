import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generatePaginationButton(curPage + 1, 'next');
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generatePaginationButton(curPage - 1, 'prev');
    }

    // Other page
    if (curPage < numPages) {
      return (
        this._generatePaginationButton(curPage - 1, 'prev') +
        this._generatePaginationButton(curPage + 1, 'next')
      );
    }

    // Page 1, and there are NO other pages
    return '';
  }
  _generatePaginationButton(pageNum, dir) {
    if (dir === 'next')
      return `
        <button class="btn--inline pagination__btn--next">
            <span>Page ${pageNum}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
    `;
    else
      return `
        <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${pageNum}</span>
        </button>
    `;
  }
}

export default new PaginationView();
