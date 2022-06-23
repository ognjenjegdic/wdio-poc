const LoginPage = require('../pages/login.page');
const SearchPage = require('../pages/search.page');

describe('Homepage sections', () => {

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

});


