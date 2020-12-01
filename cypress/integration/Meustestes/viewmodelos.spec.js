describe ('Mostrar modelos apos escolher a marca e ocultar para escolher marca novamente', () => {
    it('Modelos ativos', () => {
        cy.visit('http://localhost:4200/marcas');
        cy.get('.header > h1').click();
        cy.get('tr:nth-child(1) button').click();
        cy.contains('.cardcontainermodelo span ', 'Modelos')
        .should('be.visible')

    })
    it('Modelos inativos ao clicar botao escolher marcas', () => {
        cy.visit('http://localhost:4200/marcas');
        cy.get('tr:nth-child(1) button').click();
        cy.get('.modelo').click();
        cy.contains('tr:nth-child(1) button ', 'ver modelos')
        .should('be.visible')
    })
})