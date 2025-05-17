/// <reference types="Cypress" />

describe("Radio button and check box", () => {
    it("Radio button", () => {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
        cy.get("input[value='male']").should("be.visible");
        cy.get("input[value='male']").check();
        cy.get("input[value='male']").should("be.checked");
        cy.get("input[value='female']").should("not.be.checked");
        cy.get("input[value='other']").should("not.be.checked");

        cy.get("input[value='female']").should("be.visible");
        cy.get("input[value='female']").check();
        cy.get("input[value='female']").should("be.checked");
        cy.get("input[value='male']").should("not.be.checked");
        cy.get("input[value='other']").should("not.be.checked");

        cy.get("input[value='other']").should("be.visible");
        cy.get("input[value='other']").check();
        cy.get("input[value='other']").should("be.checked");
        cy.get("input[value='male']").should("not.be.checked");
        cy.get("input[value='female']").should("not.be.checked");
    })

    it.only("CheckBox", () => {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");

        cy.get('input[value="Bike"]').should('be.visible');
        cy.get('input[value="Bike"]').check().should("be.checked");
        cy.get('input[value="Bike"]').uncheck().should("not.be.checked");
        
        cy.get('input[value="Car"]').should('be.visible');
        cy.get('input[value="Car"]').check().should("be.checked");
        cy.get('input[value="Car"]').uncheck().should("not.be.checked");

        cy.get("input[type='checkbox']").check();
        cy.get("input[type='checkbox']").uncheck();
        
        cy.get("input[type='checkbox']").first().check().should("be.checked");
        cy.get("input[type='checkbox']").first().uncheck().should("not.be.checked");
    })


})