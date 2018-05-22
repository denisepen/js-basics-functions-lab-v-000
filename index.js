// Code your solution in this file!
let distInBlocks;
let fbLocation = 42;
function distanceFromHqInBlocks(cust_location){
  
  distInBlocks = Math.abs(fbLocation - cust_location);
  return distInBlocks;
}

distanceFromHqInFeet(value){
  distanceFromHqInBlocks(value) *264
}