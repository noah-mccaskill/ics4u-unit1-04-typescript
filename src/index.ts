/**
 * This program is based on a dice roll game.
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-09-30
 */

import promptSync from 'prompt-sync'
import random from 'random'

// Variables and constants for a dice and guess count
const prompt = promptSync()
let tries = 1
const dice = random.int(1, 6)
// input & process & output
while (true) {
  const numberInput = prompt('Pick a number (1-6): ')
  const player = parseFloat(numberInput)
  if (player > 6 || player < 1) {
    console.log('\nThat is not a valid number.')
  } else if (player === dice) {
    console.log('\nYou guessed correct!')
    console.log(`\nIt took you ${tries} tries.`)
    break
  } else if (player > dice) {
    console.log('\nYour guess was too high, try again.')
  } else if (player < dice) {
    console.log('\nYour guess was too low, try again')
  } else if (isNaN(player)) {
    console.log('\nThat is not a valid input.')
  }
  tries += 1
}
console.log('\nDone.')
