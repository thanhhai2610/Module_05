let a: number = 0;
let b: number = 1;
let tam: number;

for (let i = 1; i < 10; i++) {
    console.log(a)
    tam = a+b;
    a=b
    b=tam;
}