// # Завдання 2

// // Виправ помилки, які будуть в консолі, щоб скрипт запрацював.


const inventory = {
    items: ["Knife", "Gas mask"],
    add(itemName) {
      console.log(`Adding ${itemName} to inventory`);
  
      this.items.push(itemName);
    },
    remove(itemName) {
      console.log(`Removing ${itemName} from inventory`);
  
      this.items = this.items.filter((item) => item !== itemName);
    },
  };
  
  const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
  };
  
  invokeInventoryAction("Medkit", (itemName) => inventory.add(itemName));
  // Invoking action on Medkit
  // Adding Medkit to inventory
  
  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
  invokeInventoryAction("Gas mask", (itemName) => inventory.remove(itemName));
  // Invoking action on Gas mask
  // Removing Gas mask from inventory
  
  console.log(inventory.items); // ['Knife', 'Medkit']
  
  