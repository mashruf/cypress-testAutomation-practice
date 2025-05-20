/// <reference types="Cypress" />

describe("Alert",()=>{

    beforeEach("",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    })

    it("Js alert",()=>{
        cy.get("button[onclick='jsAlert()']").click();
        cy.on("window:alert",(textInAlert)=>{
            expect(textInAlert).to.contain("I am a JS Alert");
        })
        cy.get("#result").should("have.text","You successfully clicked an alert");
    })

    it("Js confirm alert",()=>{
        cy.get("[onclick='jsConfirm()']").click();
        cy.on("window:confirm",(textInAlert)=>{
            expect(textInAlert).to.contain("I am a JS Confirm");
        })

        //to click cancel button
        //don't need to write it for default ok button
        cy.on("window:confirm",()=>false);

        cy.get("#result").should("have.text","You clicked: Cancel");
    })

    it("Js prompt alert",()=>{
    //     cy.window().then(win=>{
    //         cy.stub(win,'prompt').returns("Welcome!");
    // })
        //for cancel button 
        cy.window().then(win=>{
            cy.stub(win,'prompt').returns(null);
    })
        cy.get("[onclick='jsPrompt()']").click();
        cy.on('window:prompt',()=>false);
        // cy.get("#result").should("have.text","You entered: Welcome!");

        //for cancel button
        cy.get("#result").should("have.text","You entered: null");
    })
})