describe("testing my todo app", () => {
    it("visit my app", () => {
        cy.visit("/")
        // .list>li

        // cy.get(".list>li")
        cy.get('.list > :nth-child(1) >.done')
            .click()
            .should("have.class", "undone")
    })

    it("visit my app, click on multiple iteme", () => {
        cy.visit("/")
        // .list>li

        cy.get(".list>li > .done")
            .click({ multiple: true })
            .should("have.class", "undone")
    })


    // check if i can add a new todo
    it("visit my app, and add a new todo", () => {
        cy.visit("/")
        cy.get('input')
            .type("teach cypress")
        cy.get('#submit')
            .click()
        cy.get(".list>li ")
            .should("have.length", 5)
        //    .should("have.class", "undone")
    })

    // make sure input is not blank before submitting
    it("make sure input is not blank before submitting", () => {
        cy.visit("/")
        cy.get('input')
            .clear()
        cy.get('#submit')
            .click()
        cy.get(".list>li ")
            .should("have.length", 4)
        //    .should("have.class", "undone")
    })

    it(" submits a incorrect item, form rejects it, does not add it into the list", () => {
        cy.get('input').clear();
        cy.get("#submit").click();
        cy.contains('Error! Form Cannot Be Blank!');
    })
})