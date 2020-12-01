describe ('Acessar pagina de erro se rota definida pelo usuario nao existir', () => {
    it('Acessar Pagina de erro', () => {
        cy.visit('http://localhost:4200/marcas/veiculos');
        cy.get('.Container > p:nth-child(1)').click();
       
        cy.contains('.Container > p:nth-child(1)', 'Houve um erro mas nao se desespera venha conhecer nossos veiculos')
        .should('be.visible')

    })

    it('Acessar Pagina de erro e retornar para pagina principal', () => {
        cy.visit('http://localhost:4200/marcas/veiculos');
        cy.get('.btn').click();
        cy.contains('span', 'Marcas').should( 'be.visible' );

    })

   

   
})