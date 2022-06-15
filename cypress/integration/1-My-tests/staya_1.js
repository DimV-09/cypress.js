describe('Тестирование Stay', function () {


    it('Staya, авторизация на сайте, с правильными данными', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vdy@bk.ru');
        cy.get('.auth-form > form > [type="password"]').type('1Q2w3e4R');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.get('.profile').contains('Мои заказы');

    })
    it('Staya, авторизация на сайте, с правильными данными', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vdy@bk.ru');
        cy.get('.auth-form > form > [type="password"]').type('1refgjb3e4R');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.get('main').contains('Невозможно войти с предоставленными учетными данными.');
    })
})