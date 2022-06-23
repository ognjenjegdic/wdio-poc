const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {

    get recentSearchSections () {
        return $$('h1[class*="index__sectionHeader"]')[0]; 
    };

    get savedSearchSections () {
        return $$('h1[class*="index__sectionHeader"]')[1]
    };

    get enteloSuggestsSections () {
        return $$('h1[class*="index__sectionHeader"]')[2]
    };

    open () {
        return super.open('search/new');
    }
}

module.exports = new SearchPage();