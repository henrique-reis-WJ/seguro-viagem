class residShortPage { 

  fillHome(address, leadPass){

    cy.get('input[name="fullName"]')
      .type(leadPass.name)

    cy.get('input[name="email"]')
      .type(leadPass.email)

    cy.get('input[name="phone"]')
      .type(leadPass.phone)

    cy.get('input[name="cep"]')
    .type(address.cep)

    cy.get('.select__input-container')
    .click()
    .type('{downarrow}{enter}')

    cy.get('input[name="cpf"]')
    .type(leadPass.cpf)

    cy.contains('button', 'Cotar seguro residencial')
    .click()
  }

  
  
}

export default new residShortPage;