import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettierConfig from "eslint-config-prettier";

export default [
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    prettierConfig,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Turn off rule
      "react/jsx-uses-react": "off", // Turn off rule
    },
  },
];