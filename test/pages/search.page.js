const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {

    get recentSearchSections () {
        return $$('h1[class*="index__sectionHeader"]')[0]; 
    };

    get savedSearchSections () {
        return $$('h1[class*="index__sectionHeader"]')[1];
    };
    get enteloSuggestsSections () {
        return $$('h1[class*="index__sectionHeader"]')[2];
    };

    get searchField () {
        return $('div[data-test="search-input"]');
    };

    async waitForClick () {
        return await $('ul[class*="styles__Autocomplete__items"]').waitForExist({timeout:5000});
    }

    get recentSearchFirstItem () {
        return $$('ul[class*="styles__Autocomplete__items"]')[0].$('li[data-test="autocomplete-suggestion"]');
    };

    get suggestedSearchFirstItem () {
        return $$('ul[class*="styles__Autocomplete__items"]')[1].$('li[data-test="autocomplete-suggestion"]');
    };

    get searchResultsWrapper () {
        return $('ul[class*="index__SearchResults__profileList"]');
    }

    open () {
        return super.open('search/new');
    }
}

module.exports = new SearchPage();