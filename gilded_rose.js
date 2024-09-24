// Original Item function (not changes)
function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

// Sample items list
var items = [
    new Item('Aged Brie', 10, 20),
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    new Item('Sulfuras, Hand of Ragnaros', 0, 80),
    new Item('Conjured Mana Cake', 3, 6),
    new Item('normal item', 5, 10)
];
class ItemUpdater {
    constructor(item) {
        this.item = item;
    }

    // Default behavior for regular items
    updateQuality() {
        if (this.item.quality > 0) {
            this.item.quality -= 1; // Decrease quality
        }
        this.item.sell_in -= 1; // Decrease sell_in

        // If sell_in is below 0, quality decreases twice as fast
        if (this.item.sell_in < 0 && this.item.quality > 0) {
            this.item.quality -= 1;
        }

        this.ensureQualityBounds();
    }

    // Ensure that quality is between 0 and 50
    ensureQualityBounds() {
        if (this.item.quality < 0) this.item.quality = 0;
        if (this.item.quality > 50) this.item.quality = 50;
    }
}
