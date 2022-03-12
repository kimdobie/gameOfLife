const setSmallGridSize = () => {
  cy.get('#floatingInputRows').clear().type('10');
  cy.get('#floatingInputCols').clear().type('10');
  cy.get('#changeGridSizeButton').click();

  cy.get('#ChangeGridTypeSelect').select('empty');
  cy.get('#ResetGridTypeButton').click();
};

before(() => {
  cy.visit('/');
});

describe('My First Test', () => {
  it('starts with an empty grid', () => {
    cy.get('[data-testid="GridCell"]').should('have.length', 25 * 50);
    cy.get('[data-life="alive"]').should('have.length', 0);
    cy.get('[data-life="newborn"]').should('have.length', 0);
  });

  it('change grid size', () => {
    setSmallGridSize();
    cy.get('[data-testid="GridCell"]').should('have.length', 10 * 10);
  });

  it('Clicking on a cell changes its state', () => {
    setSmallGridSize();
    cy.get('[data-testid="GridCell"]')
      .first()
      .invoke('attr', 'data-life')
      .should('eq', 'dead');

    cy.get('[data-testid="GridCell"]')
      .first()
      .click()
      .invoke('attr', 'data-life')
      .should('eq', 'newborn');

    cy.get('[data-testid="GridCell"]')
      .first()
      .click()
      .invoke('attr', 'data-life')
      .should('eq', 'dead');
  });
  it('Clicking on next changes the grid', () => {
    // set up grid
    setSmallGridSize();
    cy.get('[data-testid="GridCell"]').each(($el) => {
      if (
        $el.data('row') === 1 &&
        $el.data('column') > 0 &&
        $el.data('column') < 6
      ) {
        cy.wrap($el).click();
      }
    });
    cy.get('[data-life="newborn"]').should('have.length', 5);
    cy.get('[data-life="alive"]').should('have.length', 0);
    cy.get('[data-testid="generation"]').contains('1');
    cy.get('[data-testid="nextButton"]').click();

    cy.get('[data-life="newborn"]').should('have.length', 6);
    cy.get('[data-life="alive"]').should('have.length', 3);
    cy.get('[data-testid="generation"]').contains('2');
  });
  it('Clicking start button, runs the simulation', () => {
    setSmallGridSize();
    cy.get('[data-testid="GridCell"]').each(($el) => {
      if (
        $el.data('row') === 1 &&
        $el.data('column') > 0 &&
        $el.data('column') < 6
      ) {
        cy.wrap($el).click();
      }
    });
    cy.get('[data-testid="generation"]').contains('1');
    cy.get('[data-testid="startButton"]').click();
    cy.get('[data-testid="generation"]').contains('10');
    cy.get('[data-testid="startButton"]').should('not.exist');
    cy.get('[data-testid="nextButton"]').should('not.exist');
    cy.get('[data-testid="stopButton"]').should('exist');
  });

  it('Clicking stop button, stops the simulation', () => {
    setSmallGridSize();
    cy.get('[data-testid="GridCell"]').each(($el) => {
      if (
        $el.data('row') === 1 &&
        $el.data('column') > 0 &&
        $el.data('column') < 6
      ) {
        cy.wrap($el).click();
      }
    });
    cy.get('[data-testid="startButton"]').click();
    cy.get('[data-testid="generation"]').contains('10');
    cy.get('[data-testid="stopButton"]').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get('[data-testid="generation"]').contains('10');
    cy.get('[data-testid="startButton"]').should('exist');
    cy.get('[data-testid="nextButton"]').should('exist');
    cy.get('[data-testid="stopButton"]').should('not.exist');
  });
  it('change in grid type stops simulation and changes the grid', () => {
    setSmallGridSize();
    cy.get('[data-testid="startButton"]').click();
    cy.get('[data-testid="generation"]').contains('10');
    cy.get('[data-life="alive"]').should('have.length', 0);
    cy.get('#ChangeGridTypeSelect').select('random');
    cy.get('[data-life="alive"]').should('not.have.length', 0);
    cy.get('[data-testid="generation"]').contains('1');
  });
});
/*

Things to test:

 
 - Change grid type - changes the grid
 - 

*/
