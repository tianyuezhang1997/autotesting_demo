import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://tianyuezhang1997.github.io/autotesting_demo/index.html`;
    
test(`New Test`, async t => {
    await t
        .click(Selector('#button-wrapper button').withText('Show more'))    
        .click(Selector('#button-wrapper button').withText('Show less'))
        .click(Selector('#button-wrapper button').withText('Show more'))
        .click(Selector('#button-wrapper button').withText('Show less'))
        .click(Selector('footer a').withText('Expose - Party Horn'))
        .click('main [name="horn"]')
        .click(Selector('main option').withText('Air Horn'))
        .click(Selector('main button').withText('Play Sound'))
        .click('main [name="horn"]')
        .click(Selector('main option').withText('Car Horn'))
        .click(Selector('main button').withText('Play Sound'))
        .click('main [name="horn"]')
        .click(Selector('main option').withText('Party Horn'))
        .click(Selector('main button').withText('Play Sound'))
        .click(Selector('footer a').withText('Recipe Demo'))
});