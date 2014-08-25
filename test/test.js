var assert = require("assert")
var nester = require('../');
var obj;
describe('nester', function() {
  beforeEach(function() {
    obj = {
      a: {
        b: {
          c: [
            41,
            {
              d: {
                '': [42]
              }
            }
          ]
        }
      }
    }
  });
  describe('getting value', function() {
    describe('when it exists', function() {
      it('should return that value', function() {
        assert.equal(nester(obj, 'a.b.c[1].d[""][0]'), 42);
      });
    })
    describe('when it doesn\'t exists', function() {
      it('should return undefined', function() {
        assert.equal(nester(obj, 'a.b.c[99].d[""][0]'), undefined);
      });
    });
  });

  describe('setting a value', function() {
    describe('when the path exists', function() {
      it('should set the value', function() {
        nester(obj, 'a.b.c', 'a new value');
        assert.equal(obj.a.b.c, 'a new value');
      });
    });
    describe('when the path doesn\'t exists', function() {
      it('should create the path and set the value', function() {
        nester(obj, 'a.b.c[2].x.y.z', 'another new value');
        assert.equal(obj.a.b.c[2].x.y.z, 'another new value');
      });
    });

  });

})