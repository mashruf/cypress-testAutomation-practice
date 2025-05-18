/// <reference types="Cypress" />

describe("Dropdown", () => {
    it("Dropdown with select", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.get("#zcf_address_country").select("Burkina Faso").should("have.value", "Burkina Faso");
    })

    it("Dropdown without select", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.get("#select2-billing_country-container").click();
        cy.get(".select2-search__field").type("Italy{enter}");
        cy.get("#select2-billing_country-container").should("have.text", "Italy");
    })

    it("Auto suggested dropdown", () => {
        cy.visit("https://www.wikipedia.org/");
        cy.get("#searchInput").type("Dhaka");
        cy.contains(".suggestion-title", "Dhaka Capitals").click();

        cy.origin('https://en.wikipedia.org/wiki/Dhaka_Capitals', () => {
            cy.get('#firstHeading').should('have.text', 'Dhaka Capitals')
        })
    })

    it.only("Dynamic dropdown",()=>{
        cy.visit("https://www.google.com/");
        cy.get(".gLFyf").type("cypress automation");
        cy.get("div>.wM6W7d").should("have.length.gte",5);
        cy.contains("div>.wM6W7d","cypress automation course").click();
    })


})