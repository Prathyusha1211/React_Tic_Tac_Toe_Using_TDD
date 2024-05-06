describe('Creating a Tic Tac Toe Game', () => {
    it('should display the game', () => {
        cy.visit('http://localhost:3001/');

        cy.get('[data-testid="square-button"]').should("exist");

        cy.get('[data-testid="square-button"]').should("have.length",9);
    });

    it('should have all nulls in starting of the game', () => {
        cy.visit('http://localhost:3001/');

        cy.get('[data-testid="square-button"]').should("contain.text","");

    });



});

describe('Should handle the turns', () => {
    it('first player should be X', () => {
        cy.get('[data-testid="square-button"]').first().click();
        cy.get('[data-testid="square-button"]').should("contain.text","X");
    });
    it('Second player should be O', () => {
        cy.get('[data-testid="square-button"]').first().click();
        cy.get('[data-testid="square-button"]').eq(1).click();
        cy.get('[data-testid="square-button"]').eq(1).should("contain.text","O");
    });
    it('should not able to click on button more than once', () => {
        cy.get('[data-testid="square-button"]').eq(1).click();
        cy.get('[data-testid="square-button"]').eq(1).should("contain.text","O");
    });

});

describe('Handling the Winner', () => {
    it('should display X as Winner', () => {
        cy.visit('http://localhost:3001/');
        cy.get('[data-testid="square-button"]').first().click();
        cy.get('[data-testid="square-button"]').eq(1).click();
        cy.get('[data-testid="square-button"]').eq(4).click();
        cy.get('[data-testid="square-button"]').eq(2).click();
        cy.get('[data-testid="square-button"]').eq(8).click();
        cy.get('[data-testid="square-button"]').eq(8).should("contain.text","X");

    });
    it('should display O as Winner', () => {
        cy.visit('http://localhost:3001/');
        cy.get('[data-testid="square-button"]').first().click();
        cy.get('[data-testid="square-button"]').eq(1).click();
        cy.get('[data-testid="square-button"]').eq(6).click();
        cy.get('[data-testid="square-button"]').eq(4).click();
        cy.get('[data-testid="square-button"]').eq(8).click();
        cy.get('[data-testid="square-button"]').eq(7).click();
        cy.get('[data-testid="square-button"]').eq(7).should("contain.text","O");

    });
    it('should not able to click after winner declared', () => {
        cy.visit('http://localhost:3001/');
        cy.get('[data-testid="square-button"]').first().click();
        cy.get('[data-testid="square-button"]').eq(1).click();
        cy.get('[data-testid="square-button"]').eq(6).click();
        cy.get('[data-testid="square-button"]').eq(4).click();
        cy.get('[data-testid="square-button"]').eq(8).click();
        cy.get('[data-testid="square-button"]').eq(7).click();
        cy.get('[data-testid="square-button"]').eq(2).click();
        cy.get('[data-testid="square-button"]').eq(2).should("contain.text","");

    });

});