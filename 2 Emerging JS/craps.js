module.exports = {

  craps: (roll, point) => new Promise((gameOver, rollAgain) => {

    // If roll is not sent as a number between 2 and 12, rollAgain
    if (!roll || typeof roll !== "number"  || roll < 2 || roll > 12) {
      rollAgain("to roll a number")

    // If a point is not set, then this must be the first roll, the come out roll
    } else if (!point) {

      // If you roll a 7 or 11 during the first role, gameOver, you loose
      if (roll === 7 || roll === 11) {
        gameOver("You win by natural")

      // If you roll a 2 or a 3, gameOver, you win
      } else if (roll === 2 || roll === 3) {
        gameOver("You lose, crapped out")

      // Otherwise the point is set, rollAgain
      } else {
        rollAgain(undefined,roll)
      }

    // It's not the first roll, and you rolled the point, gameOver. You win
    } else if (roll === point) {
      gameOver("You win, you hit the point!")

    // It's not the first roll
    } else {

      // And you rolled a 7, gameOver you loose
      if (roll === 7) {
        gameOver("You lose, craps")

      // Otherwise you missed, try again to hit the point
      } else {
        rollAgain(undefined,point)
      }
    }

  })
}
