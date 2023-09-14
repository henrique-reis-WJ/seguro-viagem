import fillRefinStep1 from "../pages/Refin/fillRefinStep1"

describe('Dado que quero fazer a aquisição de seguro automovel', function () {

    beforeEach(function () {

        cy.fixture('formsData').then(function (formsData) {
            this.shortForm = formsData.shortForm
            this.leadPassager = formsData.leadPassager
            this.infosTravel = formsData.infosTravel
            this.address = formsData.address
            this.otherPassager = formsData.otherPassager
            this.loginData = formsData.loginData
            this.cartaoCredito = formsData.cartaoCredito
        })
        cy.visit('https://portoseguro.com.br/loja/auto-credito')
    })

    context('Sou um usuário sem cadastro', function () {

        it.only("Vou fazer uma cotação de automovel", function () {
            
            fillRefinStep1.fillCPF(this.leadPassager)
            cy.clickButton('Vamos lá')
           
            cy.step2Refin(this.leadPassager)
            cy.clickButton('Continuar')

            
        })
    })
})
