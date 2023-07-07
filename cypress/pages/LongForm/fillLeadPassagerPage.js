
class LeadPassagerPage {

    fillPersonal(leadPass) {
        cy.get('input[name="fullName"]')
        .type(leadPass.name)

        cy.get('input[name="cpf"]')
        .type(leadPass.cpf)

        cy.get('input[name="birthday"]')
        .type(leadPass.birthday)

        cy.get('.select__control')
        .click()
        .type('Masculino{enter}')

        cy.get('input[name="cellphone"]')
        .type(leadPass.phone)

        cy.get('input[name="email"]')
        .type(leadPass.email)

        cy.get(`div[role="container-PepPersonalData"] input[value="${leadPass.pep}"]`)
        .click()
    
        if(leadPass.pep == 'true') {
            cy.get('div[role="container-PepPersonalData"] .select__control')
            .click()
            .type('{downarrow}{enter}')
        }
    }

    fillAddress(address) {
      
        cy.get('input[name="cep"]')
        .type(address.cep)

        cy.get('input[name="number"]')
        .type(address.number, {timeout:2000})
    }

    fillEmergency(emergency) {
        cy.get('input[name="emergency_name"]')
        .type('teste teste')

        cy.get('input[name="emergency_cellphone"]')
        .type(emergency.phone)
    }

    finishLead(){

        cy.get('#optout input')
        .click()

        cy.contains('button', 'Continuar')
        .click()
    }


}

export default new LeadPassagerPage;