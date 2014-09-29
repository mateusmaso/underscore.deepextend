underscore.deepextend [![Build Status](https://travis-ci.org/mateusmaso/underscore.deepextend.svg?branch=master)](https://travis-ci.org/mateusmaso/underscore.deepextend)
=====================
This library is an extension for Underscore which allows extending objects and functions.

## Features

* Deep extend objects and functions.

## Dependencies

* underscore.js (>= 1.5)
  * underscore.catenate

## Node

```javascript
var _ = require('underscore');
_.mixin(require('underscore.deepextend'));
```

## Examples

```javascript
var object = {foo: {bar: 123}};
object = _.deepExtend(object, {foo: {baz: 321}});

object.foo.bar == 123 // true
object.foo.baz == 321 // true
```

## License

Copyright (c) 2013-2014 Mateus Maso. Released under an MIT license.

