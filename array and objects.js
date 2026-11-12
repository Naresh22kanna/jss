//Array

let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);
console.log(numbers[4]);

numbers.push('hi');
console.log(numbers);

numbers.pop();
console.log(numbers);


numbers.shift();
console.log(numbers);

// Objects

let user = {
    name: "Naresh",
    age: 26
};

console.log(user.name);
console.log(user.age);

user.city='Madurai';
user.age='25';    
console.log(user);

let student = {
    name: "Ram",
    mark: 75,
    city: "Chennai"
};

console.log(student.name);
student.mark=90;
student.department='CS';
delete student.city;

console.log(student);

let employee = {
    name: "Kumar",
    age: 28,
    salary: 25000,
    city: "Madurai"
};
r1=Object.keys(employee);
console.log(r1);
r2=Object.values(employee);
console.log(r2);

console.log(r2.length);

r3=Object.entries(employee);
console.log(r3);

//Object assign
student = {
    name: "Ram",
    age: 22
};

 marks = {
    tamil: 80,
    english: 90
};

report=Object.assign({},student,marks);
console.log(report);

//Object Create

mobile = {
    call: function() {
        console.log("Calling...");
    }
};

brand=Object.create(mobile);

brand.name='Poco';

console.log(brand.name);
brand.call();

// This

 student = {
    name: "Arun",
    age: 22,

    show: function() {
       console.log(this.name);
       console.log(this.age);
    }
};

student.show();

//Construtor

function mobiles(brand,price){
    this.brand=brand;
    this.price=price;
}
user1= new mobiles("samsung",20000);
user2= new mobiles("Apple",100000);

console.log(user1);
console.log(user2);