describe('Creating a Tic Tac Toe Game', () => {
    it('should display the game', () => {
        cy.visit('http://localhost:3001/');

        cy.get('[data-testid="square-button"]').should("exist");
    });

});