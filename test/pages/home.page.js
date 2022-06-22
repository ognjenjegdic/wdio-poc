const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    get sections () {
        return $$('div[class*="styles__card"]'); 
    };

    get projectsSection () {
        return this.sections[0].$('h1');
    };

    get messagesSection () {
        return this.sections[1].$('h1');
    };

    get activitySection () {
        return this.sections[2].$('h1');
    };

    get recentSearchesSection () {
        return this.sections[3].$('h1');
    };

    get achievementsSection () {
        return this.sections[4].$('h1');
    };

    open () {
        return super.open('');
    }
}

module.exports = new HomePage();