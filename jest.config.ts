import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/**/*.spec.ts', '<rootDir>/**/*.test.ts'],
  collectCoverageFrom: ['<rootDir>/**/*.ts', '<rootDir>/**/*.ts'],
  watchPathIgnorePatterns: ['./jest.config.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
}

export default config
