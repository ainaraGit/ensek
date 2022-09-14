
import { EnergyBuyPage } from '../pageObject/energyBuy.page';
import { SaleConfirmedPage } from '../pageObject/saleConfirmed.page';

describe('Buy energy tests', () => {

  const energyBuyPage = new EnergyBuyPage();
  const saleConfirmedPage = new SaleConfirmedPage();

  const url = 'https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy';

  const maxGas = 3000;
  const maxElectricity = 4322;
  const maxOil = 20;

  beforeEach(() => {
    cy.visit(url);
    cy.url()
      .should('equal', url);

    energyBuyPage.resetButton().click();
  })

  it('Purchase Gas', () => {
    const purchasedGas = 50;
    const remainingGas = maxGas -purchasedGas;
    energyBuyPage.insertUnitsRequired(purchasedGas,'Gas');
    energyBuyPage.buy('Gas');

    cy.url()
      .should('contain', saleConfirmedPage.saleConfirmedURL(purchasedGas, 'Gas', remainingGas));

    cy.get('h2')
      .contains('Sale Confirmed!');
    
    const displayedText = saleConfirmedPage.confirmedText(purchasedGas, 'Gas', remainingGas )

    cy.get('.well')
      .should('have.text',displayedText)

    saleConfirmedPage.buyMoreButton()
      .click();

    cy.url()
      .should('equal', url);

    energyBuyPage.quantityAvailable('Gas')
      .contains( remainingGas)

  })

  it('Purchase Electricity', () => {

    const purchasedElectricity = 60;
    const remainingElectricity = maxElectricity - purchasedElectricity;

    energyBuyPage.insertUnitsRequired(purchasedElectricity, 'Electricity');

    energyBuyPage.buy('Electricity');

    cy.url()
      .should('contain', saleConfirmedPage.saleConfirmedURL(purchasedElectricity, 'Electricity', remainingElectricity));

    cy.get('h2')
      .contains('Sale Confirmed!');

    const displayedText = saleConfirmedPage.confirmedText(purchasedElectricity, 'Electricity', remainingElectricity)

    cy.get('.well')
      .should('have.text',displayedText);
    
    saleConfirmedPage.buyMoreButton()
      .click();
    energyBuyPage.quantityAvailable('Electricity')
      .contains( remainingElectricity);

  })

  it('Purchase Oil', () => {
   
    const purchasedOil = 15;
    const remainingOil = maxOil - purchasedOil;
    
    energyBuyPage.insertUnitsRequired(purchasedOil, 'Oil');

    energyBuyPage.buy('Oil')

    cy.url()
      .should('contain', saleConfirmedPage.saleConfirmedURL(purchasedOil, 'Oil', remainingOil));

    cy.get('h2')
      .contains('Sale Confirmed!');

    const displayedText = saleConfirmedPage.confirmedText(purchasedOil, 'Oil', remainingOil)

    cy.get('.well')
      .should('have.text',displayedText);

    saleConfirmedPage.buyMoreButton()
      .click();

    energyBuyPage.quantityAvailable('Oil')
      .contains( remainingOil);
  })
})
