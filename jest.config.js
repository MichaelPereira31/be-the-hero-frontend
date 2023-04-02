const COVERAGE_METRIC = 20
const NO_METRIC = 0

const isCI = process.env.NODE_ENV === 'ci'
const COVERAGE_EXPECTATION = isCI ? COVERAGE_METRIC : NO_METRIC

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/.next',
    '<rootDir>/build'
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$',
    'node_modules/(?!(imask)/)'
  ],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/fileMock.js',
    '@/(.*)': '<rootDir>/src/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  coveragePathIgnorePatterns: ['<rootDir>/src/pages'],
  coverageThreshold: {
    global: {
      branches: COVERAGE_EXPECTATION,
      functions: COVERAGE_EXPECTATION,
      lines: COVERAGE_EXPECTATION,
      statements: COVERAGE_EXPECTATION
    }
  },
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
