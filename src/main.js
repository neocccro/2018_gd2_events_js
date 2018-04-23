import Enemy from './enemy';


var enemyCounter = 0;
// we maken een 'instantie' aan van de Class Enemy


var currentEnemy = new Enemy(100);

// vervolgens gaan we luisteren of de endBoss schreeuwt dat hij dood gaat
currentEnemy.addListener('death',() => enemyDeath());

function enemyDeath()
{
  console.log('endBoss has died. Now I can spawn something else.');
  enemyCounter++;
  currentEnemy = new Enemy(Math.pow(1.1,enemyCounter)*100);
}

// je mag zo vaak luisteren als je wil
currentEnemy.addListener('death',() => console.log('endBoss has died. Lets update the HUD.'));

// nu gaan we net doen of we de endBoss 3x slaan
currentEnemy.getDamage(100);
