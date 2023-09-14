class OtherPassager{

    fillOther(otherPass){
        cy.get('input[name="fullName"]')
        .type(otherPass.name,  {timeout:30000})

        cy.get('input[name="cpf"]')
        .type(otherPass.cpf)

        cy.get('input[name="birthday"]')
        .type(otherPass.birthday)

        cy.get('.select__control')
        .click()
        .type('Masculino{enter}')

        cy.get(`input[name="pep_personalUser"][value="${otherPass.pepOther}"]`)
        .click()

        cy.log(otherPass.pepOther)
    
        if(otherPass.pepOther == 'true') {
            cy.get(':nth-child(5) > .sc-dycYrt > .sc-lizKOf > .sc-hTUWRQ > .select__control')
            .click({force:true})
            .type('Es{enter}')
        }
    }

    originCoutry() {
        cy.get('input[name="from_brazil"][value="true"]')
        .click()
    }

    emergency(emergency){
        cy.get('input[name="emergency_principal"]')
        .click()
    }

    saveOther(){
        cy.contains('button', 'Salvar')
        .click()

        cy.get('h5 svg', {timeout:30000})
        .should('be.visible')

        cy.contains('button', "Continuar")
        .click()
    }

}

export default new OtherPassager;