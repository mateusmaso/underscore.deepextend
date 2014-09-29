var chai = require("chai");
var _ = require("underscore");
_.mixin(require('../src/underscore.deepextend'));

describe("underscore.deepextend", function() {
  beforeEach(function() {
    this.object = {foo: {bar: 123}};
  });

  it("should extend normaly", function() {
    var object = _.deepExtend(this.object, {foo: 312});
    chai.expect(object.foo, "foo").to.equal(312);
  });

  it("should deep extend function", function() {
    var value = "";
    var object = _.extend(this.object, {
      fooBar: function() {
        return value += "foo";
      }
    });

    object = _.deepExtend(object, {
      fooBar: function() {
        return value += "Bar";
      }
    });

    chai.expect(object.fooBar()).to.equal("fooBar");
  });

  it("should deep extend object", function() {
    var foo = this.object.foo;
    var object = _.deepExtend(this.object, {foo: {bar: 321}});

    chai.expect(object.foo).to.equal(foo);
  });
});