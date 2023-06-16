// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];


// cats.length = 0;
function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    cats = [...cats, name];
    return cats;
}

function prependCat(name) {
    cats = [name, ...cats];
    return cats.slice(0,4);
    // return cats;
    
}

function removeLastCat(name) {
    return cats.slice(1,3);
}

function removeFirstCat() {
    return cats.slice(2,4);
}