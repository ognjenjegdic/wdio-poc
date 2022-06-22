

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('#user_email');
    }

    get inputPassword () {
        return $('#user_password');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    get profileName () {
        return $('span[class="navbar-user-name"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async enterEmail (email) {
        await this.inputEmail.setValue(email);
        await this.btnSubmit.click();
    }

    async enterPassword (password) {
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async performValidLogin (email,password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('users/login');
    }
}

module.exports = new LoginPage();
