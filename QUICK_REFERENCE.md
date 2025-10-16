# Quick Reference Guide

This is a quick reference for common tasks in this TypeScript template.

## 🚀 Common Commands

| Command         | Description                  |
| --------------- | ---------------------------- |
| `yarn install`  | Install all dependencies     |
| `yarn test`     | Run tests with coverage      |
| `yarn lint`     | Check code style and quality |
| `yarn lint:fix` | Autofix linting issues       |
| `yarn package`  | Build production bundle      |
| `yarn all`      | Run complete pipeline        |

## 📁 Key Files to Customize

### Must Update

- [ ] `package.json` - Project name, author, description, URLs
- [ ] `README.md` - Project documentation
- [ ] `LICENSE` - Verify license is appropriate
- [ ] `.github/CODEOWNERS` - Update with your username

### Optional Updates

- [ ] `eslint.config.mjs` - Adjust linter rules
- [ ] `.prettierrc.yml` - Modify formatting preferences
- [ ] `tsconfig.json` - Change TypeScript settings
- [ ] `jest.config.cjs` - Adjust test configuration

## 🔧 Configuration Quick Reference

### TypeScript

```json
// tsconfig.json - Key settings
{
  "compilerOptions": {
    "target": "ES2022", // JavaScript version
    "strict": true, // Strict type checking
    "module": "ES2022", // Module system
    "esModuleInterop": true // CommonJS compatibility
  }
}
```

### ESLint

```javascript
// eslint.config.mjs - Key settings
{
  rules: {
    'complexity': ['error', { max: 10 }],  // Max complexity
    'sonarjs/cognitive-complexity': ['error', 15]
  }
}
```

### Prettier

```yaml
# .prettierrc.yml - Key settings
semi: true # Semicolons
singleQuote: true # Quote style
tabWidth: 2 # Indentation
printWidth: 80 # Line length
```

### Jest

```javascript
// jest.config.cjs - Key settings
{
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: { branches: 80, functions: 80, lines: 80 }
  }
}
```

## 📝 Project Structure Templates

### Simple Project

```text
src/
├── index.ts           # Entry point
├── app.ts             # Main application
├── utils/             # Utility functions
└── __tests__/         # Tests
```

### Layered Architecture

```text
src/
├── index.ts           # Entry point
├── controllers/       # Request handlers
├── services/          # Business logic
├── repositories/      # Data access
├── models/            # Data models
├── utils/             # Utilities
└── __tests__/         # Tests
```

### Library/Package

```text
src/
├── index.ts           # Public API
├── core/              # Core functionality
├── types/             # Type definitions
├── utils/             # Internal utilities
└── __tests__/         # Tests
```

## 🧪 Testing Patterns

### Basic Test

```typescript
import { describe, it, expect } from '@jest/globals';

describe('MyFunction', () => {
  it('should return expected result', () => {
    expect(myFunction()).toBe(expectedResult);
  });
});
```

### Async Test

```typescript
it('should handle async operations', async () => {
  const result = await asyncFunction();
  expect(result).toBe(expectedResult);
});
```

### Mock Test

```typescript
import { jest } from '@jest/globals';

it('should call dependency', () => {
  const mockFn = jest.fn();
  myFunction(mockFn);
  expect(mockFn).toHaveBeenCalled();
});
```

## 🔄 Git Workflow

### Initial Setup

```bash
# After using template
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
corepack enable
yarn install
yarn all
```

### Daily Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes, then test
yarn all

# Commit changes
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/my-feature
```

### Before Committing

```bash
# Run full pipeline
yarn all

# Or run checks individually
yarn lint:fix
yarn test
yarn quality
yarn package
```

## 📊 Quality Gates

The template enforces these quality standards:

| Check                 | Threshold | Command            |
| --------------------- | --------- | ------------------ |
| Test Coverage         | 80%       | `yarn test`        |
| Cyclomatic Complexity | 10        | `yarn lint`        |
| Cognitive Complexity  | 15        | `yarn lint`        |
| Code Duplication      | 1%        | `yarn duplication` |
| Circular Dependencies | 0         | `yarn madge`       |

## 🐛 Troubleshooting

### Tests Failing

```bash
# Clear cache and retry
yarn test --clearCache
yarn test
```

### Linting errors

```bash
# Auto-fix what's possible
yarn lint:fix

# Check remaining issues
yarn lint
```

### Build Issues

```bash
# Check TypeScript errors
yarn typecheck

# Rebuild from scratch
rm -rf dist node_modules .yarn/cache
yarn install
yarn package
```

### Module Resolution Issues

```bash
# Clear TypeScript cache
rm -rf dist
rm -f tsconfig.tsbuildinfo

# Rebuild
yarn package
```

## 📚 Additional Resources

- **Setup Guide**: See [TEMPLATE_SETUP.md](./TEMPLATE_SETUP.md)
- **Customization**: See
  [.github/TEMPLATE_CHECKLIST.md](./.github/TEMPLATE_CHECKLIST.md)
- **Contributing**: See [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Starter Templates**: See
  [.templates/STARTER_TEMPLATES.md](./.templates/STARTER_TEMPLATES.md)

## 💡 Tips

1. **Run `yarn all` often** - Catch issues early
2. **Write tests first** - TDD helps design better APIs
3. **Use `yarn lint:fix`** - Save time on formatting
4. **Check the logs** - Error messages are usually helpful
5. **Keep dependencies updated** - Run `yarn up '*'` regularly

## 🆘 Getting Help

- Check [Issues](https://github.com/Coderrob/typescript-template/issues)
- Read the [Full readme](./README.md)
- Review example code in `src/`
- Check configuration files for examples

---

**Keep this file handy during development!**
