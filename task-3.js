class Storage {
  constructor(arr) {
    this.items = arr;
  }
  getItems() {
    return this.items;
  }
  addItem(items) {
    return this.items.push(items);
  }

  removeItem(items) {
    for (let i = 0; i < this.items.length; i += 1) {
      console.log(this.items[i]);
      if (items === this.items[i]) {
        return this.items.splice(i, 1);
      }
    }
  }
}

const storage = new Storage(["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"]);
console.log(storage);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]