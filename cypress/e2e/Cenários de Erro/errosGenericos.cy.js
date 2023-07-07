describe('Cenários de erros genéricos', function () {

    beforeEach(function () {

        cy.intercept('POST', '*/rest/V1/porto/quotation.json', {
            statusCode: 400
        })

        cy.fixture('formsData').then(function (formsData) {
            this.leadPassager = formsData.leadPassager
            this.infosTravel = formsData.infosTravel
            this.address = formsData.address
            this.otherPassager = formsData.otherPassager
        })

        cy.visit('https://hub-dev.portoseguro.com.br/loja/travel_insurance/travel-form')
    })

    context('Erros Genéricos', function () {

        it.only("400-Bad Request", function () {
            cy.shortForm('0', 'true', 'be.enabled')
        })
        
        it("401-Não Autorizado", function () {

            cy.verifyStep('Informações da viagem')
            cy.shortForm('0', '1', 'be.enabled')
    
            cy.on('window:alert', function(text){
                expect(text).to.eq('ERROR NA API: Request failed with status code 500')
            })
        })

        it("403-Forbidden", function () {

            cy.verifyStep('Informações da viagem')
            cy.shortForm('0', '1', 'be.enabled')
    
            cy.on('window:alert', function(text){
                expect(text).to.eq('ERROR NA API: Request failed with status code 500')
            })
        })

        it("404-Not Found", function () {

            cy.verifyStep('Informações da viagem')
            cy.shortForm('0', '1', 'be.enabled')
    
            cy.on('window:alert', function(text){
                expect(text).to.eq('ERROR NA API: Request failed with status code 500')
            })
        })

        it("408-Timeout", function () {

            cy.verifyStep('Informações da viagem')
            cy.shortForm('0', '1', 'be.enabled')
    
            cy.on('window:alert', function(text){
                expect(text).to.eq('ERROR NA API: Request failed with status code 500')
            })
        })

        it("500-Internal Error", function () {

            cy.verifyStep('Informações da viagem')
            cy.shortForm('0', '1', 'be.enabled')
    
            cy.on('window:alert', function(text){
                expect(text).to.eq('ERROR NA API: Request failed with status code 500')
            })
        })
    })
})
