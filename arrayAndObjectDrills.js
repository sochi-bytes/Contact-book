function sumOfEven( numbers ){
    let sum = 0;
    for(number of numbers){
        if(number % 2 == 0){
        sum += number
        }
    }   
return sum
}
console.log(sumOfEven([1, 2, 3, 4, 5, 6]));

function groupByFirstLetter( words ){
    let grouped = {};
    for(word of words){
        let firstLetter = word[0].toUpperCase();
        if(!grouped[firstLetter]){
            grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(word);
    }
    return grouped;
}
console.log(groupByFirstLetter(['apple', 'banana', 'avocado', 'blueberry', 'cherry', 'zebra']));

function countOccurences(items){
    count = {};
    for(item of items){
        if(count[item]){
            count[item]++
        }else{
            count[item] = 1;
        }
    }
return count;
}
console.log(countOccurences(['apple', 'banana', 'avocado', 'blueberry', 'apple', 'cherry', 'zebra']));


function mergeObjects(a, b){
   let result = {};
   for(let object in a){
    result[object] = a[object];
   }
   for(let object in b){
    result[object] = b[object];;
   }
return result;
}
console.log(mergeObjects(
    {name: "Sochima", age: 20},
    { age: 25, city: "Abuja"}
))

function flatten(NestedArray){
   const result = []
   for (let arrays of NestedArray){
    if(Array.isArray(arrays)){
        const flattened = flatten
        (arrays);
        for(let value of flattened){
            result.push(value)
        }

    }else{
        result.push(arrays)
    }
   }
return result;
}
console.log(flatten([1, [2, 3], [4, [5]]]));

function removeDuplicates(items){
    return [...new Set(items)];
}
console.log(removeDuplicates([1,2,3,4,4,5,5,6]));

function removeduplicateswithoutset( items ){
    return items.filter((item, index) => {
        return items.indexOf(item) === index;
    })
}
console.log(removeduplicateswithoutset([1,2,3,4,4,5,5,6]));

function pick(object, keys){
    const result = {};
    for (let key of keys){
        if (key in object){
            result[key] = object[key];
        }
    }
    return result
}
console.log(pick({name: "Ella", age: 10}, ["name"]));

function deepGet(object, path){
    const parts = path.split(".");
    let current = object;
    for(let key of parts){
        if(current === undefined || current === null){
            return undefined;
        }
        current = current[key];
    }
    return current;
}
console.log(deepGet(
    {
        person: "Tobi",
         address: { 
            city: {
                names: "Abuja"
            }
        }
    },
    "address.city.names"))