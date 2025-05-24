describe("Handling mouse event", () => {

    it("Mouse over", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("div[id='HTML3'] a:nth-child(1)").should("not.be.visible");
        cy.get(".dropbtn").realHover();
        cy.get("div[id='HTML3'] a:nth-child(1)").should("be.visible");
    })

    it("Right click", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        cy.get('.context-menu-icon-edit').should("not.be.visible");
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-icon-edit').should("be.visible");
    })

    it("Double click", () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.frameLoaded("#iframeResult");
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!");

    })

    it("Drug and drop using plugin", () => {
        cy.visit("https://commitquality.com/practice-drag-and-drop");
        cy.get("#small-box").should("be.visible").drag(".large-box");
        cy.get(".large-box").should("contain","Success!");
        
    })

    it.only("Scroll",()=>{
        cy.visit("https://www.worldometers.info/geography/flags-of-the-world/");
        cy.get("img[alt='Cyprus']").scrollIntoView({duration:5000});
        cy.get("img[alt='Cyprus']").should("be.visible");
        cy.get("img[alt='Bhutan']").scrollIntoView({duration:5000});
        cy.get("img[alt='Bhutan']").should("be.visible");
        cy.get("footer").scrollIntoView({duration:5000});
        cy.get("footer").should("be.visible");
    })


})

