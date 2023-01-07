# DAY 2

## What is NPM ?

NPM – or "Node Package Manager" – is the default package manager for JavaScript's runtime Node.js.

It's also known as "Ninja Pumpkin Mutants", "Nonprofit Pizza Makers", and a host of other random names that you can explore

NPM consists of two main parts:

a CLI (command-line interface) tool for publishing and downloading packages, and
an online repository that hosts JavaScript packages

## - What is `Parcel/Webpack`? Why do we need it?

Parcel and webpack are the bundlers used mostly for JavaScript or Typescript code that helps you to minify, clean, and make your code compact so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application. Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

## - What is `.parcel-cache` ?

The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## What is `npx` ?

npm - Package manager for JavaScript, just like: pip (Python), Maven (Java), NuGet (.NET), Composer (PHP), RubyGems (Ruby), ...

npx - runs a command of a package without installing it explicitly.

Use cases:

You don't want to install packages neither globally nor locally.
You don't have permission to install it globally.
Just want to test some commands.
Sometime, you want to have a script command (generate, convert something, ...) in package.json to execute something without installing these packages as project's dependencies.

## - What is difference between `dependencies` vs `devDependencies` ?

"dependencies" : Packages required by your application in production. "devDependencies" : Packages that are only needed for local development and testing.

## - What is Tree Shaking ?

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

In modern JavaScript applications, we use module bundlers (e.g., webpack or Parcel) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

## What is Hot Module Replacement ?

Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things. Parcel's HMR implementation supports both JavaScript and CSS assets.

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words .

Fast bundle times — Parcel is faster than Webpack, Rollup and Browserify.

Parcel has out of the box support for JS, CSS, HTML, file assets, and more — no plugins needed — More user-friendly.

Zero configuration required. Out of the box code splitting, hot module reloading, CSS preprocessors, development server, caching, and many more!

Friendlier error logs.

## Differences between Parcel and Webpack Configuration

One of the main differences between Parcel and Webpack is the amount of configuration required to get started. Parcel is designed to be easy to use and requires minimal configuration.

npx parcel entryPoint.js -y

You can simply point it at your entry point JavaScript file like this, and it will automatically process all of the dependencies and assets needed by your project.

Webpack requires more configuration to get started. You will need to create a configuration file (usually called "webpack.config.js") that specifies the entry point for your project and defines any additional settings or options you want to use.

Asset processing

Both Parcel and Webpack automatically detect and process a wide variety of assets.

However, Parcel is generally considered to be easier to use and requires less configuration for it. It can detect and process most types of assets, and it also transforms code using tools like Babel and PostCSS without any additional configuration.

Webpack requires additional configuration to process different types of assets, and it may even require the use of loaders or plugins to transform code.

Performance

Both Parcel and Webpack offer optimization techniques, such as minification and tree shaking, to ensure that the bundled code runs efficiently in the browser.

Admittedly though, Webpack is considered to be more powerful and flexible when it comes to optimizing code, but at the cost of more configuration to get the best performance. Webpack allows you to define specific optimization techniques and settings in the config file.

While Parcel uses a set of default optimization techniques that are applied automatically, which also means that you cannot really decide what and how to optimize.

Code splitting

Webpack includes the ability to split your code into small chunks, called "modules," that can be loaded on demand, which is known as code splitting. This can improve the performance of your application by reducing the amount of code that needs to be downloaded and executed by the browser at a time.

Parcel does not have built-in support for code splitting, but it can be achieved using plugins, which are just extra steps we want to avoid by choosing Parcel.

So basically, Parcel for smaller or less config-hungry applications, and Webpack for bigger and more complex apps are the better choices.

## What is `.gitignore`? What should we add and not add into it ?

gitignore file is a text file that tells Git which files or folders to ignore in a project.

The simple rule is that the things which we can auto generate we should add this in .gitignore file.

## What is the difference between `package.json` and `package-lock.json` ?

The package.json is used for more than dependencies - like defining project properties, description, author & license information, scripts, etc. The package-lock.json is solely used to lock dependencies to a specific version number.

## Why should I not modify `package-lock.json` ?

This is due to the fact that the file is generated by npm each time the build script is performed using 'npm'. The npm commands will override any changes we make to it. The manual primming of the nodes and their dependencies is nearly always bound to errors, thus we use 'npm' to make any changes, such as upgrading or installing a package. Additionally, if you do modify the file, you will bring unnecessary mistakes into your project.

## What is `node_modules` ? Is it a good idea to push that on git ?

You can think of the node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Node.js is trained to look for them there when you import them (without a specific path). It refers to it as a cache because the node_modules folder can be entirely recreated from scratch at any time by just reinstalling all the dependent modules (that should be listed in your project folders).

We should not push node-modules to git as it is big in size and we can easily generate this folder using npm i due to package-json & package-lock.json.

## What is the `dist` folder ?

The dist directory (short for "distribution"), on the other hand, is the directory where the final, built version of your project is stored. When you run the Parcel bundler to build your project, it will take all of the assets and dependencies that are needed for your project, process them as necessary, and then output the final result to the dist directory.

The dist directory is intended to contain the final, production-ready version of your project, and it is the directory that you deploy to a web server.

## What is `browserlists` ?

Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.

## ^ - caret and ~ - tilda ?

Tilde (~) notation: It is used to match the most recent patch version. Tilde ~ notation freezes the major version and minor version. As we know patch updates are bug fixes that’s why we can say ~ notation allows us to automatically accept bug fixes.

Example: The ~1.2.0 will update all the future patch updates. We have to write just ~1.2.0 and all the next patch update dependencies. For example, 1.2.1, 1.2.2, 1.2.5……………1.2.x.

Note: Patch updates are very small security changes in a package that is why the ~version is approximately equivalent to the version.

Caret (^) notation: It is used for automatically updating the minor updates along with patch updates.

Example: The ^1.2.4 will update all the future Minor and patch updates, for example, ^1.2.4 will automatically change the dependency to 1.x.x if any update occurs.

Using caret notation it is important to look at our code regularly if it is compatible with the newest version or not.