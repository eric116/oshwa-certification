const ListFilter = {
  options: {
    valueNames: [
      'name',
      'uid',
      'version',
      'date',
      { name: 'type', attr: 'type' },
      { name: 'hardware', attr: 'hardware' },
      { name: 'documentation', attr: 'documentation' },
      { name: 'software', attr: 'software' }
    ],
    fuzzySearch: {
      searchClass: 'fuzzy-search',
      location: 0,
      distance: 100,
      threshold: 0.2,
      multiSearch: true
    }
  },
  projectList: undefined,
  searchString: '',
  allFilters: $('.dropdown'),
  searchQueries: { documentation: 'all', software: 'all', hardware: 'all' },
  typeCheckedValues: [],
  createList: () => {
    ListFilter.projectList = new List('project_data', ListFilter.options);

    if (window.location.href.includes('list')) {
      ListFilter.projectList.sort('name', { order: 'asc' });
    }
  },
  filterList: () => {
    ListFilter.projectList.filter(item => {
      if (
        item.values().hardware !== null &&
        item.values().documentation !== null &&
        item.values().software !== null &&
        item.values().hardware.indexOf(ListFilter.searchQueries.hardware) !== -1 &&
        item.values().documentation.indexOf(ListFilter.searchQueries.documentation) !== -1 &&
        item.values().software.indexOf(ListFilter.searchQueries.software) !== -1
      ) {
        return true;
      }
    });

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    ListFilter.typeCheckedValues.forEach(selectedType => {
      ListFilter.projectList.search(selectedType, ['type']);
    });
    // checkboxes not working when search is used //
    // combine these somehow //
    ListFilter.projectList.search(ListFilter.searchString);
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

    ListFilter.displayResults();
  },
  filterBySearch: () => {
    $('#searchfield').on('keyup', e => {
      ListFilter.searchString = $(e.currentTarget).val();
      ListFilter.filterList();
    });
  },
  filterByDropdowns: () => {
    ListFilter.allFilters.on('change', e => {
      ListFilter.allFilters.each(selection => {
        $(selection).each(() => {
          const filterSelection = e.currentTarget.id;
          const selectedOption = $(e.currentTarget).children(':selected').attr('id');

          ListFilter.searchQueries[filterSelection] = selectedOption;
        });
      });
      ListFilter.filterList();
    });
  },
  filterByCheckboxes: () => {
    $('.filter-container').on('change', $('input[type="checkbox"]:checked'), () => {
      ListFilter.typeCheckedValues = $('input[type="checkbox"]:checked').map(function() {
        return this.value;
      }).get();

      if (ListFilter.typeCheckedValues.length === 0) {
        ListFilter.typeCheckedValues = ['all'];
      }

      ListFilter.filterList();
    });
  },
  filterByUrlParams: () => {
    const searchQuery = window.location.search.split('=')[0];
    const searchParam = window.location.search.split('=')[1];

    switch (searchQuery) {
      case '?q':
        ListFilter.projectList.search(decodeURI(searchParam));
        break;
      case '?type':
        // filter by type
        break;
      default:
    }
  },
  clearAllFilters: () => {
    $('.clear_filters').on('click', e => {
      e.preventDefault();
      ListFilter.searchString = '';
      ListFilter.projectList.search();
      ListFilter.projectList.filter();
      ListFilter.projectList.sort('name', { order: 'asc' });

      $('.search__input').val('');
      $('.dropdown').prop('selectedIndex', 0);
      $('input[type="checkbox"]:checked').map(function() {
        return $(this).attr('checked', false);
      });

      if (window.location.search !== '') {
        window.location.href = window.location.origin + '/list.html';
      }

      ListFilter.displayResults();
    });
  },
  displayResults: () => {
    const projectCount = $('.project').length;
    $('.results-count').html('<p>Displaying ' + projectCount + ' Projects</p>');
  },
  // displayResultQueries: () => {
  //   // $('.results-message').html('<p>Results:</p>');
  // },
  init() {
    this.createList();
    this.filterBySearch();
    this.filterByDropdowns();
    this.filterByCheckboxes();
    this.filterByUrlParams();
    this.clearAllFilters();
    this.displayResults();
  }
};

module.exports = ListFilter;
