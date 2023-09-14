class refinStep1 {

    fillCPF(leadPassager) {
        cy.get('input')
        .type(leadPassager.cpf)
    }
}

export default new refinStep1;