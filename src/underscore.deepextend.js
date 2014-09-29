(function(root, factory) {

  if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    _.mixin(require('underscore.catenate'));
    if (typeof module !== 'undefined' && module.exports)
      module.exports = factory(_);
    exports = factory(_);
  } else {
    root._.mixin(factory(root._));
  }

}(this, function(_) {

  return {
    deepExtend: function(object) {
      _.each([].splice.apply(arguments, [1]), function(source) {
        if (source) {
          for (var key in source) {
            if (_.isFunction(object[key]) && _.isFunction(source[key])) {
              object[key] = _.catenate(object[key], source[key]);
            } else if (_.isObject(object[key]) && _.isObject(source[key])) {
              object[key] = _.deepExtend(object[key], source[key]);
            } else {
              object[key] = source[key];
            }
          }
        }
      });

      return object;
    }
  };

}));