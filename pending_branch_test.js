import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://tianyuezhang1997.github.io/autotesting_demo/index.html`;
    
test(`20211107 New Test`, async t => {
    await t
        .click(Selector('#button-wrapper button').withText('Show more'))    
        .click(Selector('#button-wrapper button').withText('Show less'))
        .click(Selector('#button-wrapper button').withText('Show more'))
        .click(Selector('#button-wrapper button').withText('Show less'))
        .click(Selector('footer a').withText('Expose - Party Horn'))
        .click('main [name="horn"]')
        .click(Selector('main option').withText('Air Horn'))
        .click('main [name="volume"]')
        .click(Selector('main button').withText('Play Sound'))
        .click('main [name="horn"]')
        .click(Selector('main option').withText('Car Horn'))
        .click(Selector('main button').withText('Play Sound'))
        .click('main [name="horn"]')
        .click(Selector('main option').withText('Party Horn'))
        .click(Selector('main button').withText('Play Sound'))
        .click(Selector('header a').withText('Pt 2. Explore'))
        .typeText('main [name="text-to-speak"]', 'T')
        .pressKey('capslock')
        .typeText('main [name="text-to-speak"]', 'his ia ')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText('main [name="text-to-speak"]', 's a testing message')
        .click('main [name="voice"]')
        .click(Selector('main option').withText('Google 日本語 (ja-JP)'))
        .click(Selector('main button').withText('Press to Talk'))
    await t
        .click(Selector('header a').withText('Pt 1. Expose'))
        .click(Selector('header a').withText('Pt 2. Explore'))
        .click(Selector('header a').withText('Pt 1. Expose'))
        .click(Selector('header a').withText('Pt 2. Explore'))
        .click(Selector('footer a').withText('Recipe Demo'))
        .click(Selector('footer a').withText('Explore - Speech Synthesis'))
        .click(Selector('header a').withText('Pt 1. Expose'))
        .click(Selector('header a').withText('Pt 2. Explore'))
        .click(Selector('footer a').withText('Recipe Demo'))
        .click(Selector('footer a').withText('Expose - Party Horn'))
        .click(Selector('footer a').withText('Recipe Demo'))
});
