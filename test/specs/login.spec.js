const LoginPage = require('../pages/login.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.enterEmail(process.env.EMAIL);
        await LoginPage.enterPassword(process.env.PASSWORD);
        let profileName = await LoginPage.getProfileName();
        expect(profileName).toBe("Ognjen");
    });
});


