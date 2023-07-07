class PlansPage {

 

    selectPlan(){
        cy.contains('button', 'Quero este', {timeout:60000})
        .first()
        .click()
    }

}

export default new PlansPage;