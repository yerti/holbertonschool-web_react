# Creating an interface for a student

In this 0-task folder it contains 4 configuration files that are package.json, .eslintrc.js, tsconfig.json, webpack.config.js which in order to initialize them we must execute the following command.

To execute the commands you should be in a terminal, either Visual Studio Code or the one of your choice. Also, your path should be in the task_0 folder.

```
npm install
```
This will install the tools and libraries required to build and run the project.

Update Webpack and Terser dependencies to the latest versions. You can do this by running:
```
npm update webpack terser-webpack-plugin
```

To compile the TypeScript code to JavaScript and create an HTML file, use the following command:
```
npm run build
```

This generates a dist folder with an index.html file. Open this HTML file in your web browser to see the table with student names and locations. which is the result of the main.ts file