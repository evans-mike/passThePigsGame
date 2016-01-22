/*
Index.html page displays rules.
  Include button to "Start."
  Open beginningPrompt
    Gather # of players, store in var.
    Gather Player 1-x and Names and store in var
  Player 1 "Name" prompt "To pass the pigs, do not enter anything, just Click 'OK'. If you wish to stop now, type 'N' or 'no' or 'stop'""
    If player clicks OK, alert with outcome and store results to the console var scorePlayer1.
    Print results to the page under Player 1 scoreboard.
    Then open new prompt "To pass the pigs..."
      If player rolls Pig Out OR Oinker alert turn ends and scorePlayer1 = 0.
        Open prompt for next player.
      If player rolls Piggyback, alert player is out of the game. Remove player from play.
    If player says 'N' or 'stop', open prompt for next player.
  Next player plays...
The first player to score >=100 points, alert Winner and alert End of Game.
*/
