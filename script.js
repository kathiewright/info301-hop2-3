/* 
Project:  Hands-On Project 2-5
Author:
Date:
Purpose:  
*/


 function checkValues() {
      //local variables
      var x = 6;
      var y = 8;
      var z1, z2,z3;
      var result1, result2, result3;
   
       //REPLACE THE ZEROS WITH THE DISPLAYED CALCULATIONS
         z1 = 0;
         z2 = 0;
         z3 = 0;
      //Conditional statements to check the results and display a message in the corresponding text box      
         z1===432? result1="Correct!": result1="Try Again!";
         z2===-0.030959752321981424?result2="Correct!": result2="Try Again";
         z3===153.47500000000002? result3="Correct!": result3="Try Again!";
   
         document.getElementById("function1").innerHTML = result1;
         document.getElementById("function2").innerHTML = result2;
         document.getElementById("function3").innerHTML = result3;
      }
    
    //Click event listener to call the function
      document.getElementById("button").addEventListener("click", checkValues, false);
