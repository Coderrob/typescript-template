/**
 * Environment variables interface for testing
 */
export interface IEnvironmentVariables {
  GITHUB_ACTIONS?: string;
  GITHUB_REPOSITORY?: string;
  GITHUB_WORKFLOW?: string;
  GITHUB_RUN_ID?: string;
  GITHUB_REF?: string;
  GITHUB_SHA?: string;
  NODE_ENV?: string;
  LOG_LEVEL?: string;
  LOG_FILE?: string;
  npm_package_version?: string;
}
