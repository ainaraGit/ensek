export class EnergyBuyPage {
 
    navigateTo(url){ 
        return cy.visit(url);
    }

    getEnergyType(row, column) {
        return cy.get('table').find('tbody').find('tr').eq(row).find('td').eq(column).find('input')
    }

    insertUnitsRequired(units, energyType) {
        const column = {
            'Gas': 0,
            'Electricity': 2,
            'Oil': 3
        }[energyType];
       return this.getEnergyType(column, 3)
            .clear()
            .type(units)     
    }

   buy(energyType)
    {
        const column = {
            'Gas': 0,
            'Electricity': 2,
            'Oil': 3
        }[energyType];
        return this.getEnergyType(column,4)
            .click()     
    }

    resetButton()
    {
        return cy.get('[name="Reset"]')     
    }

    quantityAvailable(energyType) {
        const column = {
            'Gas': 0,
            'Electricity': 2,
            'Oil': 3
        }[energyType]
        return cy.get('table').find('tbody').find('tr').eq(column).find('td').eq(2)
    }
}
