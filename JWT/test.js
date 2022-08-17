var jwt = require('jsonwebtoken');

key = "password_elmer123";
let expiresIn = 300
let token;

const sign = () => {
    let token = jwt.sign({user: "Alonso", pass: "123@"}, key, {algorithm: 'HS256', expiresIn: 120});
    console.log(token)
}

const decode = (token) => {
    let payload = jwt.verify(token, key)
    console.log(payload)
}

