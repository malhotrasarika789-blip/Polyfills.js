// Polyfill Function for -> forEach()

Array.prototype.customForEach = function (userFn){
    const originalArray = this;
    for(let i = 0; i < originalArray.length; i++){
        userFn(originalArray[i], i);
    }
};

const arr = [34, 67, 78, 90]
arr.customForEach((element) => console.log(element));

// Polyfill Function for -> map()

Array.prototype.customMap = function(userFn){
    const result = [];
    for(let i = 0; i < this.length; i++){
        const value = userFn(this[i], i);
        result.push(value);
    }
    return result;
};
const arr2 = [1,2,3,4];
const multi2 = arr2.customMap((ele) => ele * 2);
console.log(multi2);

// Polyfill function for -> Filter

Array.prototype.myOwnFilter = function (fn) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            arr.push(this[i])
        }
    }
    return arr;
}
const arrToBeFiltered = [2, 3, 4, 5, 6, 8, 12]

let arrFilter = arrToBeFiltered.myOwnFilter(num => num % 2 == 0);
console.log(arrFilter);

// Polyfill function for -> Reduce

Array.prototype.myOwnReduce = function (fn, startingValue) {
    let acc = startingValue;

    for (let i = 0; i < this.length; i++){
        acc = fn(acc, this[i])
    }
    return acc;
}

const arrToBeReduced = [2, 4, 3, 6, 8, 9, 10]
console.log(arrToBeReduced.myOwnReduce((acc, num) => acc + num, 0));

// Polyfill function for -> Flat

Array.prototype.myOwnArrayFlat = function () {
    let finalArray = [];
    for (let i = 0; i < this.length; i++) {
        if (!Array.isArray(this[i])) {
            finalArray.push(this[i])
        }else {
            let temp = this[i].myOwnArrayFlat();
            finalArray.push(...temp)
        }
    }
    return finalArray;
}

let arrayToBeFlat = [2, 3, 4, [1, 2, 3], [10, 20]]

let flatedArray = arrayToBeFlat.myOwnArrayFlat();

console.log(flatedArray);