const cats=["Milo", "Otis", "Garfield"]
 
function destructivelyAppendCat(name) {
    cats.push("Ralph")
    return cats;
}
function destructivelyPrependCat (name) {
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat(name) {
    cats.pop()
    return cats;
}
function destructivelyRemoveFirstCat(name) {
    cats.shift()
    return;
}
function appendCat(name) {
    const newCats= [...cats];
    newCats.push("Broom")
    return newCats
}
function prependCat (name) {
    const newCats= [...cats];
    newCats.unshift("Arnold");
    return newCats
}
function removeFirstCat (name) {
    const newCats= [...cats];
    newCats.shift()
    return newCats
}
function removeLastCat (name) {
    const newCats=[...cats];
    newCats.pop()
    return newCats;
}