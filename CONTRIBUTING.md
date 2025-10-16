# Contributing to TypeScript Template

Thank you for considering contributing to this TypeScript template! This document provides guidelines for contributing improvements to the template itself.

## 🎯 About This Template

This is a **template repository** designed to help developers quickly start TypeScript projects with best practices built-in. Contributions should focus on improving the template's quality, usability, and maintainability.

## 🤝 How to Contribute

### Reporting Issues

Found a problem? Please open an issue:

1. Check if the issue already exists
1. Use a clear, descriptive title
1. Provide detailed information:
   - What you expected to happen
   - What actually happened
   - Steps to reproduce
   - Your environment (Node.js version, OS, etc.)

### Suggesting Enhancements

Have an idea for improvement?

1. Open an issue with the label `enhancement`
1. Clearly describe the enhancement
1. Explain why it would be useful
1. Provide examples if applicable

### Pull Requests

Ready to contribute code?

1. **Fork the repository**
1. **Create a feature branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

1. **Make your changes**:
   - Follow the existing code style
   - Update documentation as needed
   - Add tests if applicable

1. **Test your changes**:

   ```bash
   yarn all
   ```

1. **Commit your changes**:

   ```bash
   git commit -m "feat: add awesome feature"
   ```

   Use [Conventional Commits](https://www.conventionalcommits.org/) format:
   - `feat:` - New features
   - `fix:` - bugfixes
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

1. **Push to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

1. **Open a Pull Request**

## 📋 Development Guidelines

### Code Style

- Follow existing code patterns
- Use TypeScript strict mode features
- Write clear, self-documenting code
- Add JSDoc comments for public APIs

### Testing

- Write tests for new features
- Maintain or improve code coverage
- Ensure all tests pass: `yarn test`

### Documentation

- Update README.md if changing features
- Update TEMPLATE_SETUP.md for setup changes
- Add comments for complex logic
- Keep documentation clear and concise

## 🎯 What to Contribute

### Priority Areas

1. **Improved Documentation**
   - Clearer setup instructions
   - More examples
   - Better troubleshooting guides

1. **Tool Configuration**
   - Better default configurations
   - More useful ESLint rules
   - Improved build optimization

1. **Developer Experience**
   - Better Visual Studio Code integration
   - Improved scripts
   - More helpful error messages

1. **Examples**
   - Additional starter templates
   - Common patterns
   - Best practices demonstrations

### What Not to Include

- Project-specific code (this is a template)
- Unnecessary dependencies
- Opinionated frameworks (keep it flexible)
- Breaking changes without discussion

## ✅ Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code follows existing style and patterns
- [ ] All tests pass (`yarn test`)
- [ ] Linting passes (`yarn lint`)
- [ ] Quality checks pass (`yarn quality`)
- [ ] Build succeeds (`yarn package`)
- [ ] Documentation is updated
- [ ] Commits follow conventional format
- [ ] PR description clearly explains changes

## 🔍 Review Process

1. A maintainer will review your PR
1. They may request changes or ask questions
1. Address feedback and update your PR
1. Once approved, a maintainer will merge

## 🏗️ Project Structure

When making changes, understand the structure:

```text
├── src/                    # Example TypeScript code
├── .github/                # GitHub configuration
│   ├── workflows/          # CI/CD workflows
│   └── TEMPLATE_CHECKLIST.md
├── .templates/             # Starter templates and examples
├── script/                 # Utility scripts
├── Configuration files     # Various tool configs
├── TEMPLATE_SETUP.md       # Setup guide for template users
└── README.md               # Main documentation
```

## 🎓 Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

## 📞 Getting Help

- Open an issue for questions
- Start a discussion for ideas
- Tag maintainers if you need attention

## 📜 Code of Conduct

Be respectful, constructive, and collaborative. We're all here to learn and
improve.

## 🙏 Recognition

Contributors will be recognized in the readme and release notes.

---

Thank you for helping make this template better for everyone!
