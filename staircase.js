// Complete the staircase function below.
function staircase(n) {

  for ( let i = 1; i <= n; i++ ) {
    console.log(" ".repeat(n - i)+ "#".repeat(i))   
  }  
}
staircase(6)

// A single integer, n , denoting the size of the staircase.

// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// Print a staircase of size  using # symbols and spaces.



const staircase = (n) => {
  let arr = [];
  for (let x = 0; x < n; x++) {
    arr.push(" ");
  }
  // Now we have an array of n with spaces
  for (x = n; x >= 0; x--) {
    arr[x] = "#";
    console.log(arr.join(""));
  }
};
staircase(100);
  