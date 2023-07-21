/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#171717",
                primary: "#0f084b",
                secondary: "#26408b",
                light: "#b9e6ed",
            },
        },
    },
    plugins: [],
};
