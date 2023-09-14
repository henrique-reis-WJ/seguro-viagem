class fillStep3Refin {
    
    fillStep3(address, leadPass) {
        cy.get('input[name="number"]', {timeout:2000})
        .type(address.number)

        cy.get('input[name="email"]')
        .type(leadPass.email)

        cy.get('input[name="notification"]')
        .type()
        .click()
}

}

export default new fillStep3Refin;