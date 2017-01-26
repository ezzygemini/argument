# Argument

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

