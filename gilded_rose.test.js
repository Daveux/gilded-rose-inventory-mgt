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
    // Test that Aged Brie increases in quality
    it('should increase quality for Aged Brie', function() {
        const item = new Item('Aged Brie', 10, 20);
        const updater = createItemUpdater(item);
        updater.updateQuality();
        expect(item.sell_in).to.equal(9);      // Sell_in should decrease by 1
        expect(item.quality).to.equal(21);     // Quality should increase by 1
    });
    // Test quality increase for Backstage passes as concert approaches
    it('should increase quality for Backstage passes when sell_in is 10 or less', function() {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
        const updater = createItemUpdater(item);
        updater.updateQuality();
        expect(item.quality).to.equal(22);     // Quality should increase by 2 (10 days or less)
    });
    // Test quality increase for Backstage passes when sell_in is 5 or less
    it('should increase quality for Backstage passes when sell_in is 5 or less', function() {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
        const updater = createItemUpdater(item);
        updater.updateQuality();
        expect(item.quality).to.equal(23);     // Quality should increase by 3 (5 days or less)
    });

});