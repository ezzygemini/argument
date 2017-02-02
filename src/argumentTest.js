const argument = require('./argument');

describe('argument', () => {

  it('should resolve a proper variable', done => {
    expect(argument('path')).toBeDefined();
    done();
  });

  it('should provide a default value when no argument is available', done => {
    expect(argument('some_invalid_environment_variable_94949', '%custom%'))
      .toBe('%custom%');
    done();
  });

});