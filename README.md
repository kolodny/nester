# nester - A nested object getter/setter


### Usage:

```js
var nester = require('nester');

var nestedObj = {a:{b:{c:{d:42}}}}
var res = nester(nestedObj, 'a.b.c.d'); // getting
console.log(res) // 40

nester(nestedObj, 'a.some.other.path[0]', 42);
console.log(nestedObj.a.some.other.path[0]); // 42
```

