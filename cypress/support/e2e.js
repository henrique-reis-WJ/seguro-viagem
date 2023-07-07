import './commands'
import fillShortFormPage from '../pages/ShortForm/fillShortFormPage'
import plans from '../pages/Plans/plansPage'
import fillLeadPassager from '../pages/LongForm/fillLeadPassagerPage'
import fillOtherPassager from '../pages/LongForm/fillOtherPassagerPage'


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  Cypress.on('uncaught:exception', (err, runnable, promise) => {
    if (promise) {
      return false
    }
  })

  const app = window.top;
  if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

Cypress.Commands.add('shortForm', function(passAge, sportsStatus, btnStatus){

  fillShortFormPage.fillCountry()
  fillShortFormPage.fillConfirmOrigin()
  fillShortFormPage.fillDateTravelStart()
  fillShortFormPage.fillDateTravelBack()

  if(passAge>0) {
    fillShortFormPage.fillPeopleCompanion(passAge)
  }
  
  fillShortFormPage.fillSports(sportsStatus)
  fillShortFormPage.finishFill(btnStatus)
})

Cypress.Commands.add('plans', function() {
  plans.selectPlan()
})

Cypress.Commands.add('longFormLead', function(passData, passAddres, bntEnable){
   fillLeadPassager.fillPersonal(passData)
   fillLeadPassager.fillAddress(passAddres)
   fillLeadPassager.fillEmergency(passData)
   fillLeadPassager.finishLead(bntEnable)
})

Cypress.Commands.add('longFormOther', function(otherData) {
  fillOtherPassager.fillOther(otherData)
  fillOtherPassager.originCoutry()
  fillOtherPassager.emergency()
  fillOtherPassager.saveOther()

})

Cypress.Commands.add('getToken', function(shortInfo, valueResponse) {
  cy.request({
    method: 'POST',
    url: 'https://integration-5ojmyuq-7ljgbfqqtgtmi.us-a1.magentosite.cloud/rest/V1/porto/quotation',
    body: shortInfo,
    failOnStatusCode: false
  }).then(function(response) {
    
    //if(response.status == 200) {
      expect(response.status).to.eq(200)
      Cypress.env('tokenProposta', JSON.stringify(response.body[0].token))
      cy.log(Cypress.env('tokenProposta'))
   // }

    //else if(response.status == 400) {
     // expect(response.status).to.eq(400)
    //  const bodyResposta = JSON.stringify(response.body.errors[0])
    //  expect(bodyResposta).to.contains('não há planos de ofertas disponívéis')
   // }

  })
})

Cypress.Commands.add('getProposal', function() {
  cy.request({
    method: 'POST',
    url: 'https://integration-5ojmyuq-7ljgbfqqtgtmi.us-a1.magentosite.cloud/graphql',
    body: {
      query: `
      query Quotation { 
        Quotation(token: ${Cypress.env('tokenProposta')}) {
        products{
            name,
            sku,            
            initial_date,
            ending_date,
            coverages,
            payments,
            passengers,
            destiny,
            budget_id,
            offer_id
          }
        }
      }`
    }
  }).then(function(responseProposal) {

    const propResponse = JSON.stringify(responseProposal.body)
    expect(propResponse).to.contains('Plano Viagem')
    console.log(responseProposal.body)
  })
})

Cypress.Commands.add('login', function() {
  cy.request({
    method: 'POST',
    url: 'https://integration-5ojmyuq-7ljgbfqqtgtmi.us-a1.magentosite.cloud/graphql',
    body: {
      mutation: `{
        generateCustomerToken(
          email: "rodrigo.coitim@webjump.com.br",
          password: "SEnha123!"
        ) {
          token
        }
      }
          }
        }
      }`
    }
  }).then(function(responseLogin) {
    console.log(responseLogin.body)
  })
})