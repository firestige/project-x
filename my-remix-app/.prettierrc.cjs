const { plugin } = require("postcss");

const config = {
    semi: false,
    singleQuote: true,
    plugins: ["prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            opetions: {
                tabWidth: 2
            }
        }
    ]
  };
  
  module.exports = config;