
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function chat(ds, datasets){

    const channel = ds.channel(datasets);
    const id_user = 123; // Dummy user - login user

    writeMsg (id_user, 456, channel);

    channel.subscribe(
        data => {
            if(data.data.id_receiver === 123){
                console.log("Usuario " + id_user + " recibiste un mensaje: ", data.data.msg);
                writeMsg (id_user, 456, channel)
            }
        },
        error => {
            console.log(error);
        },
        () => { 
            //readline.close()
        }
    );
}

function writeMsg(id_sender, id_receiver, channel){
    readline.question(`Escribe tu mensaje: `, (msg) => {
        let body = {id_sender: id_sender, id_receiver: id_receiver, msg: msg}
        channel.publish(body);
    });
}

module.exports = {
    chat: chat
}