import nextConfig from "eslint-config-next";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
  ...nextConfig,

  {
    ignores: [".next/**", "node_modules/**", "coverage/**"],
  },

  {
    rules: {
      "no-unused-vars": "error",
    },
  },

  eslintConfigPrettier,
];
