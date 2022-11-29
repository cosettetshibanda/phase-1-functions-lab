// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
 //returns the number of blocks given a value
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; 
// call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs((start-destination) * 264)
 //returns the number of feet traveled
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    }
    else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25
    }
    else if (distanceTravelledInFeet(start, destination)> 2500) {
        return 'cannot travel that far'
    }
    //returns the fare for the customer
  }