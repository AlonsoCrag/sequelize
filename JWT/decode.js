var jwt = require('jsonwebtoken');

let private_key = "df25a92ea67de6e789926f1d00d9835c";

const decode_token = (token) => {
    let payload;
    try {
        payload = jwt.verify(token, private_key);
    } catch {
        return "Error, token expired"
    }
    return payload;   
}

module.exports = {
    decode_token
}