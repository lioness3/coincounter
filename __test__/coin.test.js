import {Amount, quarterCounter} from './../src/business.js';
describe('Amount', () => {
  const change = new Amount;
  test('should determine change in pennies needed', () => {
    expect(change.pennyCounter(.01)).toEqual(.01);
  });
  test('shoud determine nikles need', () => {
    expect(change.nickleCounter(.06)).toEqual(1);
  });
  // test('shoud determine dimes need', () => {
  //   expect(change.dimeCounter(.12)).toEqual(2);
  // });
  test('shoud determine quarters need', () => {
    expect(quarterCounter(.30)).toEqual(1);
  });
});
