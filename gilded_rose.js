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

// AgedBrie updater (quality increases as it gets older)
class AgedBrieUpdater extends ItemUpdater {
    updateQuality() {
        this.item.quality += 1; // Aged Brie increases in quality as it gets older
        this.item.sell_in -= 1; // Decrease sell_in

        if (this.item.sell_in < 0) {
            this.item.quality += 1; // Increases twice as fast after sell_in
        }

        this.ensureQualityBounds(); // Ensure quality does not exceed bounds
    }
}
// Backstage passes updater (complex behavior based on sell_in)
class BackstagePassUpdater extends ItemUpdater {
    updateQuality() {
        if (this.item.sell_in <= 0) {
            this.item.quality = 0; // Quality drops to 0 after the concert
        } else if (this.item.sell_in <= 5) {
            this.item.quality += 3; // Increase by 3 when there are 5 or fewer days
        } else if (this.item.sell_in <= 10) {
            this.item.quality += 2; // Increase by 2 when there are 10 or fewer days
        } else {
            this.item.quality += 1; // Increase by 1 normally
        }

        this.item.sell_in -= 1; // Decrease sell_in
        this.ensureQualityBounds(); // Ensure quality does not exceed bounds
    }
}
// Sulfuras updater (no changes in sell_in or quality)
class SulfurasUpdater extends ItemUpdater {
    updateQuality() {
        // Sulfuras does not change its quality or sell_in, so nothing happens
    }
}

// Conjured items degrade twice as fast as normal items
class ConjuredItemUpdater extends ItemUpdater {
    updateQuality() {
        if (this.item.quality > 0) {
            this.item.quality -= 2; // Conjured items degrade twice as fast
        }
        this.item.sell_in -= 1; // Decrease sell_in

        if (this.item.sell_in < 0 && this.item.quality > 0) {
            this.item.quality -= 2; // Degrade twice as fast after sell_in
        }

        this.ensureQualityBounds(); // Ensure quality does not go negative or exceed 50
    }
}
// Factory function to determine the correct updater for each item
function createItemUpdater(item) {
    switch (item.name) {
        case 'Aged Brie':
            return new AgedBrieUpdater(item);
        case 'Backstage passes to a TAFKAL80ETC concert':
            return new BackstagePassUpdater(item);
        case 'Sulfuras, Hand of Ragnaros':
            return new SulfurasUpdater(item);
        case item.name.startsWith('Conjured') && item.name:  // Handle all conjured items
            return new ConjuredItemUpdater(item);
        default:
            return new ItemUpdater(item); // Normal items
    }
}
// Main function to update the quality of all items in the inventory
function update_quality() {
    items.forEach(item => {
        const itemUpdater = createItemUpdater(item); // Get the correct item updater
        itemUpdater.updateQuality(); // Call the updater's updateQuality method
    });
}
