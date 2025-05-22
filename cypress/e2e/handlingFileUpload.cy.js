describe("Handling file upload", () => {
    it("Single file upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile("upload1.txt");
        cy.get("#file-submit").click();
        cy.get('h3').should("contain", "File Uploaded!");
    })

    it("Upload file- rename", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({ filePath: "upload1.txt", fileName: "New name" });
        cy.get("#file-submit").click();
        cy.get('h3').should("contain", "File Uploaded!");
    })

    it("Drag n drop", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile("upload1.txt", { subjectType: "drag-n-drop" });
        cy.get("#file-submit").click();
        cy.get('h3').should("contain", "File Uploaded!");
    })

    it("Multiple file upload", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("#filesToUpload").attachFile(["upload1.txt", "upload2.txt"]);
        cy.get('#fileList > :nth-child(1)').should("contain", "upload1.txt");
        cy.get('#fileList > :nth-child(2)').should("contain", "upload2.txt");
    })

    it.only("Shadow dom file upload", () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile("upload1.txt");
        cy.get(".smart-item-name", { includeShadowDom: true }).should("have.text", "upload1.txt");
    })
})