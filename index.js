// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    return Math.abs(42 - pickup)
};
distanceFromHqInBlocks(50)
// returns the number of blocks from Hq on 42nd street

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264


};
distanceFromHqInFeet(50)
//Returns the number of feet from Scuber's headquarters to the pickup location.

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264

    // equals 2112
}
distanceTravelledInFeet(50,42)
//returns the number of feet traveled

function calculatesFarePrice(start, destination){
    if(distanceTravelledInFeet(start, destination) <= 400){
        return 0
    
    }else if(400 < distanceTravelledInFeet(start, destination) && distanceTravelledInFeet(start, destination) <= 2000){
        console.log (distanceTravelledInFeet(start, destination))
        return 0.02*(distanceTravelledInFeet(start, destination)- 400)
    
    }else if(2000 < distanceTravelledInFeet(start, destination) && distanceTravelledInFeet(start, destination) <= 2500){
        return (25)
    
    }else {return ('cannot travel that far')}

}
calculatesFarePrice(50,42)
//returns the fare for the customer