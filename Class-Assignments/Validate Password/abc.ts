//Ateeb Ahmed Assignment: Validate Password

function validatepass(password){
    if(password.length < 8){
        return "Password must contain 8 characters"
    }

    if(!/[A-Z]/.test(password)) {
        return "Password must contain an uppercase letter";
    }
    if(!/[a-z]/.test(password)) {
        return "Password must contain an lowercase letter"
    }
    if(!/\d/.test(password)) {
        return "Password must contain a number letter"
    }

    if(!/[^a-zA-Z0-9]/.test(password)) {
        return "Password must contain at least one special character"
    }
    return "Password is Valid"
}

console.log(validatepass("teach"));
console.log(validatepass("teacher123@"));
console.log(validatepass("Teacher123"));
console.log(validatepass("Teacher123@"));
