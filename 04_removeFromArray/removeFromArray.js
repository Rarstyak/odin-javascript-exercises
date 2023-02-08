const removeFromArray = function(array, ...remove) {
    let value = array;
    let aLen = array.length;
    let rLen = remove.length;
    backScroll: for (let i = aLen - 1; i >= 0; i--) {
        for (let j = 0; j < rLen; j++) {
            if (value[i] === remove[j]) {
                console.log(`value: ${value}\narray[i]: ${array[i]}\nremove[j]: ${remove[j]}`);
                value.splice(i, 1);
                continue backScroll;
            }
        }
    }
    return value;
};

// Do not edit below this line
module.exports = removeFromArray;
