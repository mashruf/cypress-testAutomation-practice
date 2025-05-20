/// <reference types="Cypress" />

describe("Handling child tabs",()=>{

    it("Approach 1",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").invoke("removeAttr","target").click();
        cy.url().should("eq","https://the-internet.herokuapp.com/windows/new");
        cy.go("back");
        cy.url().should("eq","https://the-internet.herokuapp.com/windows");
    })

    it("Approach 2",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").then((e)=>{
            let url = e.prop('href');
            cy.visit(url);
        })

        cy.url().should("eq","https://the-internet.herokuapp.com/windows/new")
        cy.go("back");
        cy.url().should("eq","https://the-internet.herokuapp.com/windows")
    })




})