# sinon-1711-babel
Recreate 1711 problem

```
$ npm test

> issue-1711-babel-version@1.0.0 pretest /home/carlerik/dev/sinon-1711-babel
> npm run build


> issue-1711-babel-version@1.0.0 build /home/carlerik/dev/sinon-1711-babel
> babel src -d ./build

src/mod1.js -> build/mod1.js
src/mod1.spec.js -> build/mod1.spec.js

> issue-1711-babel-version@1.0.0 test /home/carlerik/dev/sinon-1711-babel
> mocha build



  sinon#stub
    ✓ should correctly mock the module's method


  1 passing (9ms)
```
