module.exports = {
  testEnvironment: `node`,
  bail: true,
  verbose: true,
  setupFilesAfterEnv: [`jest-extended`],
  collectCoverage: true,
  collectCoverageFrom: [`src/**/*.js`, `!**/node_modules/**`],
  coverageReporters: [`json`, `text`, `html`],
  coverageDirectory: `reports/coverage`,
  testPathIgnorePatterns: [`/node_modules/`],
  testMatch: [`**/test/**/?(*.)+(spec|test).js?(x)`],
  setupFiles: ["<rootDir>/test/.envVars.js"],
}
