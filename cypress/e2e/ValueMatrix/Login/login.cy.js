<reference types="cypress" />
const cypress = require("cypress");


describe ('Login Test Automate ', ()=>{

    it(' TCID_1_ Login with Valid email and Valid password  ', () => {
        
        cy.visit('http://stage.valuematrix.ai/login');
        cy.get[name = 'username'].type('nitin.verma@valuematrix.ai')
        cy.get[name = 'password'].type('Password@123')



     })
         

})

