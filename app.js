const express = require('express');
const bodyParser = require('body-parser');
const { sequelizeConnect, serverModel, userModel } = require('./SQL/sql');
const bcrypt = require("bcrypt")
var cors = require('cors')
let { create_token } = require('./JWT/generate');
let { decode_token } = require('./JWT/decode');



const app = express();
app.use(express.json());
app.use(cors())

app.post('/verify', async (req, resp) => {
    console.log("New POST request")
    console.log("Data", req.body);

    let {server_name, server_id} = req.body;

    await sequelizeConnect();
    
    // let server = serverModel.build({serverName: server_name, serverId: server_id, serverChannel: "009999"})
    // await server.save();
    
    let server = await serverModel.findOne({
        where: {
            serverId: server_id
        }
    });

    if (server == null) return resp.send('Error, not found')

    await sqlize.close();

    console.log("Server found", server.serverId, server.id);
    return resp.send(server.serverId);
});


app.post('/login', async (req, resp) => {
    console.log("BOdy in /login", req.body)
    let { username, password } = req.body;

    await sequelizeConnect();

    let user = await userModel.findOne({
        where: {
            username: username
        }
    });

    if (user == null) return resp.send('Error, not found')
    
    let hash = user.password;

    let userJson = user.toJSON();

    bcrypt.compare(password, hash)
    .then(async (res) => {
        // Generate a JWT
        let jwttoken = create_token(userJson);
        return resp.json({ status: `User logged: ${res}`, jwttoken });
    })
    .catch(async (err) => {
        return resp.send(`Error while trying to loggin`)
    });

});

app.post('/token', async (req, resp) => {
    console.log("Body in /checktoken", req.body);
    let { token } = req.body;
    let payload = decode_token(token)
    console.log("The payload was", payload);
    return resp.send(payload)
});

let port = 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));