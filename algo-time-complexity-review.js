/////////// Prompt 1 ///////////
/////////// time complexity:  
function findMax(array){
  var max = -Infinity;
  for (var i = 0; i < array.length; i++){
    if (array[i] > max){
      max = array[i];
    }
  }
  return max; 
}
// O(n)
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************


/////////// Prompt 2 ///////////
/////////// time complexity: 
function contains(array, target){
  return array.indexOf(target) > -1;
}
// O(n)
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************



/////////// Prompt 3 ///////////
/////////// time complexity: 
function partialContains(array, target, start){
  return array.slice(start).indexOf(target) > -1;
}
// O(n)
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************



/////////// Prompt 4 ///////////
/////////// time complexity: 
function square(array){
  for (var i = 0; i < 3; i++){
    array[i] = array[i] * array[i];
  }
  return array;
}

// O(C)
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************




/////////// Prompt 5 ///////////
/////////// time complexity: 
function repeat(array){
  var repeat = [];
  for (var j = 0; j < 10; j++){
    repeat[j] = [];
    for (var i = 0; i < array.length; i++){
      repeat[j].push(array[i]);
    }
  }
  return repeat; 
}
//what if we replace 10 with a parameter? 

// O(n)
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************

/////////// Prompt 6 ///////////
/////////// time complexity: 
function gcf(num1, num2){
  if (num1 > num2){ //this ensures num1 is the smaller number
    var temp = num1;
    num1 = num2;
    num2 = temp;
  }
  for (var i = num1; i > 1; i--){
    if (num1 % i === 0 && num2 % i === 0){
      return i;
    }
  }
  return 1;
}
// O(n)
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************

/////////// Prompt 7 ///////////
/////////// time complexity: 
function countChar(string){
  var counts = {};
  var currChar, currCharCount;
  for (var i = 0; i < string.length; i++){ // n times
    currChar = string[i];
    currCharCount = 1;
    for (var j = i+1; j < string.length; j++){ // n - (i+1) times
      if (currChar === string[j]){
        currCharCount++;
      }
    }
    if (!counts.hasOwnProperty(currChar)){
      counts[currChar] = currCharCount;
    }
  }
  return counts;
}


// O(n^2)
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************

/////////// Prompt 8 ///////////
/////////// time complexity: 
var factorial = function(num){
  if (num < 0){
    return;
  }
  if (num === 0 || num === 1){
    return 1; 
  } else {
    return num * factorial(num-1);
  }
}

// O(n)
// try to create a tree to find out time complexity. 
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************

/////////// Prompt 9 ///////////
/////////// time complexity: 
function tournament(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    results = hotPotato(players); // this will be constant O(C)
    //assume hotPotato is a function where sets of
    //three players are teleported simultaneously
    //to a room with a potato. at the end of 5 minutes, 
    //the player in each room holding the potato is the winner 
    //and all winners get teleported to the results array 
    return tournament(results);
  }
}
// O(log(n))
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************
/////////// Prompt 10 ///////////
/////////// time complexity: 
function tournamentRedux(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    for (i = 0; i < players.length; i = i + 3){
      results.push(hotPotato([players[i], players[i+1], players[i+2]])); 
      //assume hotPotato is a function where 
      //the three players at a time must play hot potato for 5 minutes. 
      //the player in the room holding the potato is the winner
      //and gets returned from the function 
    }
    return tournament(results);
  }
}
// O(n/3*log(n))
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************
/////////// Prompt 11 ///////////
/////////// time complexity: 
function allPasswords(allowedChars, maxLength){
  var results = [];

  function findPassword(currentAttempt){
    if (currentAttempt.length > 0){
      results.push(currentAttempt.join(""));
    }
    if (currentAttempt.length <= maxLength){
      for (var i = 0; i < allowedChars.length; i++){
        findPassword(currentAttempt.concat(allowedChars[i]));
      }
    }
  }

  findPassword([]);
  return results;
}
// O(c^n) exponential
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************
/////////// Prompt 12 ///////////
/////////// time complexity: 
function findColor(quadTree, coordinates){
  //a quad tree is a tree where each node has 4 children 
  //or no children, usually used to divide a two-dimensional
  //space into coordinates
  //coordinates is an array [xpos, ypos]

  if (!Array.isArray(quadTree.color)){
    return quadTree.color;
  } else {
    var quadrant = findQuadrant(quadTree, coordinates); 
    if (quadrant === "NE") {
      return findColor(quadTree.color[0], coordinates);
    } 
    if (quadrant === "SE") {
      return findColor(quadTree.color[1], coordinates);
    }
    if (quadrant === "SW") {
      return findColor(quadTree.color[2], coordinates);
    } 
    if (quadrant === "NW") {
      return findColor(quadTree.color[3], coordinates);
    }
  }

  function findQuadrant(quadTree, coordinates){
    var y = (quadTree.coordinates.top + quadTree.coordinates.bottom)/2;
    var x = (quadTree.coordinates.left + quadTree.coordinates.right)/2;
    if (coordinates[0] > x){
      if (coordinates[1] > y){
        return "NE";
      } else {
        return "SE";
      }
    } else {
      if (coordinates[1] > y){
        return "NW";
      } else {
        return "SW";
      }
    }
  }
}







