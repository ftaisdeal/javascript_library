var dogs = ["Bulldog", "Beagle", "Labrador"];
var cats = ["Tabby", "Orange"];
var birds = ["Scrub Jay", "Prothonotary Warbler"];
var nums = [10, 6, 3, 5, 7, 1, 4];

dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
dogs.pop();                             // remove last element
dogs.push("Chihuahua");                 // add new element to the end
dogs[dogs.length] = "Chihuahua";        // the same as push
dogs.shift();                           // remove first element
dogs.unshift("Chihuahua");              // add new element to the beginning
delete dogs[0];                         // change element to undefined (not recommended)
dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
var animals = dogs.concat(cats, birds); // join two arrays (dogs followed by cats and birds)
dogs.slice(1, 4);                       // elements from [1] to [4-1]
dogs.sort();                            // sort string alphabetically
dogs.reverse();                         // sort string in descending order
nums.sort(function (a, b) { return a - b });   // numeric sort
nums.sort(function (a, b) { return b - a });   // numeric descending sort
highest = nums[0];                      // first item in sorted array is the lowest (or highest) value
nums.sort(function (a, b) { return 0.5 - Math.random() }); // random order sort