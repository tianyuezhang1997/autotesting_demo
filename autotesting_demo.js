import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://tianyuezhang1997.github.io/autotesting_demo/index.html`;
    
test(`New Test`, async t => {
    await t
        .click(Selector('#button-wrapper button').withText('Show more'))    
        .click(Selector('#button-wrapper button').withText('Show less'))
        .click(Selector('#button-wrapper button').withText('Show more'))
        .click(Selector('#button-wrapper button').withText('Show less'))
});