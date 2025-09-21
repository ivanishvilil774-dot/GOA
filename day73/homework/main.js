//2

// let myPromise = new Promise(function(myResolve, myReject) {
// // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject();  // when error
// });

// 3

let promis = new Promise(function(Resolve, Reject){
  const nums = Math.floor(Math.random() * 11)

  if(nums > 3){
    Resolve(`${nums} is more than 3`)
  }else{
    Reject(`${nums} should be more than 3`)
  }
})

// 4

let promis2 = new Promise(function(resolve1,reject1){
  const orderReady = true

  if(orderReady){
    resolve1('Your order is ready')
  }else{
    reject1('Your order got declined')
  }
})

//5 

let promis3 = new Promise(function(resolve2,reject2){
  const age = 15;

  if(age >= 18){
    resolve2('You are adult')
  }else{
    reject2('You are not an adult')
  }
})

// 6

const form = document.getElementById("form1")
const from2 = document.getElementById("form2")

const users = []

class User {
  constructor(email,fullname,password){
    this.email = email;
    this.fullname = fullname,
    this.password = password
  }
}

form.addEventListener("submit", (e) =>{
  e.preventDefault()

  const email = form.email.value
  const fullname = form.fullname.value
  const password = form.password.value

  let exsistinEmail = false;
  for(let i = 0; i < users.length; i++){
    if(users[i].email === email){
      exsistinEmail = true;
      break
    }
  }

  if(exsistinEmail){
    alert("The email already registered")
    return
  }

  const newUser = new User(email, fullname, password);

  users.push(newUser)

  console.log(users)
})