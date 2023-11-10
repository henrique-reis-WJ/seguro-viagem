import checkoutPage from "../pages/Checkout/checkoutPage"
import loginPage from "../pages/Login/loginPage"

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
        cy.visit('https://portoseguro.com.br/loja/seguro-viagem')
    })

    context('Sou um usuário sem cadastro', function () {

        it.only("Vou viajar sozinho e não sou PEP", function () {

            cy.shortForm(false)
            cy.plans()
            cy.longFormLead(this.leadPassager, this.address)

            checkoutPage.paymentButton()
            loginPage.login(this.loginData)
            checkoutPage.cart("Cartão de crédito")
            checkoutPage.cartData(this.cartaoCredito)
            checkoutPage.finishPurchase()
            checkoutPage.sucessPage()

        })

        it("Vou viajar sozinho e sou um PEP", function () {

            this.leadPassager.pep = "true"

            cy.shortForm(0, true)
            cy.plans()
            cy.longFormLead(this.leadPassager, this.address)

            checkoutPage.paymentButton()
            loginPage.login(this.loginData)
            checkoutPage.cart("Cartão de crédito")
            checkoutPage.cartData(this.cartaoCredito)
            checkoutPage.finishPurchase()
            checkoutPage.sucessPage()

        })

        it("Vou viajar acompanhado de alguém de até 70 anos", function () {

            cy.shortForm(1, true, 'be.enabled')
            cy.plans()

            cy.longFormLead(this.leadPassager, this.address, 'be.enabled')
            cy.longFormOther(this.otherPassager, this.leadPassager)

            checkoutPage.paymentButton()
            loginPage.login(this.loginData)
            checkoutPage.cart("Cartão de crédito")
            checkoutPage.cartData(this.cartaoCredito)
            checkoutPage.finishPurchase()

        })

        it("Vou viajar acompanhado de alguém de até 70 anos e eu sou o PEP", function () {

            this.leadPassager.pep = "true"

            cy.shortForm(1, true, 'be.enabled')
            cy.plans()

            cy.longFormLead(this.leadPassager, this.address)
            cy.longFormOther(this.otherPassager, this.leadPassager)

            checkoutPage.paymentButton()
            loginPage.login(this.loginData)
            checkoutPage.cart("Cartão de crédito")

        })

        it("Vou viajar acompanhado de alguém de até 70 anos que é PEP", function () {

            this.otherPassager.pepOther = "true"

            cy.shortForm(1, true, 'be.enabled')
            cy.plans()

            cy.longFormLead(this.leadPassager, this.address,  this.otherPassager)
            cy.longFormOther(this.otherPassager, this.leadPassager)

            //checkoutPage.paymentButton()
            //loginPage.login(this.loginData)
            //checkoutPage.cart("Cartão de crédito")

        })

        it("Vou viajar acompanhado de alguém com mais de 70 anos", function () {

            this.otherPassager.birthday = '01011940'

            cy.shortForm(2, false, 'be.enabled')
            cy.plans()
            cy.longFormLead(this.leadPassager, this.address, 'be.enabled')
            cy.longFormOther(this.otherPassager)

        })

        
    })

})