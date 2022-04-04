const names =['John','Sam','Peter'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length -1]);
//methods of array
names.push('suresh');
console.log('After push:'+names);
//push will add yhe items at the end
// ... is called as the spread operator
const names2 =[...names,'Raj'];
console.log('names2:' + names2);
names.unshift('poppy');
console.log('unshift:'+ names);
const names3 =['raj',...names];
console.log(names3);
//slice
const bikes =['bianchi','miele','panasonic','miyata'];
const b1 = [...bikes.slice(0,2)];
console.log(b1)
//slice takes 2 parameters
// it copies 2 values from index 0 and assigned to b1
const b2  =[...bikes.slice(2)];
console.log(b2); //From 3rd index
const newBikes=[
    ...bikes.slice(0,2),
    'benotto',
    ...bikes.slice(2)
];
console.log('newBikes:' + newBikes);
//new array called new bike is created .Then in index 0 and 1 values from bikes is copied using the slice
 
const bike =['bianchi','miele','panasonic','miyata','RE'];
const newBikes1 = [...bikes.slice(0,2)];
console.log(b1);
const newBikes2 =[
    ...newBikes.slice(0,2),
    ...newBikes.slice(4)
];
console.log('newBikes2: ' +newBikes2);
const indexOfSam = names.findIndex(names => names === 'Sam');
console.log('IndexOfSAM: ' + indexOfSam);

//function deleteName(names){
    //const indexOfSam1=names.findIndex(names=>names===names);
   // const nam=[...names.slice(0,indexOfSam1),...names.slice(indexOfSam1+1)];
   // console.log(names);

//
//deleteName('Peter');
//
function deleteName(nametodelete,names) {
    const indexOfname = names.findIndex(n => n === nametodelete);
    console.log('indexOf name to delete: ' + indexOfname);
    const newArray =[
        ...names.slice(0,indexOfname),
        ...names.slice(indexOfname +1)
    ];
    return newArray;
};
const deleteNames = deleteName('John',names);
console.log(deleteNames);
console.log(names);
/*
//const numbers =[1,2,3,4,5,6,7,8,9];
console.log(numbers);
//numbers.splice(3,2);
//console.log(numbers);
const pizzaSlice = numbers.slice(2,4);
console.log('pizzaSlices : ' + pizzaSlice);
//(method)Array<number>,slice(start)
console.log('Orginal Numbers: ' + numbers);
*/
/*
const number=[1,2,3,4,5,6,7,8,9];
//anytime you wnt to use a mutation method and Not mutate the orginal array
const numberReversed  = [...number].reverse();

number.reverse();
console.log(numberReversed);
*/

