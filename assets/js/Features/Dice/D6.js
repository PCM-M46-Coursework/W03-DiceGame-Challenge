import '../../Core/Extensions/Document.prototype.js';
import { soundManager } from '../SoundEffects/SoundManager.js';

export class D6
{
    #_stylesheet = document.getStylesheet("keyframe-animations.css");
    #_die = document.querySelector('#die');

    constructor(dieElementId)
    {
        this.#_die = document.querySelector(dieElementId);
    }

    roll(callback)
    {
        // Play the SFX.
        soundManager.play('roll');

        // Roll the die. Generate random number, with metadata.
        const { roll, xRot, yRot } = {
            1: { roll: 1, xRot: 0, yRot: 0 },
            2: { roll: 2, xRot: -90, yRot: 0 },
            3: { roll: 3, xRot: 0, yRot: -90 },
            4: { roll: 4, xRot: 0, yRot: 90 },
            5: { roll: 5, xRot: 90, yRot: 0 },
            6: { roll: 6, xRot: 180, yRot: 0 }
        }[this.#_getRandomInt(1, 6)];

        // Modify the keyframe animation, so that the die lands on the correct number.
        this.#_modifyAnimation(xRot, yRot);
    
        // Animate the die.
        this.#_die.style.animation = "roll 2s";

        // Remove the animation, when stopped, and pass the result to the callback method.
        this.#_die.addEventListener("animationend", () =>
        {
            this.#_die.style.animation = "";
            this.#_die.style.transform = `rotateX(${xRot}deg) rotateY(${yRot}deg)`;
            callback(roll);
        }, { once: true });
    }

    #_getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    #_modifyAnimation(xRot, yRot)
    {
        // Find the rule you want to modify
        for (let rule of this.#_stylesheet.cssRules)
        {    
            // Check if the rule is a keyframe animation rule
            if (rule.type !== CSSRule.KEYFRAMES_RULE && rule.name !== "roll") continue;
            
            // Modify the 0% and 100% keyframes to randomise the 
            // animation, and ensure it lands on the correct face.
            rule[0].style.transform = `rotateX(${this.#_getRandomInt(0, 720)}deg) rotateY(${this.#_getRandomInt(0, 720)}deg)`;
            rule[1].style.transform = `rotateX(${xRot}deg) rotateY(${yRot}deg)`;
        }
    }
}