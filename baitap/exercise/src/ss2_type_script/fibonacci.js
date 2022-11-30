var a = 0;
var b = 1;
var tam;
for (var i = 1; i < 10; i++) {
    console.log(a);
    tam = a + b;
    a = b;
    b = tam;
}
