import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://tianyuezhang1997.github.io/autotesting_demo/index.html`;
    
test(`New Test`, async t => {
    await t
        .click('main recipe-card')    
        .click(Selector('main recipe-card').nth(1))
        .click(Selector('main recipe-card').nth(2))
        .click(Selector('#button-wrapper button').withText('Show more'))
});
