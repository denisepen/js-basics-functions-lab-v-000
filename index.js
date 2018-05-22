// Code your solution in this file!
let distInBlocks;
let distInFeet;
let fbLocation = 42;
// const fare = .02;

function distanceFromHqInBlocks(cust_location){

  distInBlocks = Math.abs(fbLocation - cust_location);
  return distInBlocks;
}

function distanceFromHqInFeet(location){
  distInFeet =  distanceFromHqInBlocks(location) *264;
  return  distInFeet
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end){
  distance = distanceTravelledInFeet(start, end);

  // if distance
}
