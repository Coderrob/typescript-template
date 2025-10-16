# Template Customization Checklist

Use this checklist to ensure you've properly customized the template for your
project.

## 📋 Essential Updates

### package.json

- [ ] Update `name` to your project name
- [ ] Update `description` to describe your project
- [ ] Update `author` with your information
- [ ] Update `repository.url` to your GitHub repository
- [ ] Update `bugs.url` to your issues page
- [ ] Update `homepage` to your repository URL
- [ ] Update `keywords` to match your project
- [ ] Review and update `version` if needed
- [ ] Update `license` if not using Apache-2.0

### README.md

- [ ] Replace main title with your project name
- [ ] Update project description
- [ ] Update all badge URLs with your repository details
- [ ] Replace or remove the template documentation
- [ ] Add your project-specific documentation
- [ ] Add installation instructions specific to your project
- [ ] Add usage examples
- [ ] Document any required environment variables
- [ ] Update contributing guidelines for your project

### License and Copyright

- [ ] Review and update `LICENSE` file if needed
- [ ] Update copyright year if necessary
- [ ] Run `yarn copyright` to update file headers
- [ ] OR manually update copyright in source files

### GitHub Configuration

- [ ] Update `.github/CODEOWNERS` with your GitHub username/team
- [ ] Update or remove `.github/FUNDING.yml`
- [ ] Customize `.github/pull_request_template.md` for your workflow
- [ ] Update repository settings on GitHub:
  - [ ] Set as template repository (Settings → Template repository)
  - [ ] Configure branch protection rules
  - [ ] Enable/disable features (Issues, Wiki, Projects, etc.)

## 🎨 Optional Customizations

### CI/CD Workflow

- [ ] Review `.github/workflows/ci.yml`
- [ ] Adjust Node.js versions to test against
- [ ] Add deployment steps if needed
- [ ] Configure secrets in repository settings
- [ ] Add status badge to readme

### Development Tools

- [ ] Review and adjust ESLint rules in `eslint.config.mjs`
- [ ] Customize Prettier settings in `.prettierrc.yml`
- [ ] Adjust Jest configuration in `jest.config.cjs`
- [ ] Update TypeScript settings in `tsconfig.json`
- [ ] Modify build configuration in `rollup.config.js`

### Code Quality Thresholds

- [ ] Adjust complexity threshold in `eslint.config.mjs`
- [ ] Update duplication threshold in `.jscpd.json`
- [ ] Configure coverage thresholds in `jest.config.cjs`

### Visual Studio Code Settings

- [ ] Review `.vscode/settings.json`
- [ ] Update recommended extensions in `.vscode/extensions.json`
- [ ] Customize debug configurations if needed

### Dev Container

- [ ] Review `.devcontainer/devcontainer.json`
- [ ] Add any additional tools or extensions needed
- [ ] Update Node.js version if different

## 🗂️ Project Structure

### Example Code

Choose one:

- [ ] Keep and modify the example code in `src/`
- [ ] Remove example code and start fresh
- [ ] Keep the logging system, remove other examples

### Delete Template Files

After customization, you may want to delete:

- [ ] `TEMPLATE_SETUP.md` (this was the setup guide)
- [ ] `.github/TEMPLATE_CHECKLIST.md` (this file)
- [ ] Example source code if you started fresh

## ✅ Verification Steps

### Before First Commit

- [ ] Run `yarn install` successfully
- [ ] Run `yarn all` - everything passes
- [ ] Run `yarn test` - all tests pass
- [ ] Run `yarn quality` - no quality issues
- [ ] Run `yarn package` - build succeeds
- [ ] Verify Git ignores `node_modules/`, `dist/`, `coverage/`

### Repository Setup

- [ ] Push initial changes to your repository
- [ ] Verify CI/CD workflow runs successfully
- [ ] Check that badges in readme display correctly
- [ ] Test cloning and setup on a fresh machine/environment

## 📝 Documentation Updates

- [ ] Document your project's purpose and goals
- [ ] Add API documentation if applicable
- [ ] Document environment variables and configuration
- [ ] Add examples and usage instructions
- [ ] Document any external dependencies or services
- [ ] Add troubleshooting section if applicable

## 🚀 Ready to Go

Once you've completed this checklist:

1. Delete or archive this file
2. Delete `TEMPLATE_SETUP.md` if no longer needed
3. Commit all changes
4. Start developing your project

## 🎯 Next Steps

- [ ] Set up branch protection rules
- [ ] Configure automated dependency updates (Dependabot/Renovate)
- [ ] Add any project-specific documentation
- [ ] Create initial issues for planned features
- [ ] Set up project boards if using GitHub Projects
- [ ] Configure team access if working with others

---

**Need help?** Check out [TEMPLATE_SETUP.md](./TEMPLATE_SETUP.md) for detailed
guidance.
