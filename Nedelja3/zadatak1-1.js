// function maks(x,y,z){
//     return x > y ? ((x > z) ? x : z) : ((y > z) ? y : z);
// }

function maks(x, y, z) {
  if (x > y) {
    return x > z ? x : z;
  }
  else {
    return y > z ? y : z;
  }
}

console.log(maks(1, 20, 3));
