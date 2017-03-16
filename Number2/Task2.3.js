var arr=[[1,2], [3,4,5], [6]];

var result = arr.reduce(function(sum, current) {
    return sum.concat(current);
});
alert(result.length);
alert(result);
for (var i=0; i < result.length; i++){
    console.log(i + " " + result[i]);
}