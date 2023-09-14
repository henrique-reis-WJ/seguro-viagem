class refinStep2 {

    fillPeople(leadPass) {
        cy.get('input[name="name"]', {timeout:30000})
        .type(leadPass.name)
 
        cy.get('input[name="date"]')
        .type(leadPass.birthday)
    
        cy.get('input[name="motherName"]')
        .type(leadPass.nameMae)
    }


}

export default new refinStep2;