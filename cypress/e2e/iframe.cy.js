describe("iframe",()=>{
    it("Using iframe plugin",()=>{
        cy.visit("https://autotest.how/demo/tinymce");
        cy.frameLoaded("#tinymce_ifr");
        cy.iframe("#tinymce_ifr").clear().type("Iframe test{ctrl+a}");
        cy.get("[aria-label='Bold']").click();
        cy.iframe("#tinymce_ifr").should("contain","Iframe test");
    })
})