# Week 03 - Dice Game Challenge

**Author:** Peter C. Matthews

This repository contains my submission for the [Master Coding](https://wearecodenation.com/2022/04/25/master-coding/) course at *CodeNation*.

## Brief

### 1 Player Game

These criteria must be met:
 - Roll the dice to begin the game.
 - The dice appears on the first roll.
 - When a dice is rolled, the score adds up.
 - Once the score passes 20, you win.
 - However, if you hit ‘1’ then you lose (if less than score of 20).
 - If the player won or lost, the player can start the game again.
 - You may want to change the score to any number other than 20

### 2 Player Game

These criteria must be met:
 - Click ‘New Game’ to begin.
 - Player 1 goes first. 
 - You can roll the dice however many times you wish.
 - In the ‘Current’ box, it gives you the current score as you roll the dice.
 - After each roll, player 1 may choose to ‘hold’ the score, which will then appear in the middle of player 1 as the total score so for
 - Player 2 begins to roll.
 - If the player hits ‘1’ without holding any score, the current score will reset, and the next player begins to roll again.
 - Once one of the players hits 20 or more score, that player wins!

 ## Implementation

I have produced a five page website for `DICE FRENZY!`, that emcompasses all areas of the project. I've made the game with retro styling, including 8-bit theme music, and sound effects.

 - `/index.html` - The landing page. A main menu that gives access to all the other pages.
 - `/rules.html` - Shows all the rules, for both versions of the game.
 - `/credits.html` - Displays the audio and visual attributions, for all assets used within the site.
 - `/solo-game.html` - The one player version of *Dice Frenzy!*
 - `/deathmatch.html` - The two player version of *Dice Frenzy!*

 ### Personal Stretch Goals

 - **Framework Code:** 
I'm using prototype methods in the same way I would usually use "extension methods" in C#; hiding boilerplate code, to make the business logic more streamlined.

 - **Front-End:** I have put a lot of effort into making the game visually, and aesthetically pleasing. From having a colour palette, and consistent layout/theme throughout the website, to custom artwork, animated backgrounds, and so on.

 - **CSS Animation:** I followed a tutorial to show how to create a spinning D6 die, using CSS, and JavaScript. From there, I was able to control, and randomise the animation, and ensure that it landed on the correct face, each time it is rolled.

 - **GitHub Flow:** As much as I can, I have tried to work with multiple branches, on GitHub. I've created new branches for each "feature" within the project. However, this is the part I found the hardest. I've not been sure where to put the little tweaks, and changes made to other files, when working in one branch. I've ended up just classing it as a part of the branch I'm in. I've found that it has slowed down my work a lot; not being able to work on other things, but it has made the project more manageable, in that I've had a clear vision of what I have to do next.

 ## Retrospective

I have left this project with work still to do. While the solo game has been converted from a script, to OOP classes, the deathmatch game mode has not. However, I did this on purpose, to show my working. In C#, I've always had the philosophy of "Make it work, then make it look pretty"; in terms of the code-flow. Once you have all the pieces, then you can discover patterns, and workflows that might have been more difficult to spot if you were working with multiple file from the start. Then, you can refactor, and contract everything down into re-usable chunks.

## Attribution

<section>
    <h3>Audio</h3>
    <ul>
        <li><strong>Home Page Chiptune: </strong>Funky Stars (Hybrid Song 2:20) - Quazar of Sanxion.
            Licensed as Public Domain under the <a href="https://modarchive.org/index.php?faq-licensing"
                target="_blank">Mod Archive Distribution license</a>.</li>
        <li><strong>Sound Effects: </strong>Foley by `schoman3`, and `Leszek Szary`. Licensed by Pixabay's <a
                href="https://pixabay.com/service/license/" target="_blank">Simplified Pixabay License</a>.
        </li>
    </ul>
</section>

<section>
    <h3>Visuals</h3>
    <ul>
        <li><strong>Website Icon: </strong>Generated with <a href="https://favicon.io"
                target="_blank">favicon.io</a>'s Emoji Favicon generator.</li>
        <li><strong>Dice Background Image: </strong>Stock image, licensed by Pixabay's <a
                href="https://pixabay.com/service/license/" target="_blank">Simplified Pixabay License</a>.
        </li>
        <li><strong>Dice Frenzy Logo: </strong>Created with <a href="https://cooltext.com/"
                target="_blank">Cool Text Graphics & Logo Generator</a>.</li>
        <li><strong>Die Spinning CSS: </strong>Initial tutorial created by <a
                href="https://www.youtube.com/watch?v=XTF5jXDr2H8" target="_blank">CODE WITH HOSSEIN</a>.
        </li>
    </ul>
</section>