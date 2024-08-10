import globals from "globals";
import js from "@eslint/js";
import solid from "eslint-plugin-solid";
import pretterConfig from "eslint-config-prettier";
import * as tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  pretterConfig,
  {
    files: ["**/*.{ts,tsx}"],
    ...solid.configs["flat/typescript"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json"
      },
      globals: {
        ...globals.node,
        ...globals.browser
      }
    }
  },
  {
    ignores: [".vinxi/", "dist/", ".wrangler/"]
  }
];
