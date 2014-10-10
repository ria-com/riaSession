riaSession
====

## INSTALL


```js
var riaSession = require('riaSession');
app.use(riaSession);
```

## USAGE

## GET

```js
var sess = yield this.req.session.get('sess');
console.log('first sess-->',sess);
```

## SAVE

```js
var sess = yield this.req.session.save('sess',{'test':1});
var sess = yield this.req.session.get('sess');
console.log('new sess-->',sess);
```

## DESTOY

```js
var sess = yield this.req.session.destroy('sess');
var sess = yield this.req.session.get('sess');
console.log('after destroy sess-->',sess);
```