# Solution:

1. We will create a Board of 9 boxes in a 3x3 grid.
2. Each box will have a value of either "X" or "O" or null.
3. We will create a GameInfo component that will display the current player and the game status.
4. A box value is set to "X" or "O" based on the turn on clicking the box
5. If the value for a box is already set, it cannot be changed.

## Key Functional Modules

### Toggle Marker values

- Values toggle with clicks
- const values [ 0 => X, 1 => O ]
- currentVal = 1 - prevValue

### Check for win conditions

- Get Values of required marker (X)
- Check of any of the winning combination numbers are present in the Required marker value.

### Check for draw conditions

### Check for game End

### Reset the Game

---

## Upcoming Features

1. Add Players (show names)
2. Do Toss to determine who plays first
3. Implement winning Sparkles
4. Add Realtime multiplayer
5. Play against computer or AI
6. Add Best of 3 with History
7. Add Scoreboard
8. Add Game Sounds
9. Add Game Animations
10. Write test cases
