const { ESLint } = require('eslint')

// Create an instance of ESLint with the configuration passed to the function
async function lintAndFix(filePaths) {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfig: {
      env: {
        es6: true,
        node: true,
      },
      parserOptions: {
        ecmaVersion: 2018,
      },
      rules: {
        'no-console': 'error',
        'no-unused-vars': 'warn',
      },
    },
    fix: true,
  })

  const results = await eslint.lintFiles(filePaths)

  // Apply automatic fixes and output fixed code
  await ESLint.outputFixes(results)

  return results
}

// Log results to console if there are any problems
function outputLintingResults(results) {
  // Identify the number of problems found
  const problems = results.reduce(
    (acc, result) => acc + result.errorCount + result.warningCount,
    0,
  )

  if (problems > 0) {
    console.log('Linting errors found!')
    console.log(results)
  } else {
    console.log('No linting errors found.')
  }
  return results
}

// Assuming lintFiles is called with an array of file paths
async function lintFiles(filePaths) {
  const results = await lintAndFix(filePaths)
  return outputLintingResults(results)
}

// Export integration
module.exports = { lintFiles }
