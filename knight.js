function chessKnight(knightposition)
{
   var possibleCoordinates = [];
   var xvalue = parseInt(knightposition[0]); //Initial X positon
   var yvalue = parseInt(knightposition[1]); //Initial y position
   
   //Find all possible X Positions 
   var valid_X_positions = 
   [xvalue + 2, xvalue - 2, xvalue + 1, xvalue - 1].filter(function(x_coordinates)
    {
       return (x_coordinates > 0 && x_coordinates < 9);
    }
   )
   
   //Find all possible Y Positions
   var valid_Y_positions = 
   [yvalue + 2, yvalue - 2, yvalue + 1, yvalue - 1].filter(function(y_coordinates)
    {
       return (y_coordinates > 0 && y_coordinates < 9);
   })
   
 //We are now calculating the total x plus y distance of 3 as the knight can move a total distance of 3 horizontal plus vertical
   for (var i = 0; i < valid_X_positions.length; i++) {
       for (var j = 0; j < valid_Y_positions.length; j++) {
           if (Math.abs(xvalue - valid_X_positions[i]) + Math.abs(yvalue - valid_Y_positions[j]) === 3)
            {
               console.log('Possible Coordinates for a Knight: ', [valid_X_positions[i], valid_Y_positions[j]]);
               if (!possibleCoordinates.includes([valid_X_positions[i], valid_Y_positions[j]])) {
                   possibleCoordinates.push([valid_X_positions[i], valid_Y_positions[j]]);
               } 
           }
       }
   }
   console.log('Possible Coordinates:', possibleCoordinates);
   console.log('Possible Moves:', possibleCoordinates.length);
   return possibleCoordinates.length;
}
console.log("Enter the Coordinates for the initial position of Knight");
var x = prompt("Enter the X Coordinate ");
var y = prompt("Enter the y Coordinate ");
chessKnight([x,y]);