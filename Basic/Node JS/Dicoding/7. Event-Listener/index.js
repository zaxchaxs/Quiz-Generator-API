const { EventEmitter } = require('events');

const myEmitter = new EventEmitter;


const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}.`);
};
const weedingDayEventListener = ({hope}) => {
    console.log(`Happy wedding day ya ca, ${hope}.`);
};
const onCacaEventListener = ({name, hope}) => {
    birthdayEventListener({name});
    weedingDayEventListener({hope});
}
myEmitter.on('cacaDay', onCacaEventListener);
myEmitter.emit('cacaDay', {name : 'Caca', hope: "semoga langgeng ya :)"});



function useUmbrella(color =  'black') {
    console.log(`I am using ${color} umbrella`)
}

function workFromAnywhere(place = 'home') {
    console.log(`I am working from anywhere, and now Im at ${place}`)
};



emitter.once('rain', workFromAnywhere); // Keyword once artinya fungsinya hanya dijalankan satu kali.
emitter.on('rain', useUmbrella);
emitter.on('banyakDuit', workFromAnywhere);

emitter.emit('rain')
emitter.emit('banyakDuit', 'bali');
emitter.emit('rain', 'blue');