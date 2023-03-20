import './Core/Extensions/index.js';
import { ScoreTracker } from './Features/Scores/ScoreTracker.js';
import { D6 } from './Features/Dice/D6.js';

const scoreTracker = new ScoreTracker();
const die = new D6('#die');

document.querySelector('#btnRoll').addEventListener('click', function()
{
    this.triggerAttr('disabled', 2000);    
    die.roll(n => scoreTracker.processResult(n));
});