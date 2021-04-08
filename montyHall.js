// takes in a boolean argument toSwitch. The program should return true if you win and false if you lose.

function playMontyHall(toSwitch) {

  let carIsIn = Math.floor(Math.random() * 3);

  let doorSelected = Math.floor(Math.random() * 3);

  let revealedDoor = [0,1,2].find((door) => door !== carIsIn && door !== doorSelected);

  if(toSwitch){
      return carIsIn === [0,1,2].find((door) => door !== doorSelected && door !== revealedDoor)
  }
  else {
      return carIsIn === doorSelected
  }

}

// test how well the player performs by switching or not switching.
function simulateGame(num, toSwitch) {

  let gamesWon = 0;

  for(let i = 0; i < num; i++){
      gamesWon += playMontyHall(toSwitch)
  }

  return gamesWon
}

console.log(simulateGame(1000, toSwitch = true));  // play 1000 times, switch the door. Print how many times won. 

console.log(simulateGame(1000, toSwitch = false));  // play 1000 times, don't switch the door. Print how many times won. 

/* Output of first line will be close to 667 while that of second will be close to 334. */ 
