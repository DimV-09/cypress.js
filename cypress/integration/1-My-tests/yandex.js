describe('Тестирование Yandex', function () {

    it('Yandex, проверка наличие картинок по запросу "котята"', function () {
        cy.visit('https://yandex.ru');
        cy.get('#text').type('Котята');
        cy.get('.search2__button > .button').click(); 
        cy.get('.main__center').contains('Картинки по запросу');
    })
})