import './commands'
import fillShortFormPage from '../pages/Viagem/ShortForm/fillShortFormPage'
import plans from "../pages/Plans/plansPage"
import fillLeadPassager from '../pages/Viagem/LongForm/fillLeadPassagerPage'
import fillOtherPassager from '../pages/Viagem/LongForm/fillOtherPassagerPage'
import residShortPage from '../pages/Resid/fillResidShortPage'
import fillResidLongPage from '../pages/Resid/fillResidLongPage'
import fillRefinStep2 from '../pages/Refin/fillRefinStep2'
import fillRefinStep3 from '../pages/Refin/fillRefinStep3'

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

Cypress.Commands.add('clickButton', function(buttonName) {
  cy.contains('button', buttonName)
  .click()
})

Cypress.Commands.add('shortForm', function(passAge, sportsStatus, btnStatus){

  fillShortFormPage.fillCountry()
  fillShortFormPage.fillConfirmOrigin()
  fillShortFormPage.fillDateTravelStart()
  fillShortFormPage.fillDateTravelBack()
  
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

Cypress.Commands.add('shortResid', function(addressResid, home, cpfResid) {

  residShortPage.fillHome(addressResid, cpfResid)
  
})

Cypress.Commands.add('longResid', function(numberResid, nameResid, profResid) {

  fillResidLongPage.fillNum(numberResid)
  fillResidLongPage.fillPeople(nameResid)
  fillResidLongPage.finishForm()

})

Cypress.Commands.add('step2Refin', function(infos) {

  fillRefinStep2.fillPeople(infos)

  cy.get('input[name="number"]')
  .type(address.number, {timeout:2000})
})

Cypress.Commands.add('step3Refin', function(infos) {
  fillRefinStep3.fillStep3
})
