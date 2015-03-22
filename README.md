# nester - A nested object getter/setter

[![Build Status](https://travis-ci.org/kolodny/nester.svg?branch=master)](https://travis-ci.org/kolodny/nester)


### Usage:

```js
var nester = require('nester');

var nestedObj = {a:{b:{c:{d:42}}}}
var res = nester(nestedObj, 'a.b.c.d'); // getting
console.log(res) // 42

nester(nestedObj, 'a.some.other.path[0]', 42); // setting
console.log(nestedObj.a.some.other.path[0]); // 42
```

### Testing:

```js
npm install
npm test
```

It lets you set and get some complex paths:

```js
nester(obj, 'a.b[3][""]["\\""]["\'"]["\n"]');
obj.a.b[3][""]['"']["'"]['\n'] === 42 // true
```
