let shoppingList = []

const addItem = (item) => {
    if (typeof item === 'string' && item.trim()) {
        shoppingList.push(item.trim())
    }
}

//Can filter by item value and index
const removeItem = (item) => {
    if (typeof item === 'string') {
        shoppingList = shoppingList.filter(value => value !== item)
    } else {
        if (item >= 0 && item < shoppingList.length) {
            shoppingList.splice(item, 1);
        }
    }

}

const getItems = () => {
    return shoppingList
}

const clearList = () => {
    shoppingList = []
}

module.exports = { addItem, removeItem, getItems, clearList }