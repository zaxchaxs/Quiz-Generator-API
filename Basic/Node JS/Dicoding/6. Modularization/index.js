const Wolf = require('./wolf');
const Tiger = require('./tiger');


const fighting = (tiger, wolf) => {
    if(tiger.strange > wolf.strange) {
        tiger.howl();
    } else {
        wolf.howl();
    }
};

const wolf = new Wolf();
const tiger = new Tiger();

fighting(tiger, wolf);