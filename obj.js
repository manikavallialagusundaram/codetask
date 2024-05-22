//how to compare two JSON have the same properties without order 
//let obj1 = {name:"person1",age:'5'};
////let obj1 = {age:'5',name:"person1"};

let obj1 = {
    name:"person1",
    age:'5',
}
let obj2 = {
    age:'5',
    name:"person1",
}
let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);
let compare1 = ([...str1].sort().join(' '));
let compare2 = ([...str2].sort().join(' '));
if(compare1===compare2) 
    {
        console.log("objects are equal");
    }else{
        console.log("objects are not equal");
    }
