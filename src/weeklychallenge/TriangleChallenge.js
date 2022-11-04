

console.log(TriangalFit([1,1,1],[1,1,1]));
console.log(TriangalFit([1,1,1],[2,2,2]));
console.log(TriangalFit([1,2,3],[1,2,2]));
console.log(TriangalFit([1,2,4],[1,2,6]));


function checkValidation(tri) {
    if((tri[0] + tri[1] > tri[2]) && (tri[0] + tri[2] > tri[1]) && (tri[2] + tri[1] > tri[0])) {
        return true;
    } else {
        return false;
    }
    
}
function TriangalFit(triangle1, triangle2) {

    var tri1 = triangle1[0] + triangle1[1] + triangle1[2];
    var tri2 = triangle2[0] + triangle2[1] + triangle2[2];

  if(!checkValidation(triangle1) || !checkValidation(triangle2)) {
    return false;
  } else if(tri1 > tri2) {
    return false;
} 
    return true;
   
    
    
    }
    









