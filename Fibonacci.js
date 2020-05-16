//Write a function to compute the Nth Fibonacci number

function fibonacci(n)
{ 
 var previousFib  = 0; 
 var currentFib   = 1; 
 var newFib;
 if(n<=0)
 {
   console.log("Enter Value greater than 0");
   return ;
 }

 if(n<=1)
 {
   return n;
 }
 else 
 for(var i = 2; i <= n; i++)
 { 
	newFib = previousFib + currentFib;
    	previousFib = currentFib;
	currentFib  = newFib;
 }
  return currentFib;
}
var number = prompt("Enter the Number to find the the fibonacci");
var result = fibonacci(number);
console.log("The " + number + "th fibonacci Number is : " + result);
