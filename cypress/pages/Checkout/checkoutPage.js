class checkoutPage {

    paymentButton() {
        cy.contains('button', 'Escolher forma de pagamento', {timeout:100000})
        .click()
    }

    cartData(cartao) {
        cy.get('#number')
        .type(cartao.nCartao)
        
        cy.get('input[placeholder="Nome"]')
        .type(cartao.nameTitular)

        cy.get('#cpf')
        .type(cartao.cpfTitular)

        cy.get('#validade')
        .type(cartao.validade)

        cy.get('#cvv')
        .type(cartao.cvv)
    }

    finishPurchase() {
        cy.contains('button', "Finalizar pagamento")
        .click()
    }

    sucessPage() {
        cy.get('.div__title', {timeout:30000})
        .contains('Sua solicitação foi concluída com sucesso!')
    }



}

export default new checkoutPage;