module.exports = {
  testEnvironment: 'jsdom', // Specify the environment
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'], // Test file patterns
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Setup files
};
