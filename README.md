# Namaste React

# Commands

npm install parcel
npm install react
npm install react-dom

# To start the bundler

npm parcel index.js

# Route

react-router-dom
npm install react-router-dom

# Tailwind Css

https://tailwindcss.com/docs/guides/parcel
npm install -D tailwindcss postcss
npx tailwindcss init

.postcssrc

<!---

    {
        "plugins": {
            "tailwindcss": {}
        }
    }

-->

tailwind.config.js

<!---
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: [
            "./src/**/*.{html,js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    }
-->

index.css

<!--
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
-->

# Redux Toolkit

npm install @reduxjs/toolkit
npm install react-redux

# Setting up Testing in our App

- Install React Testing Library
  npm install -D @testing-library/react

- Install Jest
  npm i -D jest

- Install Babel Dependencies
  npm install -D babel-jest @babel/core @babel/preset-env

- Configure Babel
  babel.config.js
  <!--
        module.exports = {
            presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
        };
  -->

- Configure Parcel config file to disable default babel transpilation
  .parcelrc
  <!--
        {
            "extends": "@parcel/config-default",
            "transformers": {
                "*.{js,mjs,jsx,cjs,ts,tsx}": [
                "@parcel/transformer-js",
                "@parcel/transformer-react-refresh-wrap"
                ]
            }
        }
   -->

- Jest Configuration
  npx jest --init
  <!--
    √ Would you like to use Typescript for the configuration file? ... no
    √ Choose the test environment that will be used for testing » jsdom (browser-like)
    √ Do you want Jest to add coverage reports? ... yes
    √ Which provider should be used to instrument code for coverage? » babel
    √ Automatically clear mock calls, instances, contexts and results before every test? ... yes
  -->

- Install jsdom library
  npm i -D jest-environment-jsdom

- Install preset-react to make JSX work in test cases
  npm i -D @babel/preset-react

- Include @babel/preset-react inside babel.config.js
  <!--
    module.exports = {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        ["@babel/preset-react", { runtime: "automatic" }], // Add this
      ],
    };
  -->

- Install @testing-library/jest-dom
