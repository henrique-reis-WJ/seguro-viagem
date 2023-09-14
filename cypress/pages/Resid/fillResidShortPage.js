class residShortPage { 

  fillHome(address, homeOption, leadPassager){

    cy.get('input[name="cep"]')
    .type(address.cep)

    cy.get('div[data-gtm-type="form"]')
    .click()

    cy.get('.select__input-container')
    .click()
    .type('{downarrow}{enter}')

    cy.get('input[name="cpf"]')
    .type(leadPassager.cpf)

    cy.contains('button', 'Cotar seguro residencial')
    .click()
  }
  
}

export default new residShortPage;