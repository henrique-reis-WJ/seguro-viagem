class residLongPage { 

    fillNum(address){

        cy.get('input[name="number"]')
        .type(address.number, {timeout:2000})

        cy.contains('button', 'Continuar')
        .click()
    }

    fillPeople(leadPass, prof) {

        cy.get('input[name="fullName"]')
        .type(leadPass.name)

        cy.get('input[name="birthDate"]')
        .type(leadPass.birthday)

        cy.get('.select__input-container')
        .click()
        .type('ASTROLOGO{enter}')

        cy.get('input[name="phone"]')
        .type(leadPass.phone)

        cy.get('input[name="email"]')
        .type(leadPass.email)

        cy.get('#sim')
        .click()
    }
    
    finishForm(){
        cy.contains('button', 'Confirmar')
        .click()
    }
  }

  export default new residLongPage;