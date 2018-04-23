import EventEmitter from './utils/eventemitter.utils';

class Enemy extends EventEmitter {

    speed = 10;
    health;

    constructor(health = 100)
    {
        super();
        this.health = health;
    }

    getDamage(damage = 5){
        this.health -= damage;
        if(this.health <= 0){
            this.emit('death');
        }
    }
}

export default Enemy;
