var n=9;

alert("toString " + n.toString(2));
alert(find2Deg(n));

function find2Deg(n){
    var res = "";
    if (n > 1){
        res += find2Deg(Math.floor(n / 2));
    }
    return res + (n%2);
}