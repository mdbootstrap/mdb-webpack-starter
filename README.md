![MDB Logo](https://mdbootstrap.com/img/Marketing/general/logo/medium/mdb-r.png)

# MDB 5 Webpack Starter

### Webpack boilerplate for Bootstrap 5 & Material Design 2.0 UI Kit

**[>> Support MDB 5 with a STAR](https://github.com/mdbootstrap/mdb-ui-kit/)**

**[>> MDB 5 Demo](https://mdbootstrap.com/docs/standard/#demo)**

<a href="https://npmcharts.com/compare/mdbootstrap?minimal=true"> <img src="https://img.shields.io/npm/dm/mdbootstrap.svg?label=MDB%20Downloads" alt="Downloads"></a>
<a href="https://github.com/mdbootstrap/bootstrap-material-design/blob/master/License.pdf"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>
<a href="https://twitter.com/intent/tweet/?text=Thanks+@mdbootstrap+for+creating+amazing+and+free+Material+Design+for+Bootstrap+4+UI+KIT%20https://mdbootstrap.com/docs/jquery/&hashtags=javascript,code,webdesign,bootstrap"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Let%20us%20know%20you%20were%20here%21&"></a>
<a href="https://www.youtube.com/watch?v=c9B4TPnak1A&t=6s"><img alt="YouTube Video Views" src="https://img.shields.io/youtube/views/c9B4TPnak1A?label=Bootstrap%205%20Tutorial%20Views&style=social"></a>

___

> :warning: The use of this Starter is at your own risk and assumes basic knowledge of Webpack, JavaScript and CSS preprocessors. We recommend creating custom versions of MDB UI KIT and themes only for advanced developers.

___

### Installation
```
npm install
```

> **Pro Essential installation**
> ```
> npm install git+https://oauth2:ACCESS_TOKEN@git.mdbootstrap.com/mdb/standard/mdb-ui-kit-pro-essential
> ```

> **Pro Advanced installation**
> ```
> npm install git+https://oauth2:ACCESS_TOKEN@git.mdbootstrap.com/mdb/standard/mdb-ui-kit-pro-advanced
> ```

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
.
├── src
│   ├── img/
│   ├── js/
│   ├── scss/
│   ├── mdb/
│   └── index.html
├── webpack
│   ├── webpack.common.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── mdb/
│       ├── webpack.common.mdb.js
│       ├── webpack.config.mdb.dev.js
│       └── webpack.config.mdb.prod.js
└── dist/
```
<br><br>

___

# MDB UI KIT

### Importing JS modules
You can import the entire library or just individual modules:
```
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { Input as CustomInput } from 'mdb-ui-kit'; // module with custom name
```

### Importing CSS file
To import MDB stylesheet please use the following syntax:
```
@import '~mdb-ui-kit/css/mdb.min.css';
```
<br><br>

___

# CUSTOM VERSION OF MDB UI KIT
It is possible to prepare a custom version of MDB UI KIT. It can be useful when the project uses only several modules of our library and you want to reduce the size of the compiled files. To achieve this, follow the steps:

```
npm install
```

> **Pro Essential installation**
> ```
> npm install git+https://oauth2:ACCESS_TOKEN@git.mdbootstrap.com/mdb/standard/mdb-ui-kit-pro-essential
> ```

> **Pro Advanced installation**
> ```
> npm install git+https://oauth2:ACCESS_TOKEN@git.mdbootstrap.com/mdb/standard/mdb-ui-kit-pro-advanced
> ```

```
npm run getMDBsrc
```

### Importing JS components
Copy the content from mdb/js/mdb.free.js or mdb/js/mdb.pro.js to src/js/index.js file. Pick only the components you need and update path to the mdb dir. Here's an example:

```
import Carousel from '../../mdb/js/free/carousel';

export { Carousel };
```

> **Pro Advanced paths**
>
> For the Pro Advanced package the __/mdb__ folder will contain two subfolders: __/mdb__ and __/plugins__, so for our needs the paths to the scss and js files will have to contain duplicated __mdb/__ text. Here's an example for a carousel component: 
> ```
> import Carousel from '../../mdb/mdb/js/free/carousel';
> ```

Some components may require additional dependencies to be installed. Webpack should report this after starting a devServer.

### Importing SCSS files
Same as with js files, copy the content from mdb/scss/mdb.free.scss or mdb/scss/mdb.pro.scss to src/scss/index.scss. Remove the lines with the import of modules that you will not use and update the paths to point the mdb dir.

Keep in mind that many scss files are related to each other. For example, a modal will need files for buttons, ripple, modal, close and transtions to work properly. We recommend that you only delete the files described by comments __BOOTSTRAP COMPONENTS__ and __MDB COMPONENTS__.

Example path for carousel file:
```
@import '../../mdb/scss/free/carousel';
```

> **Pro Advanced path**
> ```
> @import '../../mdb/mdb/scss/free/carousel';
> ```

### Configuration
Webpack config for MDB development is located in /webpack/mdb/ directory and index.html file is placed in /src/mdb/ directory.

### Dev Server
```
npm run startMDB
```

### Build
```
npm run buildMDB
```
<br><br>

___

# CUSTOM THEME
Webpack Starter allows pro users to prepare a personalized theme for all UI KIT components. 

### Installation
```
npm install
```

> **Pro Essential installation**
> ```
> npm install git+https://oauth2:ACCESS_TOKEN@git.mdbootstrap.com/mdb/standard/mdb-ui-kit-pro-essential
> ```

> **Pro Advanced installation**
> ```
> npm install git+https://oauth2:ACCESS_TOKEN@git.mdbootstrap.com/mdb/standard/mdb-ui-kit-pro-advanced
> ```

### SCSS config
Creating a new theme requires that you define primary and secondary colors for your application. We prepared functions and mixins that will help you to create a ready to use theme using these colors. Here's an example code:

```
@import '~mdb-ui-kit/src/scss/mdb.pro.scss';

$my-theme-primary: #9c27b0; // theme primary color, change this value to customize theme
$my-theme-secondary: #69f0ae; // theme secondary color, change this value to customize theme

$my-theme: mdb-light-theme($my-theme-primary, $my-theme-secondary); // create the new theme using primary and secondary colors

// include theme styles
@include mdb-theme($my-theme);
```