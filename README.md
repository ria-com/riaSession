riaSession
=======

## Requirements

* [node.js](http://nodejs.org/), v0.11.13

## INSTALL


```js
   "dependencies": {
    ...
    "riaSession" : "git://github.com/ria-com/riaSession.git#master"
    ...
   }
```
```bash
    $ npm install
```
config.js
```js
    passport: {
        host: 'host to passport',
        auth: {
            'user': 'user',
            'pass': 'pass',
            'sendImmediately': false
        }
    }
```

```js
var riaSession = require('riaSession');
app.use(riaSession);
```

## Example

###  GET

```js
var sess = yield this.req.session.get('sess');
console.log('first sess-->',sess);
```

###  SAVE

```js
var sess = yield this.req.session.save('sess',{'test':1});
var sess = yield this.req.session.get('sess');
console.log('new sess-->',sess);
```

###  DESTOY

```js
var sess = yield this.req.session.destroy('sess');
var sess = yield this.req.session.get('sess');
console.log('after destroy sess-->',sess);
```