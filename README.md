# timed-quiz
A timed quiz on JavaScript fundamentals that stores high scores.

pseudo: 

Upon pressing start
build question container, build question div, build answer buttons, add correct data value to right answer.

with event listener on quiz;
in global check if event target contains correct data 


When answer is clicked 
Then check if correct. Increase question index

If correct display next question and phrase correct”
If false display next question, display ‘incorrect’, redact time.

When time runs out
Display end screen, display score, display entry box for initials, display save button

When save is pressed
Save score to local storage, display top scores from local storage, display replay button

When replay button is clicked
Then display the start screen
