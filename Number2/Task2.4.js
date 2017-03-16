function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}