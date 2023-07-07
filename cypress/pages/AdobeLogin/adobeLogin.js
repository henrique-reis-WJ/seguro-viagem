class AdobeLogin {

    adobeLogin(){ 
       cy.visit('https://d7d5-45-182-24-138.ngrok-free.app//content/commerce/travel_insurance/travel-product.html?wcmmode=disabled')
       cy.get('.ant-btn').click()

       cy.get('#username').type('admin')
       cy.get('#password').type('admin')
       cy.contains('button', 'Conectar').click()
    }
    
}

export default new AdobeLogin;