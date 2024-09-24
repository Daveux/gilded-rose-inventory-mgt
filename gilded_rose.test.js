const { expect } = require('chai');

describe('Gilded Rose', function() {
// Test normal item quality and sell_in decrease
    it('should decrease quality and sell_in for normal items', function() {
        const item = new Item('normal item', 10, 20);
        const updater = createItemUpdater(item);
        updater.updateQuality();
        expect(item.sell_in).to.equal(9);      // Sell_in should decrease by 1
        expect(item.quality).to.equal(19);     // Quality should decrease by 1
    });
});