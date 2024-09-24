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