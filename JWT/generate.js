var jwt = require('jsonwebtoken');

let private_key = "df25a92ea67de6e789926f1d00d9835c";

const create_token = (payload) => {
    let { username, password } = payload;
    // console.log("Payload to create the token", payload)
    let token = jwt.sign({ username, password }, private_key, {algorithm: 'HS256', expiresIn: '1hr'});
    console.log("This is your new token ----->", token)
    return token;
}

module.exports = {
    create_token,
}