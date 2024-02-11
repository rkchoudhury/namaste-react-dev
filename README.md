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
