module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$'   : 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform           : {
    '^.+\\.(js)$': 'babel-jest',
    '^.+\\.(ts)$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage    : false,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  testEnvironment: 'jest-environment-jsdom-fourteen',
};
