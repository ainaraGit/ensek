export class SaleConfirmedPage {

    saleConfirmedURL(amountBought, energyType, amountLeft){ 
        return `https://ensekautomationcandidatetest.azurewebsites.net/Energy/SaleConfirmed?amountBought=${amountBought}&energyType=${energyType}&amountLeft=${amountLeft}`
    }

    confirmedText(amountBought, energyType, amountLeft){
        return `\n        Thank you for your purchase of ${amountBought} units of ${energyType}\n\n        We have popped it in the post and it will be with you shortly.\n\n        There are now ${amountLeft} units of ${energyType} left in our stores.\n    `
    }

    buyMoreButton() {
        return cy.get('a[class="btn btn-default"]')
    }
    
    error() {
        return cy.get('h3')
    }
}
