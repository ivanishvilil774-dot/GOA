function myfunction(obj, key){
    return Object.hasOwn(obj, key); 
}

const student = { name: "Nika", age: 15 };

console.log(myfunction(student, "name"));
console.log(myfunction(student, "grade")); 

