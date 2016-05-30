'use strict';

const boat = require('../');

describe('boat', function() {

  it('.action ', function(done) {
    const fn = boat.action(function*(req, res){
      throw new Error('boom');
    }, (req, res, e) => {
      e.message.should.equal('boom');
      e.should.instanceof(Error);
      done();
    });

    fn({}, {});
  });
});