const axios = require('axios');

const Req = async () => {
    let resp = await axios.post('http://localhost:8000/', {
        username: "Elmer",
        lastname: "canelongo"
    });
    console.log(resp.status);
    console.log(resp.data);
}

Req();