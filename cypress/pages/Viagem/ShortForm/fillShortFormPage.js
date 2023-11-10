import moment from 'moment/moment'
class ShortFormPage { 

    fillCountry() {
        cy.get('.select__control input', {timeout:50000})
        .click()
        .type('Brasil{enter}')

        cy.get('div[data-gtm-clicktype="chips-self"]')
        .should('be.visible')
        .contains('Brasil')
    }

    fillConfirmOrigin() {
        cy.get('#from_brazil input')
        .click()
    }

    fillDateTravelStart() {

        let dateStart = new Date()
        dateStart.setDate(dateStart.getDate())
        const dayStart = moment(dateStart).format('DD/MM/YYYY')

        cy.get('input[placeholder="Data de ida"]')
        .click()
        .type(dayStart, '{enter}')
    }

    fillDateTravelBack() {

        let dateBack = new Date()
        dateBack.setDate(dateBack.getDate() + 7)  
        const dayBack = moment(dateBack).format('DD/MM/YYYY')

        cy.get('input[placeholder="Data de volta"]')
        .click()
        .type(dayBack, '{enter}')

        cy.contains('button', 'Aplicar')
        .click()
    }

    fillPeopleCompanion() {    
        cy.get('button[aria-label="increase"]')
        .first()
        .click()
    }

    fillPeopleSenior() {     
        cy.get(':nth-child(2) > .sc-XMxGW > .sc-bgrQFw > .sc-ksNGjt > .sc-UnBNk')
        .click()
    }
    
    fillSports(status){
        cy.get(`input[name="radical_sport"][value="${status}"]`)
        .click()
    }

    verifyRestrict(resultado){
        cy.get('.sc-AHaJN')
        .should(resultado)
    }

    finishFill(btnStatus){
        cy.contains('button', 'Seguir com a cotação')
        .click()
    }
}

export default new ShortFormPage;