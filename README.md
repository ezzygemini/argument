# ezzy-argument

[![Greenkeeper badge](https://badges.greenkeeper.io/ezzygemini/ezzy-argument.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/ezzygemini/ezzy-argument.svg?branch=master)](https://travis-ci.org/ezzygemini/ezzy-argument)
[![Coverage Status](https://coveralls.io/repos/github/ezzygemini/ezzy-argument/badge.svg?branch=master)](https://coveralls.io/github/ezzygemini/ezzy-argument?branch=master)

This small lightweight library will 
help fetch arguments from the environment
or from the node arguments.

By requesting this library, you'll be able
to invoke:

```nodemon
const arg = require('ezzy-argument');
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

