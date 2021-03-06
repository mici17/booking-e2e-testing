const SELECTORS = Object.freeze({
    HEADTITLE: '#when-you-book .settings-head__title__h2',
    SUBTITLE: '#when-you-book .settings-head__subheading',
    LABEL: '.settings-item__label',
    USERTITLE: '#user_title',
    FIRSTNAME: '#firstname',
    LASTNAME: '#lastname',
    PHONE: '#phone',
    EMAIL: '#email',
    CHANGEADDRESSBUTTON: '.settings-address__content .settings-control',
    ADDRESSFORM: '.settings-form--personal',
    ADDRESSINPUT: '.settings-form__label .settings-control',
    SAVEBUTTON: '.settings-form--personal .settings-control--blue-button',
    CANCELBUTTON: '.settings-form--personal .settings-control--button'
})

class ForWhenYouBookPageObjects {
    getHeadTitle() {
        return cy.get(SELECTORS.HEADTITLE)
    }

    getHeadSubtitle() {
        return cy.get(SELECTORS.SUBTITLE)
    }

    getLabel() {
        return cy.get(SELECTORS.LABEL)
    }

    getUserTitle() {
        return cy.get(SELECTORS.USERTITLE)
    }

    getFirstname() {
        return cy.get(SELECTORS.FIRSTNAME)
    }

    getLastname() {
        return cy.get(SELECTORS.LASTNAME)
    }

    getPhone() {
        return cy.get(SELECTORS.PHONE)
    }

    getEmail() {
        return cy.get(SELECTORS.EMAIL)
    }

    getChangeAddressButton() {
        return cy.get(SELECTORS.CHANGEADDRESSBUTTON)
    }

    getAddressForm() {
        return cy.get(SELECTORS.ADDRESSFORM)
    }

    getAddressInput() {
        return cy.get(SELECTORS.ADDRESSINPUT)
    }

    getSaveButton() {
        return cy.get(SELECTORS.SAVEBUTTON)
    }

    getCancelButton() {
        return cy.get(SELECTORS.CANCELBUTTON)
    }
}

export const ForWhenYouBookPo = new ForWhenYouBookPageObjects()