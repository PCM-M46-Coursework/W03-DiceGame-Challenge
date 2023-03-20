import './Core/Extensions/index.js';
import { soundManager } from './Features/SoundEffects/SoundManager.js';
import { D6 } from './Features/Dice/D6.js';

const die = new D6('#die');

let currentScore = 0;
let targetScore = 0;
let winner = false;

// ======================================================================
//  Buttons
// ======================================================================
        
const buttons = {
    roll: document.querySelector('#btnRoll'),
    newGame: document.querySelector('#btnNewGame'),
    endGame: document.querySelector('#btnBack'),
    holdScore: document.querySelector('#btnHold'),
    continue: document.querySelector('#btnContinueToReach'),
};

buttons['newGame'].addEventListener('click', () => {

    console.log('Current Score:', currentScore);
    console.log('Target Score', targetScore);

    if (!winner) changePlayer();
    winner = false;
    currentScore = 0;
    targetScore = 0;
    currentState = states.set;
    refreshDisplay();
});

buttons['endGame'].addEventListener('click', () => {
    window.location.href = "./";
});

buttons['holdScore'].addEventListener('click', () => {
    currentState = states.hold;
    targetScore = currentScore;
    currentScore = 0;
    changePlayer();
    refreshDisplay();
});

buttons['continue'].addEventListener('click', () => {
    currentState = states.reach;
    refreshDisplay();
});

// ======================================================================
//  Players
// ======================================================================

let currentPlayer = 1;

const players = {
    1: { title: 'Player 1', bgColour: '#b33951', fgColour: '#700f22' },
    2: { title: 'Player 2', bgColour: '#3951b3', fgColour: '#0f2270' }
}

let player = players[currentPlayer];

function changePlayer()
{
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    player = players[currentPlayer];
    document.setCssVariable('--theme-bg-colour', player.bgColour);
    document.setCssVariable('--theme-colour', player.fgColour);
}

// ======================================================================
//  Game State
// ======================================================================

const states = {
    set:   { name: 'set', panels: ['dieRoll', 'setScore'] },
    hold:  { name: 'hold', panels: ['holdScore'] },
    reach: { name: 'reach', panels: ['dieRoll', 'reachScore'] },
    end:   { name: 'end', panels: ['endGame'] },
};

let currentState = states['set'];

// ======================================================================
//  Panels
// ======================================================================

const panels = {
    dieRoll: document.querySelector('#pnlDieRoll'),
    setScore: document.querySelector('#pnlSetScore'),
    holdScore: document.querySelector('#pnlHoldScore'),
    reachScore: document.querySelector('#pnlReachScore'),
    endGame: document.querySelector('#pnlEndGame'),
}

function refreshDisplay()
{
    document.querySelectorAll('span.playerName').forEach(e => e.innerText = player.title);
    document.querySelectorAll('.targetScore').forEach(e => e.innerText = targetScore);
    document.querySelectorAll('.currentScore').forEach(e => e.innerText = currentScore);
    panels.forEachProperty(function(entry) {
        const [key, panel] = entry;panel.hide();
        if (currentState.panels.includes(key)) panel.show();
    });
}

// ======================================================================
//  End Game
// ======================================================================

const elEndGame = document.querySelector('#panel-end > p.announcement');

function onWinGame()
{
    console.log('Rolled over the target number; You Win!');
    soundManager.play('win');
    elEndGame.innerHTML = `${player.title} Wins!`;
    winner = true;
    currentState = states.end;
}

function onLoseGame()
{
    console.log('Rolled a 1; Game Over!');
    soundManager.play('lose');
    elEndGame.innerHTML = `${player.title} Loses!`;
    winner = false;
    currentState = states.end;
}

// ======================================================================
//  Dice Rolling
// ======================================================================

function processResult(roll)
{
    console.log('Roll:', roll);

    if (roll == 1) {
        onLoseGame();
        return;
    }

    currentScore += roll;

    if (currentState.name === 'reach' && currentScore > targetScore) {
        onWinGame();
    }

    refreshDisplay();
}

buttons.roll.addEventListener('click', function()
{
    buttons.forEachValue(btn => btn.triggerAttr('disabled', 2000));    
    die.roll(n => processResult(n));
});

refreshDisplay();