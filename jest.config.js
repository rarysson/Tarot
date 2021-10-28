module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: ["**/*.test.[jt]s"],
  collectCoverageFrom: ["<rootDir>/src/**/*.vue"],
  coverageReporters: ["lcov", "text-summary"],
};
