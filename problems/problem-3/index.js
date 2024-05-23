var val = true;

setTimeout(function () {
    val = false;
}, 3000)

while (val) {
    console.log('test');
}