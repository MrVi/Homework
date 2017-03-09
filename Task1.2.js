for (var i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    }, 1000);
}

for (var i = 0; i < 10; i++) {
    setTimeout(out(i), 1000);
}
function out(i){
    console.log(i);
};

