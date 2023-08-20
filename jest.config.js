/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  preset: "ts-jest",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  resolver: "<rootDir>/jest-resolver.cts",
  moduleDirectories: ["node_modules", "src"],
  collectCoverage: true,
  transform: {
    // Add this transformation for ECMAScript Modules support
    "^.+\\.js$": "babel-jest", // Transform JS files using Babel
    "^.+\\.(jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    // Allow ECMAScript Modules from the specified libraries
    "/node_modules/(?!(ramda)/)", // Add more libraries if needed
  ],
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/**/*.interface.ts",
    "!<rootDir>/src/**/*.mock.ts",
    "!<rootDir>/src/**/*.module.ts",
    "!<rootDir>/src/**/*.spec.ts",
    "!<rootDir>/src/**/*.test.ts",
    "!<rootDir>/src/**/*.d.ts",
  ],
};
module.exports = createJestConfig(customJestConfig);
