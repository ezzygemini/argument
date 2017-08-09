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

  it('should invoke multiple arguments until found', done => {
    expect(argument(['asdf123123', 'asdf123'], '123')).toBe('123');
    done();
  });

  it('should look into env properties', done => {
    process.env.TESTABC = '123';
    expect(argument('TESTABC')).toBe('123');
    done();
  });

  it('should look into argv as well', done => {
    process.argv.push('--test=123');
    expect(argument('test')).toBe('123');
    expect(argument('test')).toBe('123');
    done();
  });

});