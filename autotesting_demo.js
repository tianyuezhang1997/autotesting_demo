import {Selector} from "testcafe";

fixture`New Fixture`.page`https://testing.tianyuezhang1997.site/party_horn/`;

test(`20211109 New Test`, async (t) => {
  await t
    .click(Selector("#button-wrapper button").withText("Show more"))
    .click(Selector("#button-wrapper button").withText("Show less"))
    .click(Selector("#button-wrapper button").withText("Show more"))
    .click(Selector("#button-wrapper button").withText("Show less"));
});
