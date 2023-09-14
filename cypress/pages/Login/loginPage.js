class loginPage {

    login(login){
        cy.get('input[name="cpf"]', {timeout:30000})
        .type(login.cpf)

        cy.contains('button', 'Continuar')
        .click()
        
        cy.get('#password', {timeout:30000})
        .type(login.passLogin)

        cy.contains('button', 'Continuar')
        .click()
    }

}

export default new loginPage;