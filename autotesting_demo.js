import { Selector } from 'testcafe';

fixture `Latest Fixture`
    .page `https://tianyuezhang1997.github.io/autotesting_demo/index.html`;
    
test(`Latest Test`, async t => {
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
    await t
        .click(Selector('footer a').withText('Explore - Speech Synthesis'))
        .typeText('main [name="text-to-speak"]', 'This is a testing message')
        .click('main [name="voice"]')
        .click(Selector('main option').withText('Google 日本語 (ja-JP)'))
        .click(Selector('main button').withText('Press to Talk'))
        .click(Selector('footer a').withText('Recipe Demo'))
    await t
        .click(Selector('#button-wrapper button').withText('Show more'))
        .click(Selector('#button-wrapper button').withText('Show less'))
        .click(Selector('footer a').withText('Explore - Speech Synthesis'))
        .click(Selector('footer a').withText('Recipe Demo'))
});
