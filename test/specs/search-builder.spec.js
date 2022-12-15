const LoginPage = require('../pages/login.page');
const SearchPage = require('../pages/search.page');

describe('Search builder', () => {
    //todo
    beforeAll('Login', async () => {
        await LoginPage.open();
        await LoginPage.performValidLogin(process.env.EMAIL, process.env.PASSWORD);
        await SearchPage.open();
    });

    it('Perform a search from Search builder', async () => {
        await SearchPage.open();
        await SearchPage.searchBuilderButton.click();
        await SearchPage.positionField.click();
        await SearchPage.positionField.setValue("QA Engineer");
        await SearchPage.positionSuggestion.click();
        await browser.pause(5000);
        expect(SearchPage.searchBuilderPopup).toBeDisplayed();
    });
    
});