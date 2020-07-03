![MDB Logo](https://mdbootstrap.com/img/Marketing/general/logo/medium/mdb-r.png)

# MDB WEBPACK STARTER

### Installation
```
npm install
```

### Dev Server
```
npm start
```

### Build
```
npm run build
```

### Features:

* Bundling via [webpack](https://github.com/webpack/webpack)
* ES6+ Support via [babel](https://babeljs.io/)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
* Unit Testing via [jest](https://github.com/facebook/jest)
* Code Formatting via [prettier](https://github.com/prettier/prettier)

### Files structure:

```
├── src
│   ├── img/
│   ├── js/
│   ├── scss/
│   └── index.html
├── webpack
│   ├── webpack.common.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
└── dist/
```

## MDB UI KIT

#### Importing JS modules
You can import the entire library or just individual modules:
```
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { Input as CustomInput } from 'mdb-ui-kit'; // module with custom name
```

#### Importing CSS file
To import MDB stylesheet please use the following syntax:
```
@import '~mdb-ui-kit/css/mdb.min.css';
```

#### Importing SCSS modules
You can also import individual SCSS modules. To do it properly, we recommend to copy them from the node_modules/mdb-ui-kit/src/scss location directly to your project and import in the same way as CSS files.
