const path = require("path");

const buildEslintCommand = (filenames) => {
  return `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;
};

const buildPrettierCommand = (filenames) => {
  return `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;
};

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, buildPrettierCommand],
};
