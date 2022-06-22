const LoginPage = require('../pages/login.page');
const HomePage = require('../pages/home.page');

describe('Homepage sections', () => {

    beforeAll('Login', async () => {
        await LoginPage.open();
        await LoginPage.performValidLogin(process.env.EMAIL, process.env.PASSWORD)
    });

    it('Projects section is displayed', async () => {
        const projectsLableText = await HomePage.projectsSection.getText();
        expect(projectsLableText).toBe("PROJECTS");
    }); 

    it('Messages section is displayed', async () => {
        const messagesLabelText = await HomePage.messagesSection.getText();
        expect(messagesLabelText).toBe("MESSAGING");
    }); 

    it('Activity section is displayed', async () => {
        const activityLableText = await HomePage.activitySection.getText();
        expect(activityLableText).toBe("ACTIVITY");
    }); 

    it('Recent searches section is displayed', async () => {
        const recentSearchesLableText = await HomePage.recentSearchesSection.getText();
        expect(recentSearchesLableText).toBe("RECENT SEARCHES");
    });
    
    it('Achievements section is displayed', async () => {
        const achievementsLableText = await HomePage.achievementsSection.getText();
        expect(achievementsLableText).toBe("ACHIEVEMENTS");
    });
});


