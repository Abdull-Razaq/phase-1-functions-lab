// Code your solution in this file!



function distanceFromHqInBlocks (distanceDiff) {
    //returns the number of blocks given a value
    if (distanceDiff<42){
      return(42-distanceDiff);
    }
    else {
  
    return(distanceDiff-42);
  }
  }


function distanceFromHqInFeet(distanceDiffInFeet) {
    
        return distanceFromHqInBlocks(distanceDiffInFeet) * 264;
    
}

function distanceTravelledInFeet(x, y) {
    
    if (y > x) {
        return((y-x) * 264);
        
    } else {
        return((x-y)*264);
    }
    
    
}

function calculatesFarePrice(start,destination){
    let distanceTravelled = distanceTravelledInFeet(start,destination);
    if (distanceTravelled<= 400){
      return 0;
    }
    if (distanceTravelled>=400 && distanceTravelled<=2000){
      return (distanceTravelled-400)* 0.02;
    }
    else if(distanceTravelled>=2000&& distanceTravelled<=2500){
      return 25;
    }
    else if (distanceTravelled > 2500){
      return "cannot travel that far";
    }
  }