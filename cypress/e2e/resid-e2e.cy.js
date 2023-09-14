
describe('Dado que quero fazer a aquisição de seguro', function () {

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
        cy.visit('https://www.portoseguro.com.br/loja/seguro-residencial')
    })

    context('Sou um usuário sem cadastro', function () {

        it.only("Vou fazer uma cotação residencial", function () {
            
            cy.shortResid(this.address, 'Apartamento', this.leadPassager)
            cy.plans()
            cy.longResid(this.address, this.leadPassager)

            //checkoutPage.paymentButton()
            //loginPage.login(this.loginData)
            //checkoutPage.cart("Cartão de crédito")
            //checkoutPage.cartData(this.cartaoCredito)
            //checkoutPage.finishPurchase()
            //checkoutPage.sucessPage()
           
        })
    })
})
