var arr1=[9,6,4,3,2];
var arr2=[1,2,3,4,5];

var result = arr1.filter(function(n) {
    return arr2.indexOf(n) > -1;
});
alert(result);

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