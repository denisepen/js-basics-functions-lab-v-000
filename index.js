// Code your solution in this file!
let distInBlocks;
let distInFeet;
let fbLocation = 42;
function distanceFromHqInBlocks(cust_location){

  distInBlocks = Math.abs(fbLocation - cust_location);
  return distInBlocks;
}

function distanceFromHqInFeet(location){
  distInFeet =  distanceFromHqInBlocks(location) *264;
  return  distInFeet
}
