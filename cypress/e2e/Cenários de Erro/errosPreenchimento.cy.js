describe('Erros de Preenchimento', function () {

    beforeEach(function () {

        cy.fixture('formsData').then(function (formsData) {
            this.leadPassager = formsData.leadPassager
            this.infosTravel = formsData.infosTravel
            this.address = formsData.address
            this.otherPassager = formsData.otherPassager
        })

        cy.visit('/')
    })

    context('Erros com idade', function () {

        it("Vou viajar sozinho", function () {

            cy.verifyStep('Informações da viagem')
            cy.shortForm(0, true, 'be.enabled')

            cy.wait(15000)

            cy.verifyStep('Planos')
            cy.plans('3')

            cy.verifyStep('Viajante principal')
            cy.longFormLead(this.leadPassager, this.address, 'be.enabled')

        })
    })
})