var arr1=[9,6,4,3,2];
var arr2=[1,2,3,4,5];

//Var1
var result = arr1.filter(function(n) {
    return arr2.indexOf(n) > -1;
});
alert(result);

//Var2

var arr1=[9,6,4,3,2];
var arr2=[3,4,1,5,2];
var result=[];

arr1.sort();
alert(arr1);

function BinarySearch(t,A){
    var i = 0, j = A.length, k=0;
    while (i < j) {
        k = Math.floor((i+j)/2);
        if (t <= A[k]) {j = k;}
        else {i = k+1;}
    }
    return ((A[ i ] === t) ? i: -1);
}

for (var i=0;i<arr2.length; i++){
    console.log(BinarySearch(arr2[i], arr1));
    if (BinarySearch(arr2[i], arr1) >= 0){
        result.push(arr2[i]);
    }
}

alert("res" + result);
//Var3
function IntersecArrays(A,B) {
    var  c = 0, C = [];
    for (var i = 0; i < A.length; i++) {
        var j = 0, k = 0;
        while (B[j] !== A[ i ] && j < B.length) j++;
        while (C[k] !== A[ i ] && k < c) k++;
        if (j != B.length && k == c) C[c++] = A[ i ];
    }
    return C;
}
result = IntersecArrays(arr1,arr2);
alert(result);