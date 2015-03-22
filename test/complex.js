var assert = require("assert")
var nester = require('../');

describe('nester', function() {
 var complexPath = 'a.b[3][""]["\\""]["\'"]["\n"]'
 var obj = {};
  describe('setting a complex value', function() {
    it('should set the value', function() {
      nester(obj, complexPath, '42');
      assert.equal(obj.a.b[3][""]['"']["'"]['\n'], 42);
    });
  });

  describe('getting a complex value', function() {
    it('should set the value', function() {
      nester(obj, complexPath, '42');
      assert.equal(nester(obj, complexPath), 42);
    });
  });

});
