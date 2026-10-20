
//Example:1

let i: number = 1;// starting point
while (i <= 4) //stop point 
    {
    console.log(i); //1,2,3,4,5
    i++; // 2,3,4,5
}

console.log("----------------------");

// //Example:2
// // print 10......1

let j: number = 10;
while (j >= 1) {
    console.log(j); //10,9
    j--;
}

console.log("---------method-1-------------");


// //Example:3
//  //print even numbers from 1 to 10
// //method-1

let k: number = 2;
while (k <= 10) {
        console.log(k); //2,4,6,8,10
        k += 2; 
    }
  
    
    console.log("---------Method-2-------------");


// //method-2
let l: number = 1;
while (l <= 10) 
    {
    if (l % 2 == 0) {
        console.log(l);
    }
    l++;
}

    console.log("---------print odd number 1.........10-------------");

//Ex-4
//print odd number 1.........10

let m: number = 1;
while (m <= 10) {

        console.log(m);
        m+=2;
    }
    
    console.log("---------print 10 to 1 using decrement order-------------");

//Example:5
//print 10 to 1 using decrement order

let n: number = 10;
while (n >= 1) {
    console.log(n);
    n--;
}