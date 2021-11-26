# react-practice

## possible issue

```shell
./lib/tokenize' is not defined by "exports" in node_modules/postcss-safe-parser/node_modules/postcss/package.json
```

node version 문제이다. node@14를 사용하면 해결된다.  
[stackoverflow answer](https://stackoverflow.com/questions/69693907/error-err-package-path-not-exported-package-subpath-lib-tokenize-is-not-d)  

