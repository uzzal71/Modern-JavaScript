```
function number() {
    return 10;
}
console.log(number());
```

```
let number = () => {
    return 10;
}
console.log(number());
```

```
let number = () => 10;
console.log(number());
```

```
let number = () => console.log(10);
number();
```

```
function number(n) {
    return n;
}
console.log(number(10));
```

```
let number = (n) => n;
console.log(number(10));
```

```
let number = n => n;
console.log(number(10));
```

```
let number = (a, b) => a + b;
console.log(number(10, 5));
```

```
let number = (a, b) => {
    // others stuffs
    return a + b;
}
console.log(number(10, 5));
```