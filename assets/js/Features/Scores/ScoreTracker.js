import { soundManager } from '../SoundEffects/SoundManager.js';

export class ScoreTracker
{
    /** @type {Number} */
    #_currentScore = 0;

    /** @type {Number} */
    #_currentStreak = 0;

    /** @type {Number} */
    #_targetScore;

    #_sections = document.querySelectorAll('main section');
    #_elEndGame = document.querySelector('#panel-end > p');

    constructor(targetScore)
    {
        this.#_targetScore = targetScore ?? 20;
        
        const buttons = {
            newGame: document.querySelector('#btnNewGame'),
            endGame: document.querySelector('#btnBack'),
        };

        buttons['newGame'].addEventListener('click', () => {
            this.#_sections.forEach(e => e.toggleDisplay());
            document.querySelector('#txtCurrentScore').innerHTML = "0";
            document.querySelector('#txtCurrentStreak').innerHTML = this.#_currentStreak;
        });
        
        buttons['endGame'].addEventListener('click', () => {
            window.location.href = "./";
        });
    }

    processResult(roll)
    {
        console.log('Roll:', roll);

        if (roll == 1) {
            console.log('Rolled a 1; Game Over!');
            this.#_onLoseGame();
            return;
        }

        this.#_currentScore += roll;

        if (this.#_currentScore > this.#_targetScore) {
            console.log(`Scored over ${this.#_targetScore}; You Win!`);
            this.#_onWinGame();
            return;
        }

        document.querySelector('#txtCurrentScore').innerHTML = this.#_currentScore;
    }

    #_onLoseGame()
    {
        this.#_currentScore = this.#_currentStreak = 0;
        soundManager.play('lose');
        this.#_elEndGame.innerHTML = "Game Over!";
        this.#_sections.forEach(e => e.toggleDisplay());
    }
    
    #_onWinGame()
    {
        this.#_currentScore = 0;
        ++this.#_currentStreak;
        soundManager.play('win');
        this.#_elEndGame.innerHTML = "You Win!";
        this.#_sections.forEach(e => e.toggleDisplay());
    }
}