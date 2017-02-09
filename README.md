# Argument
[![Build Status](https://travis-ci.org/ezzygemini/argument.svg?branch=master)](https://travis-ci.org/ezzygemini/argument)
[![Coverage Status](https://coveralls.io/repos/github/ezzygemini/argument/badge.svg?branch=master)](https://coveralls.io/github/ezzygemini/argument?branch=master)

This small lightweight library will 
help fetch arguments from the environment
or from the node arguments.

By requesting this library, you'll be able
to invoke:

```nodemon
const arg = require('argument');
arg('my_argument', 'default value');
```

This will look for an argument for:

- process.env.my_argument
- process.env.MY_ARGUMENT
- process.argv['-MY_ARGUMENT']
- process.argv['--MY_ARGUMENT']
- process.argv['-my_argument']
- process.argv['--my_argument']

and finally return the default value.

- 'default value'

