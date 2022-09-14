
import { EnergyBuyPage } from '../pageObject/energyBuy.page';

describe('Corner case scenarios for Buy Energy', () => {

  const energyBuyPage = new EnergyBuyPage();

  const url = 'https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy'

  const letters = 'abc';
  const float = 2.5
  const inputNotCorrectFormatError = 'Input string was not in a correct format.';

  const bigNumber = 50000000000000;
  const notInt32Error = 'Value was either too large or too small for an Int32.';
  beforeEach(() => {
    cy.visit(url);
    cy.url()
      .should('equal', url);

    energyBuyPage.resetButton().click();
  })


  it('Purchase Gas letters', () => {
    energyBuyPage.insertUnitsRequired(letters, 'Gas');
    energyBuyPage.buy('Gas');

    cy.url()
      .should('contain', url);

      cy.get('h1')
      .contains('Error');

    cy.get('h3')
      .contains(inputNotCorrectFormatError);
    
  })

  it('Purchase Electricity letters', () => {
    energyBuyPage.insertUnitsRequired(letters, 'Electricity');
    energyBuyPage.buy('Electricity');

    cy.url()
      .should('contain', url);

      cy.get('h1')
      .contains('Error');

    cy.get('h3')
      .contains(inputNotCorrectFormatError);
    
  })

  it('Purchase Oil letters', () => {
    energyBuyPage.insertUnitsRequired(letters, 'Oil');
    energyBuyPage.buy('Oil');

    cy.url()
      .should('contain', url);

      cy.get('h1')
      .contains('Error');

    cy.get('h3')
      .contains(inputNotCorrectFormatError);
    
  })

  it('Purchase Gas float', () => {
    energyBuyPage.insertUnitsRequired(float, 'Gas');
    energyBuyPage.buy('Gas');

    cy.url()
      .should('contain', url);

      cy.get('h1')
      .contains('Error');

    cy.get('h3')
      .contains(inputNotCorrectFormatError);
    
  })

  it('Purchase Electricity float', () => {
    energyBuyPage.insertUnitsRequired(float, 'Electricity');
    energyBuyPage.buy('Electricity');

    cy.url()
      .should('contain', url);

      cy.get('h1')
      .contains('Error');

    cy.get('h3')
      .contains(inputNotCorrectFormatError);
    
  })

  it('Purchase Oil float', () => {
    energyBuyPage.insertUnitsRequired(float, 'Oil');
    energyBuyPage.buy('Oil');

    cy.url()
      .should('contain', url);

      cy.get('h1')
      .contains('Error');

    cy.get('h3')
      .contains(inputNotCorrectFormatError);
    
  })

  it('Purchase Gas big number', () => {
    energyBuyPage.insertUnitsRequired(bigNumber, 'Gas');
    energyBuyPage.buy('Gas');

    cy.url()
      .should('contain', url);

      cy.get('h1')
      .contains('Error');

    cy.get('h3')
      .contains(notInt32Error);
    
  })

  it('Purchase Electricity big number', () => {
    energyBuyPage.insertUnitsRequired(bigNumber, 'Electricity');
    energyBuyPage.buy('Electricity');

    cy.url()
      .should('contain', url);

      cy.get('h1')
      .contains('Error');

    cy.get('h3')
      .contains(notInt32Error);
    
  })

  it('Purchase Oil big number', () => {
    energyBuyPage.insertUnitsRequired(bigNumber, 'Oil');
    energyBuyPage.buy('Oil');

    cy.url()
      .should('contain', url);

      cy.get('h1')
      .contains('Error');

    cy.get('h3')
      .contains(notInt32Error);
    
  })
})
