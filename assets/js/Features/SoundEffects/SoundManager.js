class SoundManager
{
    #_sounds = {
        roll: new Audio('./assets/audio/roll.ogg'),
        win: new Audio('./assets/audio/win.ogg'),
        lose: new Audio('./assets/audio/lose.ogg')
    };
    
    constructor()
    {
        Object.values(this.#_sounds)
            .forEach(a => a.preload = 'auto');
    }

    play(soundName)
    {
        this.#_sounds[soundName].play();
    }
}

export const soundManager = new SoundManager();