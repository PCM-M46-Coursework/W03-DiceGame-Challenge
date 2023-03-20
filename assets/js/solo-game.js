import './Core/Extensions/Document.prototype.js';
import './Core/Extensions/Element.prototype.js';
import { ScoreTracker } from './Features/Scores/ScoreTracker.js';
import { D6 } from './Features/Dice/D6.js';

const die = new D6('#die');
const scoreTracker = new ScoreTracker();

document.querySelector('#btnRoll').addEventListener('click', function()
{
    this.triggerAttr('disabled', 2000);    
    die.roll(n => scoreTracker.processResult(n));
});