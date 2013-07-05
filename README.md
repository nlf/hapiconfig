hapiconfig is a very small wrapper to facilitate use of getconfig in hapi.

##Usage

```javascript
var Hapi = require('hapi');
var pack = new Hapi.Pack();
pack.require('hapiconfig', function (err) {
  if (err) console.log('hapiconfig failed to load:', err);
});

console.log(pack.app.config); // the return from getconfig will be here
```
