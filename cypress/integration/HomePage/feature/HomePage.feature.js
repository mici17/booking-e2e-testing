import {
    GlobalPO
} from '../../shared/Global.po';
import {
    HomePagePo
} from '../pageObjects/HomePage.po';


describe('Home Page functionalty tests', () => {
    beforeEach(() => {
        HomePagePo.visit()
    })

    it('Should show dropdown menu when currency selector is clicked', () => {
        HomePagePo
            .getCurrencySelector()
            .click()

        HomePagePo
            .getDropdownValutes()
            .should('be.visible')
    })

    it('Should show language table when language selector is clicked', () => {
        HomePagePo
            .getLanguageSelector()
            .click()
        HomePagePo
            .getLanguageTable()
            .should('be.visible')
    })

    it('Should redirect to login page when sign in button is clicked', () => {
        HomePagePo
            .getLoginButton()
            .click()

        GlobalPO
            .getUrl()
            .should('include', '/account.booking.com/sign-in')
    })

    it('Should redirect to register page when register button is clicked', () => {
        HomePagePo
            .getRegisterButton()
            .click()

        GlobalPO
            .getUrl()
            .should('include', '/account.booking.com/register')
    })

    it('Should show suggestions when destination is entered', () => {
        HomePagePo
            .getDestinationInput()
            .type('Maldivi')

        HomePagePo
            .getDestinationList()
            .should('have.class', '-visible')
    })

    it('Should redirect to page sugesstions when destination is entered', () => {
        HomePagePo
            .getDestinationInput()
            .type('Maldivi {enter}')

        GlobalPO
            .getUrl()
            .should('include', '/searchresults')
    })

    it('Should show calendar when date input is clicked', () => {
        HomePagePo
            .getDateInput()
            .click()
        HomePagePo
            .getCalendar()
            .should('be.visible')
    })

    it('Should not show calendar when desired dates are clicked', () => {
        HomePagePo
            .getDateInput()
            .click()
        HomePagePo
            .getCalendar()
            .should('be.visible')
        HomePagePo
            .pickDate(15)
        HomePagePo
            .pickDate(25)
        HomePagePo
            .getCalendar()
            .should('not.be.visible')
    })

    it('Should show check in and checkout date when user picks it', () => {
        HomePagePo
            .getDateInput()
            .click()
        HomePagePo
            .pickDate(17)
        HomePagePo
            .pickDate(27)
        HomePagePo
            .getCheckInDate()
            .contains(17)
        HomePagePo
            .getCheckInDate()
            .contains(27)
    })

    it('Should show guests information table when input is clicked', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getGuestsInformationTable()
            .should('be.visible')
    })

    it('Number of adults can be increased on button click', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getAdultsPlusButton()
            .click()
        HomePagePo
            .getNumberOfAdults()
            .contains(3)
    })

    it('Number of adults can be decreased on button click', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getAdultsMinusButton()
            .click()
        HomePagePo
            .getNumberOfAdults()
            .contains(1)
    })

    it('Minus button should be disabled when number of adults is 1', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getAdultsMinusButton()
            .click()
            .should('be.disabled')
    })

    it('Minus button should be disabled when number of children is 0', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getChildrenMinusButton()
            .should('be.disabled')
    })

    it('Number of children can be increased on button click', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getChildrenPlusButton()
            .click()
        HomePagePo
            .getNumberOfChildren()
            .contains(1)
    })

    it('Should show input for children age when number of children is added', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getChildrenAgeContainer()
            .should('be.visible')
    })

    it('Should be able to enter age of child', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getChildrenAgeInput()
            .select('15')
    })

    it('Number of age inputs should be equal to number of children', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getChildrenAgeInput()
            .should('have.length', 1)
    })

    it('Number of children can be decreased on button click', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getChildrenMinusButton()
            .click()
        HomePagePo
            .getNumberOfChildren()
            .contains(0)
    })

    it('Number of rooms can be increased on button click', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getRoomsPlusButton()
            .click()
        HomePagePo
            .getNumberOfRooms()
            .contains(2)
    })

    it('Number of rooms can be decreased on button click', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getAdultsMinusButton()
            .click()
        HomePagePo
            .getNumberOfAdults()
            .contains(1)
    })

    it('Minus button should be disabled when number of rooms is 1', () => {
        HomePagePo
            .getGuestsInput()
            .click()
        HomePagePo
            .getRoomsMinusButton()
            .should('be.disabled')
    })

    it('Should give suggestions when data are entered', () => {
        HomePagePo
            .getDestinationInput()
            .type('Maldivi')
        HomePagePo
            .getDateInput()
            .click()
        HomePagePo
            .pickDate(15)
        HomePagePo
            .pickDate(25)
        HomePagePo
            .getSearchButton()
            .click()

        GlobalPO
            .getUrl()
            .should('include', '/searchresults')

    })

    it('Travel purpose checkbox input can be checked and unchecked when input is clicked', () => {
        HomePagePo
            .getTravelPurposeCheckbox()
            .check({
                force: true
            })
            .should('be.checked')

        HomePagePo
            .getTravelPurposeCheckbox()
            .uncheck({
                force: true
            })
            .should('not.be.checked')
    })


})