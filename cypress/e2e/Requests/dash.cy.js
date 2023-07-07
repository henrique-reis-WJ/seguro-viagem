import moment from 'moment/moment'

describe('Obter planos', function(){

        let dateStart = new Date()
        dateStart.setDate(dateStart.getDate())
        const dayStart = moment(dateStart).format('DD/MM/YYYY')

        let dateBack = new Date()
        dateBack.setDate(dateBack.getDate() + 7)  
        const dayBack = moment(dateBack).format('DD/MM/YYYY')

    context('Dado que quero contratar o serviço', function(){
        const shortInfo = {
            quotation: {
                scope: 'travel',
                travel: 
                {
                    destination: 'Brasil',
                    initial_date: dayStart,
                    ending_date: dayBack,
                    radical: 'false',
                    youngs: '1',
                    elders: '0'
                }
            }
        }

    it('preencho as informações corretamente', function() {
        cy.getToken(shortInfo)        
    })    

    it('recebo as propostas disponíveis', function(){
        cy.getProposal()
    })

    it.skip('quero fazer login', function(){
        cy.login()
    })
    
})

})
