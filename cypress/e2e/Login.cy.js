import Login from '../support/Login-page'
describe('Sarc MedIQ web app Login Happy Positive Test Cases Flow', function () {
    const login = new Login
    beforeEach(function () {
        cy.fixture('example').then(function(testdata){       
        this.testdata = testdata       
         // Uncaught error events off       
           Cypress.on('uncaught:exception', (err, runnable) => {        
         //  // returning false here prevents Cypress from        
         //  // failing the test        
           return false     
            });   
            });  
            cy.viewport(890, 400) 
          });


    it('Verify user Login with valid credentials into MedIQ', function(){
        login.OpenURL(this.testdata.url.QA);
        login.enterEmail(this.testdata.username.MedIQuser);
        login.enterPassword(this.testdata.password.MedIQpass);
        login.button()
        login.logout()

    })
})

