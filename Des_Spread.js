//array destructing
color=['red','blue','green'];
let [a,b,c] = color; 
console.log(a);
console.log(b);
console.log(c);

//object destructing
let user = {
    name : "hello",
    age  : 25
};
let { name, age} = user;

console.log(age);
console.log(name);

//changing variable names

let us={
    name: 'Pulsar',
    year: 2018
}
let {name:usname,year:usyear} = us;
console.log(usname);
console.log(usyear);

//spread operator array

const num=[1,2,3,4,5,6,7];
console.log(num);

const [one,two,three, ...numb]= num;
console.log(num);

//spread operator object

let use ={
    name:'naresh',
    age:'25',
        };

console.log(use);
let use1={
    ...use,
    city:'Madurai'
}
console.log(use1);

