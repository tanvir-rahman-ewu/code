function parent() {
    var a = 10;


    function child() {
        let l = 10;
        
        console.log(a);
    }

    return child;
}

let a = parent();

a()

console.dir(a);