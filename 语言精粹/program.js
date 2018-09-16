document.writeln('Hello, world!');

Function.prototype.method = function (name, func) { 
    this.prototype[name] = func;
    return this;
}

var that = this;

// /*
// var rm_a = /a*/.match(s);
// */