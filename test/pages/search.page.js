const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {


    async waitForDropdownToBeOpened() {
        return await $('ul[class*="styles__Autocomplete__items"]').waitForExist({timeout:10000});
    }


    get recentSearchSections () {
        return $$('h1[class*="index__sectionHeader"]')[0]; 
    };

    get savedSearchSections () {
        return $$('h1[class*="index__sectionHeader"]')[1];
    };
    get enteloSuggestsSections () {
        return $$('h1[class*="index__sectionHeader"]')[2];
    };

    get enteloSuggestsLink () {
        return $('a[class*="suggestion"]');
    }

    get searchField () {
        return $('div[data-test="search-input"]');
    };

    get recentSearchFirstItem () {
        return $$('ul[class*="styles__Autocomplete__items"]')[0].$('li[data-test="autocomplete-suggestion"]');
    };

    get suggestedSearchFirstItem () {
        return $$('ul[class*="styles__Autocomplete__items"]')[1].$('li[data-test="autocomplete-suggestion"]');
    };

    get searchResultsWrapper () {
        return $('ul[class*="index__SearchResults__profileList"]');
    }

    get searchBuilderButton () {
        return $('button[data-test="search-builder-trigger"]');
    }

    get searchBuilderPopup () {
        return $('main[class*="Builder__body"]')
    }

    get positionField () {
        return $('input[type="text"]')
    }

    get positionSuggestion () {
        return $('div[data-test="typeahead-suggestion"]');
    }

    get preferredExcludedPositionDropdown () {
        return $$('div[class*="Select__select__label"]')[0];
    }

    get preferredExcludedSkillsDropdown () {
        return $$('div[class*="Select__select__label"]')[1];
    }

    get preferredExcludedCompaniesDropdown () {
        return $$('div[class*="Select__select__label"]')[0];
    }

    open () {
        return super.open('search/new');
    }
}

module.exports = new SearchPage();