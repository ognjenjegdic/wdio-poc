const LoginPage = require('../pages/login.page');
const HomePage = require('../pages/home.page');

describe('Login', () => {
    it('User is able to log in successfully', async () => {
        await LoginPage.open();
        await LoginPage.performValidLogin(process.env.EMAIL, process.env.PASSWORD);
        expect(await LoginPage.profileName).toBeDisplayed();
    });
});

