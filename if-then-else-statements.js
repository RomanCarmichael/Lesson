if (true) {
  console.log('Hello from IF_THEN')
}
//Hello earthlings

// if n1 is greater than both n2 and n3, n1 is the largest

// if n2 is greater than both n1 and n3, n2 is the largest

// if n3 is greater than both n1 and n2, n3 is the largest
 
// if (n1 == 3 || n1 == 103) {
//   console.log('n1 equals to 3 or 103')
// } else if (n1 == 4 || n1 == 104) {
//   console.log('n1 equals to 4 or 104')
// } else if (n1 == 10) {
//   console.log('n1 equals to 10')
// } else if (n1 == 15) {
//   console.log('n1 equals to 15')
// } else {
//   console.log('n1 is different');
// }


switch (n1) {
  case 3:  // n1 == 3
  case 103: // n1 == 103
    console.log('n1 equals to 3 or 103')
    break;
  case 4:  // n1 == 4
  case 104: // n1 == 104
    console.log('n1 equals to 4 or 104')
    break;
  case 10: // n1 = 10
    console.log('n1 equals to 10')
    break;
  case 15: // n1 = 15
    console.log('n1 equals to 15')
    break;
  default: // else => default 
    console.log('n1 is different');
}

console.log("We're out of SWITCH CASE")
