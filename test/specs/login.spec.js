const LoginPage = require('../pages/login.page');

describe('Login', () => {
    it('User is able to log in successfully', async () => {
        await LoginPage.open();
        await LoginPage.performValidLogin(process.env.EMAIL, process.env.PASSWORD)
        const profileName = await LoginPage.getProfileName();
        expect(profileName).toBe("Ognjen");
    });
});


