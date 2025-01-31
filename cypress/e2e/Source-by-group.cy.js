import Report from '../support/View-report-page'
describe('Sarc MedIQ web app Login Happy Positive Test Cases Flow', function () {
    const Repo = new Report
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
               cy.viewport(1400, 760) 
          });


    it('Verify user Login into MedIQ and Add measurements of patient', function(){
        Repo.OpenURL(this.testdata.url.QA);
        Repo.enterEmail(this.testdata.username.MedIQuser);
        Repo.enterPassword(this.testdata.password.MedIQpass);
        Repo.button();
        Repo.Source();
        Repo.Logout();

    })
})

