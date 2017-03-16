for (var i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    }, 1000);
}

for (var i = 0; i < 10; i++) {
    f = function() {
        var y = i;
        return function() {
            setTimeout(function(){
                console.log(y); }, 1000); };
    }();
    f();
}

for (var i = 0; i < 10; i++) {
    setTimeout(out(i), 1000);
}
function out(i){
    console.log(i);
};

/*
 for (var i = 0; i < 10; i++) {
 (function(a) {
 setTimeout(function(){
 console.log(a);
 }, 1000);
 })(i);
 }
 */
/* for (var i = 0; i < 10; i++) {
 setTimeout(getTimerFunction(i), 1000);
 }

 function getTimerFunction(a) {
 return function() {
 console.log(a);
 }
 }
   */
/*
 for (let i = 0; i < 10; i++) {
 setTimeout(function(){
 console.log(i);
 }, 1000);
 }
 */
