
const { addItem, removeItem, getItems, clearList } = require('./shoppingListManager');

test('addItem should add an item to the list', () => {
    addItem('Milk');
    expect(getItems()).toContain('Milk'); // Expect the list to contain 'Milk'
});

test('removeItem should remove an item from the list by index', () => {
    addItem('Bread');
    removeItem(1);
    expect(getItems()).not.toContain('Bread'); // Expect the list not to contain 'Bread' after removal
});

test('removeItem should remove an item from the list by value', () => {
    addItem('Apple');
    removeItem('Apple');
    expect(getItems()).not.toContain('Apple'); // Expect the list not to contain 'Apple' after removal
});

test('clearList should return empty array after multiple additions', () => {
    addItem('Apple');
    addItem('Bread');
    addItem('Milk');
    clearList()
    expect(getItems()).toHaveLength(0);
})

test('getItems should return the array of items after multiple additions and removals', () => {
    addItem('Apple');
    addItem('Bread');
    addItem('Milk');
    removeItem('Apple');
    removeItem(0);
    expect(getItems()).not.toContain('Apple');
    expect(getItems()).not.toContain('Bread');
    expect(getItems()).toContain('Milk'); //Expect the list to contain 'Milk' only
})