// array map

 number =[1,2,3,5,6];
 result=number.map((nu)=> {
    return nu*2
});
console.log(number);
console.log(result);

 numbers =['gokul','sundar','viswa'];
 results=numbers.map((nu)=> {
    return nu.toUpperCase();
});
console.log(numbers);
console.log(results);

//Array filter

 number1 =[1,2,3,5,6,7,8];
 result=number1.filter((nu)=> {
    return nu%2==0;
});
console.log(number1);
console.log(result);
//----------------------------------
 
number1 =[91,82,53,35,16,17,38];
 result=number1.filter((nu)=> {
    return nu>50;
});
console.log(number1);
console.log(result);
//----------------------------------

//Array find

number1 =[91,82,53,35,16,17,38];
 result=number1.find((nu)=> {
    return nu<50;
});
console.log(number1);
console.log(result);
//----------------------------------

//Array reduce

 number =[1,2,3,5,6,7,8];
 result=number.reduce((total,num)=>{
    return total+num;
 },0)
 console.log(result);
