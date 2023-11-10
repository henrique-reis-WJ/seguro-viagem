class residLongPage { 

    fillNum(address){

        cy.get('input[name="number"]')
        .type(address.number, {timeout:2000})

        cy.contains('button', 'Continuar')
        .click()
    }

    fillPeople(leadPass) {

        cy.get('input[name="birthDate"]')
        .type(leadPass.birthday)

        cy.get('.select__input-container')
        .click()
        .type('ADESTR{enter}')

        cy.get('#sim')
        .click()
    }
    
    finishForm(){
        cy.contains('button', 'Confirmar')
        .click()
    }
  }

  export default new residLongPage;