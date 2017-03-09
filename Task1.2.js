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


