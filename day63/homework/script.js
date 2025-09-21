// 1

const strings = (str, arr) =>{
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].includes(str)){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(strings("a", ["apple", "banana", "cherry", "date"]));

// 2


const sum = (nums) => {
    let total = 0;
    for(let i = 0; i < nums.length; i++){
        total += nums[i] / nums.length;
    }
    return total;
}


console.log(sum([1, 2, 3,]));


// 3

const password = (password) => {
    for(let i = 0; i < password.length; i++){
        if(password[i] >= '0' && password[i] <= '9'){
            return "password is strong"
        }
        if(password.length < 6){
        return "Password is Too Short Try again";
        }
        else{
            return 'The Password Must Contain numbers and letters.';
        }
    }
}

console.log(password("skdoenfnon"))