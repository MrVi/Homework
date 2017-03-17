
function sum(value,seed){
    seed = seed || 0;
    if (value != undefined) {
        return function (v1){
            return sum(v1, seed + value);
        }
    }
    else {
        return seed;
    }
}
alert(sum(1)(6)());

/*
function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
*/
