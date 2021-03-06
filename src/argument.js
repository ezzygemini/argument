const cache = {};
const prefix = '[ENV]';

/**
 * Logs the value of the argument and returns it for future use.
 *
 * @param {string} name The name of the argument expected.
 * @param {*} value The value of the argument.
 * @param {*} defaultValue The default value expected.
 * @returns {*}
 */
const log = (name, value, defaultValue) => {
  cache[name] = value;
  if (!process.env.HIDE_ARGUMENTS) {
    console
      .info(`${prefix} ${name}: '${value}' (default: '${defaultValue || ''}')`);
  }
  return value;
};

/**
 * Searches the different ways of setting the arguments and logs it.
 *
 * @param {string|string[]} name The name of the argument.
 * @param {*=} defValue The expected value of the argument as default.
 * @returns {*}
 */
const argument = (name, defValue) => {

  if (typeof name !== 'string') {
    let value;
    for (let i = 0; i < name.length; i++) {
      value = argument(name[i], i === name.length - 1 ? defValue : undefined);
      if (value) {
        return value;
      }
    }
    return value;
  }

  // If we've looked before, simply return the value.
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }

  // If the argument is the same, there's no need to compute anything further.
  if (process.env[name]) {
    return log(name, process.env[name], defValue);
  }

  const uName = name.toUpperCase();
  const lName = name.toLowerCase();
  const args = [
    uName, lName, `-${name}`, `--${name}`,
    `-${uName}`, `--${uName}`, `-${lName}`, `--${lName}`
  ];

  let arg;
  let argv;
  let argReg;
  for (let i = 0; i < args.length; i++) {

    arg = args[i];

    // We look in the environment variables first.
    if (process.env[arg] !== undefined) {
      return log(arg, process.env[arg], defValue);
    }

    argReg = new RegExp(`(^-+${name}[=\\s].*$)|(^-+${name}$)`, 'i');

    // We look in the node variables next.
    argv = process.argv.find(a => argReg.test(a));
    if (argv) {
      return log(
        name,
        (argv.split(/[=\s]/)[1] || '').replace(/(^")|("$)/g, ''),
        defValue
      );
    }

  }

  if (!process.env.HIDE_ARGUMENTS) {
    console.info(
      `${prefix} ${name}: [not found], using default value '${defValue || ''}'`
    );
  }
  cache[name] = defValue;
  return defValue;

};

// If this was included in the browser,
// there's no need to look further when
// we know we won't find anything.
if (typeof window !== 'undefined') {
  module.exports = (name, defaultValue) => defaultValue;
} else {
  module.exports = argument;
}
