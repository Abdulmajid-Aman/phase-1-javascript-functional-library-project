// Collection Functions

// myEach: Iterates over a collection and applies a callback function to each element.
function myEach(collection, callback) {
    // Convert collection to an array if it's an object
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  // myMap: Creates a new array with the results of calling a callback function on each element.
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (value, key, coll) => {
      result.push(callback(value, key, coll));
    });
    return result;
  }
  
  // myReduce: Reduces the collection to a single value using a callback function and an optional accumulator.
  function myReduce(collection, callback, acc) {
    let hasAcc = arguments.length > 2;
    myEach(collection, (value, key, coll) => {
      if (!hasAcc) {
        acc = value;
        hasAcc = true;
      } else {
        acc = callback(acc, value, coll);
      }
    });
    return acc;
  }
  
  // myFind: Finds and returns the first value that satisfies the predicate function.
  function myFind(collection, predicate) {
    let result;
    myEach(collection, (value, key, coll) => {
      if (predicate(value, key, coll)) {
        result = value;
        return false; // Exit early
      }
    });
    return result;
  }
  
  // myFilter: Returns an array of all values that pass the predicate function.
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (value, key, coll) => {
      if (predicate(value, key, coll)) {
        result.push(value);
      }
    });
    return result;
  }
  
  // mySize: Returns the number of elements in the collection.
  function mySize(collection) {
    let size = 0;
    myEach(collection, () => {
      size++;
    });
    return size;
  }
  
  // Array Functions
  
  // myFirst: Returns the first element or the first n elements of an array.
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  // myLast: Returns the last element or the last n elements of an array.
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // BONUS: mySortBy: Returns a sorted array based on the results of a callback function.
  function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
      const aVal = callback(a);
      const bVal = callback(b);
      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    });
  }
  
  // BONUS: myFlatten: Flattens an array of any depth or only one level if specified.
  function myFlatten(array, shallow = false, newArr = []) {
    array.forEach(item => {
      if (Array.isArray(item)) {
        if (shallow) {
          newArr.push(...item);
        } else {
          myFlatten(item, shallow, newArr);
        }
      } else {
        newArr.push(item);
      }
    });
    return newArr;
  }
  
  // Object Functions
  
  // myKeys: Returns an array of the object's own enumerable property names.
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues: Returns an array of the object's own enumerable property values.
  function myValues(object) {
    return Object.values(object);
  }
  

  // myFind: Finds and returns the first value that satisfies the predicate function.
function myFind(collection, predicate) {
    let result;
    // Check if collection is an array
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          result = collection[i];
          break; // Exit loop early
        }
      }
    } else { // Otherwise, it is an object
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key], key, collection)) {
            result = collection[key];
            break; // Exit loop early
          }
        }
      }
    }
    return result;
  }
  