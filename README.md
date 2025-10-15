# TypeScript Project Template

[![CI](https://github.com/Coderrob/typescript-template/.github/workflows/ci.yml/badge.svg)](https://github.com/Coderrob/typescript-template/.github/workflows/ci.yml)
[![Coverage](./badges/coverage.svg)](./coverage/lcov-report/index.html)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

A production-ready TypeScript template repository with comprehensive linting, formatting, testing, and build configuration. Perfect for quickly bootstrapping new TypeScript projects with industry best practices built-in.

## 🎯 Why Use This Template?

Starting a new TypeScript project often means hours of configuration setup. This template provides:

- ✅ **Zero Configuration Needed**: All tooling pre-configured and ready to use
- ✅ **Industry Best Practices**: Battle-tested configurations for linting, formatting, and testing
- ✅ **Immediate Productivity**: Start writing code, not configuring tools
- ✅ **Consistent Code Quality**: Enforced standards across your entire project
- ✅ **CI/CD Ready**: GitHub Actions workflows included
- ✅ **Fully Documented**: Clear examples and comprehensive documentation

## ✨ Features

- **📦 Modern TypeScript**: Full TypeScript 5.7+ configuration with strict type checking
- **🔍 Code Quality**: ESLint with SonarJS static analysis, complexity limits, and import sorting
- **🎨 Code Formatting**: Prettier integration with automatic formatting on save
- **🧪 Comprehensive Testing**: Jest testing framework with coverage reporting and badges
- **⚡ Optimized Build**: Rollup bundling with Terser minification for optimal output
- **🏗️ Modular Architecture**: Example project structure with dependency injection patterns
- **📊 Quality Gates**: Duplicate code detection, circular dependency checking
- **🛡️ Security**: SonarJS security patterns and vulnerability detection
- **🔧 Developer Experience**: EditorConfig, Visual Studio Code settings, and development container support
- **📋 CI/CD Ready**: Pre-configured GitHub Actions workflows with automated quality checks
- **🎓 Learning Resource**: Well-documented examples of TypeScript best practices

## 🚀 Quick Start

### Using This Template

1. **Click "Use this template"** button at the top of this repository
1. **Create your new repository** from the template
1. **Clone your new repository**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

1. **Enable Corepack** (if not already enabled):

   ```bash
   corepack enable
   ```

1. **Install dependencies**:

   ```bash
   yarn install
   ```

1. **Start coding!** The template includes example code you can replace with
   your own.

### First Steps After Setup

1. **Update `package.json`**:
   - Change `name`, `description`, `author`
   - Update `repository`, `bugs`, and `homepage` URLs
   - Modify `keywords` to match your project

1. **Update `readme`**:
   - Replace this readme with your project's documentation
   - Update badges with your repository information

1. **Configure licensing**:
   - Review and update `LICENSE` file if needed
   - Update copyright headers in source files (or run `yarn copyright`)

1. **Customize CODEOWNERS**:
   - Update `.github/CODEOWNERS` with your team's information

## 📁 Project Structure

```text
├── .devcontainer/          # Dev container for consistent development environment
├── .github/
│   ├── workflows/          # GitHub Actions CI/CD workflows
│   │   └── ci.yml          # Main CI pipeline (lint, test, build)
│   ├── FUNDING.yml         # GitHub funding/sponsor configuration
│   └── pull_request_template.md
├── .vscode/                # VS Code workspace settings and extensions
├── __mocks__/              # Jest test mocks
├── badges/                 # Generated coverage badges
├── coverage/               # Test coverage reports (generated)
├── dist/                   # Build output (generated)
├── script/                 # Utility scripts
│   └── release.sh          # Release automation
├── src/
│   ├── index.ts            # Main entry point
│   ├── core/               # Core business logic
│   ├── logging/            # Modular logging system (example architecture)
│   │   ├── loggers/        # Logger implementations
│   │   ├── pino/           # Pino logger integration
│   │   ├── filters/        # Log filtering system
│   │   └── types.ts        # Type definitions
│   └── __tests__/          # Comprehensive test suite
│       ├── jest.setup.ts   # Jest globals setup for ESM
│       └── loggers/        # Logger implementation tests
├── .editorconfig           # Editor configuration for consistent coding styles
├── .gitignore              # Git ignore patterns
├── .gitattributes          # Git attributes
├── .jscpd.json            # Code duplication detection configuration
├── .markdown-lint.yml      # Markdown linter rules
├── .npmignore              # NPM publish ignore patterns
├── .nvmrc                  # Node.js version specification
├── .prettierignore         # Prettier ignore patterns
├── .prettierrc.yml         # Prettier code formatting configuration
├── .yaml-lint.yml          # YAML file linter rules                   |
├── CODEOWNERS              # Code ownership and review assignments
├── eslint.config.mjs       # Modern ESLint flat configuration
├── jest.config.cjs         # Jest testing configuration
├── package.json            # Project dependencies and scripts
├── rollup.config.js        # Rollup bundling configuration
├── tsconfig.json           # Production TypeScript configuration
├── tsconfig.test.json      # Test environment TypeScript configuration
└── README.md               # This file
```

## 💻 Development

### Prerequisites

- **Node.js 20+** (specified in `.nvmrc`)
- **Yarn 4.5.3** (managed via Corepack)

### Setup Your Development Environment

1. **Use the correct Node.js version** (if using nvm):

   ```bash
   nvm use
   ```

1. **Enable Corepack** (ships with Node.js 16.10+):

   ```bash
   corepack enable
   ```

1. **Install dependencies**:

   ```bash
   yarn install
   ```

1. **Verify everything works**:

   ```bash
   yarn all
   ```

### Yarn Scripts Reference

| Script               | Description                                               |
| -------------------- | --------------------------------------------------------- |
| `yarn all`           | 🚀 Complete pipeline: lint:fix → quality → test → package |
| `yarn typecheck`     | 📋 TypeScript type checking without emit                  |
| `yarn lint`          | 🔍 Run Prettier and ESLint validation                     |
| `yarn lint:fix`      | 🎨 autoformat and fix code issues                         |
| `yarn quality`       | 📊 Run quality gates: lint + duplication + circular deps  |
| `yarn test`          | 🧪 Run Jest tests with coverage reporting                 |
| `yarn coverage`      | 📈 Generate coverage badge                                |
| `yarn duplication`   | 📊 Analyze code duplication (1% threshold)                |
| `yarn madge`         | 🔄 Detect circular dependencies                           |
| `yarn package`       | 📦 Create production build                                |
| `yarn package:watch` | 👀 Build in watch mode for development                    |
| `yarn copyright`     | ©️ Update copyright headers in source files               |

### Day-to-Day Development Workflow

1. **Write your code** in the `src/` directory
1. **Add tests** in `src/__tests__/` for your new features
1. **Run tests** frequently: `yarn test`
1. **Check code quality**: `yarn quality`
1. **Fix issues automatically**: `yarn lint:fix`
1. **Build for production**: `yarn package`

### Testing

Run the test suite:

```bash
yarn test
```

This will:

- Execute all Jest tests
- Generate coverage reports in `coverage/`
- Create a coverage badge in `badges/coverage.svg`

### Code Quality Checks

The template includes multiple quality gates:

**Check for code duplication:**

```bash
yarn duplication
```

**Check for circular dependencies:**

```bash
yarn madge
```

**Run all quality checks:**

```bash
yarn quality
```

### Building

Create an optimized production build:

```bash
yarn package
```

This uses Rollup to create an optimized bundle in `dist/`.

## 🔄 CI/CD

The repository includes a comprehensive CI/CD workflow:

- **CI Pipeline** (`.github/workflows/ci.yml`):
  - Runs on Node.js 20 with Ubuntu latest
  - Executes linting, type checking, and tests
  - Generates coverage reports
  - Builds production bundles
  - Validates code quality gates

### Customizing CI/CD

Edit `.github/workflows/ci.yml` to adjust:

- Node.js version (currently set to 20)
- Additional build steps
- Deployment configurations
- Quality gate thresholds

## ⚙️ Configuration

### TypeScript Configuration

The template includes two TypeScript configurations:

- **`tsconfig.json`**: Production configuration for building
  - Strict type checking enabled
  - ECMAScript 2022 target and module format
  - Path aliases supported (`@/*` → `src/*`)

- **`tsconfig.test.json`**: Test environment configuration
  - Extends base configuration
  - Includes test files and mocks
  - Jest type definitions

### ESLint Configuration

Modern ESLint flat configuration (`eslint.config.mjs`) with:

- **TypeScript Integration**: Full type-aware linting with strict rules
- **SonarJS Static Analysis**: Comprehensive static code analysis with security
  patterns, extremely low complexity limits, and code quality rules
- **Import Organization**: Automatic import sorting and organization
- **Complexity Monitoring**: Extremely low cyclomatic complexity limits (fails
  at >5) and cognitive complexity (fails at >8)
- **Jest Support**: Test-specific rules and globals
- **Prettier Integration**: Seamless code formatting

### Prettier Configuration

Code formatting with Prettier (`.prettierrc.yml`):

- 2-space indentation
- Single quotes
- Semicolons
- 80 character line width
- Arrow parens always
- Trailing commas: none

### Jest Configuration

Testing framework setup (`jest.config.cjs`):

- TypeScript support via `ts-jest`
- ESM module support with experimental VM modules
- Jest globals injection via setup file (`src/__tests__/jest.setup.ts`)
- Coverage thresholds and reporting
- Module path mapping
- Test environment: Node.js

### Rollup Configuration

Production bundling (`rollup.config.js`):

- ES Module output
- TypeScript compilation
- Terser minification
- External dependency handling
- Declaration file generation

### Additional Configuration Files

| File                 | Purpose                                   |
| -------------------- | ----------------------------------------- |
| `.editorconfig`      | Consistent editor settings across IDEs    |
| `.gitignore`         | Git ignore patterns for Node.js projects  |
| `.jscpd.json`        | Code duplication detection (1% threshold) |
| `.markdown-lint.yml` | Markdown linter rules                     |
| `.nvmrc`             | Node.js version specification (20)        |
| `.prettierignore`    | Files to exclude from formatting          |
| `.yaml-lint.yml`     | YAML file linter rules                    |
| `CODEOWNERS`         | Code ownership and review assignments     |

## 🏗️ Architecture

The template includes an example modular architecture with:

### Logging System

A comprehensive logging abstraction with multiple implementations:

- **CoreLogger**: Console logger (example implementation)
- **PinoLogger**: Structured logging with Pino
- **FilteredLogger**: Conditional logging based on filters
- **CompositeLogger**: Multi-logger orchestration
- **MetricsLogger**: Performance and metrics tracking
- **MockLogger**: Testing and development
- **NoopLogger**: Disabled logging

This demonstrates:

- **Dependency Injection**: Loosely coupled components
- **Interface Segregation**: Clean abstractions
- **Factory Pattern**: Logger creation and configuration
- **Composition**: Building complex behavior from simple parts

### Example Usage

The template includes example code that you can:

- **Learn from**: See TypeScript best practices in action
- **Modify**: Adapt the structure to your needs
- **Replace**: Remove entirely and start fresh
- **Extend**: Build upon the existing patterns

## 📚 What's Included?

### Development Tools

- **TypeScript 5.7+**: Latest TypeScript with strict mode
- **ESLint 9**: Modern flat config with comprehensive rules
- **Prettier 3**: Opinionated code formatting
- **Jest 29**: Testing framework with coverage
- **Rollup 4**: Production bundling and optimization

### Quality Tools

- **SonarJS**: Comprehensive static code analysis with security patterns,
  extremely low complexity limits, and code quality rules
- **JSCPD**: Code duplication detection
- **Madge**: Circular dependency checking
- **make-coverage-badge**: Automatic coverage badges

### Visual Studio Code Integration

- Workspace settings for consistent development
- Recommended extensions
- Debug configurations
- Task definitions

### Dev Container Support

Fully configured development container for consistent environments across teams.

## 🤝 Contributing to This Template

Contributions to improve this template are welcome!

1. Fork the repository
1. Create a feature branch: `git checkout -b feature/improvement`
1. Make your changes following the existing patterns
1. Add or update tests as needed
1. Run the complete pipeline: `yarn all`
1. Ensure all quality gates pass
1. Submit a pull request with a clear description

## 📄 License

This project is licensed under the Apache License 2.0 - see the
[LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

This template incorporates best practices from:

- TypeScript team's recommendations
- ESLint and Prettier communities
- Jest testing patterns
- Modern JavaScript development practices

## � Additional Documentation

- **[Template Setup Guide](./TEMPLATE_SETUP.md)**: Detailed setup instructions
- **[Template Checklist](./.github/TEMPLATE_CHECKLIST.md)**: Customization
  checklist
- **[Quick Reference](./QUICK_REFERENCE.md)**: Command and configuration
  reference
- **[Contributing](./CONTRIBUTING.md)**: How to contribute to this template
- **[Starter Templates](./.templates/STARTER_TEMPLATES.md)**: Example starting
  points

## �💬 Support

- **Issues**: Report bugs or request features via
  [GitHub Issues](https://github.com/Coderrob/typescript-template/issues)
- **Discussions**: Ask questions in
  [GitHub Discussions](https://github.com/Coderrob/typescript-template/discussions)

---

**Happy coding! 🚀** Start building your next TypeScript project with
confidence.
