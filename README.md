#### 01 Introduction Modern JavaScript
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
#### This Key Work
```
// ES6 Fat Arrow Functions

var javascript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    this.libraries.forEach(function (a) {
      console.log(`${this.name} loves ${a}`);
    });
  },
};

javascript.printLibraries();
```
Output:
```
undefined loves React
undefined loves Angular
undefined loves Vue 
```
Here this.name not found

```
// ES6 Fat Arrow Functions

var javascript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    console.log(this);
    this.libraries.forEach(function (a) {
      console.log(`${this.name} loves ${a}`);
    });
  },
};

javascript.printLibraries();
```

Outout:
```
{
  name: 'JavaScript',
  libraries: [ 'React', 'Angular', 'Vue' ], 
  printLibraries: [Function: printLibraries]
}
undefined loves React
undefined loves Angular
undefined loves Vue
```

```
// ES6 Fat Arrow Functions

var javascript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    this.libraries.forEach(function (a) {
      console.log(this);
      console.log(`${this.name} loves ${a}`);
    });
  },
};

javascript.printLibraries();
```

Output:
```
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],       
  clearImmediate: [Function: clearImmediate],       
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
undefined loves React
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
undefined loves Angular
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
undefined loves Vue
```

```
// ES6 Fat Arrow Functions

var javascript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    this.libraries.forEach(function (a) {
      console.log(`${self.name} loves ${a}`);
    });
  },
};

javascript.printLibraries();
```

Output:
```
JavaScript loves React
JavaScript loves Angular
JavaScript loves Vue  
```

#### arrow function this keyword variable cann't changed

```
// ES6 Fat Arrow Functions

var javascript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    var self = this;
    this.libraries.forEach((a) => console.log(`${self.name} loves ${a}`));
  },
};

javascript.printLibraries();

```

Output:
```
JavaScript loves React
JavaScript loves Angular
JavaScript loves Vue  
```

Playground.js
```
const searchInput = document.querySelector(".search");

const display = document.querySelector(".result");

const thanks = document.querySelector(".thanks");

/* Normal Function that works perfectly */
function show() {
  display.innerHTML = this.value;
  var self = this;
  setTimeout(function () {
    thanks.innerHTML = `You have typed: ${self.value}`;
  }, 1000);
}

// const showme = () => {
//     display.innerHTML = this.value;
// };

searchInput.addEventListener("keyup", () => {
     display.innerHTML = this.value;
});

```