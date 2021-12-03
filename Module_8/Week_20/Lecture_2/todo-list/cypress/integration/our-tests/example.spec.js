
// start with a describe block
describe('lets have some fun times!', () => {
    // it block for particular test
    it('does something fun', () => {

        // visit the home page
        cy.visit('https://www.google.ca');
        // const googleInputSearchField = cy.get('input.gLFyf');
        // grab the input element
        cy.get('input.gLFyf')
        // cy.get('input.gLFyf')
            // type in search text
            // .type('supercalifragilisticexpialidocious', {delay: 500})
            .type('best coding {downarrow}{downarrow}{enter}', {delay: 500})
            // .type('best coding bootcamp{enter}')
            // state expectation
            cy.get('.main').contains('Lighthouse Labs')

    })
})



