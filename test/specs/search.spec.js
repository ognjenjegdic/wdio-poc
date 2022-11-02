const LoginPage = require('../pages/login.page');
const SearchPage = require('../pages/search.page');

describe('Search page', () => {

    beforeAll('Login', async () => {
        await LoginPage.open();
        await LoginPage.performValidLogin(process.env.EMAIL, process.env.PASSWORD);
        await SearchPage.open();
    });

    it('Recent search section is displayed', async () => {
        const recentSearches = await SearchPage.recentSearchSections.getText();
        expect(recentSearches).toBe("RECENT SEARCHES");
    }); 

    it('Saved searches section is displayed', async () => {
        const savedSearches = await SearchPage.savedSearchSections.getText();
        expect(savedSearches).toBe("SAVED SEARCHES");
    });

    it('Entelo suggests section is displayed', async () => {
        const enteloSuggest = await SearchPage.enteloSuggestsSections.getText();
        expect(enteloSuggest).toBe("ENTELO SUGGESTS");
    });

    it('User can search from recent searches when search field is clicked', async () => {
        await SearchPage.searchField.click();
        await SearchPage.waitForDropdownToBeOpened();
        await SearchPage.recentSearchFirstItem.click();
        await SearchPage.searchResultsWrapper.waitForExist({timeout: 10000});
        expect(await SearchPage.searchResultsWrapper.isDisplayed()).toBe(true);
    });

    it('User can search from suggested searches when search field is clicked', async () => {
        await SearchPage.open();
        await SearchPage.searchField.click();
        await SearchPage.waitForDropdownToBeOpened();
        await SearchPage.suggestedSearchFirstItem.click();
        await SearchPage.searchResultsWrapper.waitForExist({timeout: 10000});
        expect(await SearchPage.searchResultsWrapper.isDisplayed()).toBe(true);
    });

    it('User can search from suggested searches ', async () => {
        await SearchPage.open();
        await SearchPage.enteloSuggestsLink.click();
        await SearchPage.searchResultsWrapper.waitForExist({timeout:20000});
        expect(await SearchPage.searchResultsWrapper.isDisplayed()).toBe(true);
    });

});


