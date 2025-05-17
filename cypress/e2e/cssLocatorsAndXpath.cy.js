/// <reference types="Cypress" />

describe("Css locators and xpath", () => {
    
    it("Css locators", () => {
        cy.visit("https://automationpanda.com/");
        cy.get("#menu-item-9").click();
        cy.get(".entry-title").contains("About");
        cy.get(".search-field").type("Test{enter}");
        cy.get(".page-title").contains("Search Results for: Test");
    })

    it.only("Xpath locators",()=>{
        cy.visit("https://www.demoblaze.com/");
        // cy.xpath("//div[@id='tbodyid']/div").should("have.length",9);
        cy.xpath("//div[@id='tbodyid']").xpath("./div").should("have.length",9)
    })
})