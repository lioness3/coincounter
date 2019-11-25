import {Amount} from './../src/business.js';
describe('Amount', () => {
  test('should determine change needed', () => {
    let change = new Amount;
    expect(change.pennyCounter(.09)).toEqual(.09);
  });
});
