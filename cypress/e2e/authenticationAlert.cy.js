/// <reference types="Cypress" />

describe("Js alert",()=>{

    it("Authentication alert",()=>{
        // cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}});
        // cy.get(".example>p").should("contain","Congratulations! You must have the proper credentials.");
    
        //or we can write
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        cy.get(".example>p").should("contain","Congratulations! You must have the proper credentials.");

    })

})