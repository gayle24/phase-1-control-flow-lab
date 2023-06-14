function scuberGreetingForFeet(distance){
  // Write your code here!
  let cost
  if (distance <= 400) {
    cost = "This one is on me!";
  }  
  else if (distance > 2000 && distance <= 2500) {
    cost = "I will gladly take your thirty bucks."
  }
  else if (distance > 2500) {
    cost = "No can do.";
  }
  return cost
}

function ternaryCheckCity(destination){
  // Write your code here!
  return (destination="NYC" ? 'Ok, sounds good.' : "No go.");
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let grat
  switch(tip) {
    case "generous" : grat = "Thank you so much.";
    break;
    case "not as generous" : grat = "Thank you.";
    break;
    default : grat = "Bye.";
  } 
  return grat
}

