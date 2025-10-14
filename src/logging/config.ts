/*
 * Copyright 2025 Robert Lindley
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import * as pino from 'pino';

import { IPinoLoggerConfig } from './pino/types.js';

/**
 * Environment-based configuration resolver
 */
export class LoggerConfigResolver {
  /**
   * Resolve configuration from environment variables and defaults
   */
  static resolve(
    overrides: Partial<IPinoLoggerConfig> = {}
  ): IPinoLoggerConfig {
    const config = this.createBaseConfig();
    this.applyEnvironmentSpecificSettings(config);
    return { ...config, ...overrides };
  }

  /**
   * Create the base configuration with common settings
   * @return Base IPinoLoggerConfig object
   */
  private static createBaseConfig(): IPinoLoggerConfig {
    const isGitHubActions = Boolean(process.env.GITHUB_ACTIONS);

    return {
      level: (process.env.LOG_LEVEL as pino.LevelWithSilent) || 'info',
      prettyPrint: this.isDevelopment(),
      enableCore: isGitHubActions,
      enablePino: true,
      base: {
        service: 'github-action',
        version: process.env.npm_package_version || '1.0.0',
        ...(isGitHubActions && this.getGitHubMetadata())
      }
    };
  }

  /**
   * Apply environment-specific transport settings
   * @param config - The configuration object to modify
   */
  private static applyEnvironmentSpecificSettings(config: IPinoLoggerConfig) {
    if (this.isProduction()) {
      config.transport = this.createProductionTransport();
    } else if (this.isDevelopment()) {
      config.transport = this.createDevelopmentTransport();
    }
  }

  /**
   * Check if running in development environment
   * @return True if in development mode, false otherwise
   */
  private static isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development';
  }

  /**
   * Check if running in production environment
   */
  private static isProduction(): boolean {
    return process.env.NODE_ENV === 'production';
  }

  /**
   * Get GitHub Actions metadata for logging
   * @return Object with GitHub metadata
   */
  private static getGitHubMetadata() {
    return {
      repository: process.env.GITHUB_REPOSITORY,
      workflow: process.env.GITHUB_WORKFLOW,
      runId: process.env.GITHUB_RUN_ID,
      ref: process.env.GITHUB_REF,
      sha: process.env.GITHUB_SHA
    };
  }

  /**
   * Create transport configuration for production
   * @return Transport options for production logging
   */
  private static createProductionTransport() {
    return {
      target: 'pino/file',
      options: {
        destination: process.env.LOG_FILE || './logs/app.log',
        mkdir: true
      }
    };
  }

  /**
   * Create transport configuration for development
   * @return Transport options for development logging
   */
  private static createDevelopmentTransport() {
    return {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'yyyy-mm-dd HH:MM:ss',
        ignore: 'pid,hostname',
        singleLine: false
      }
    };
  }

  /**
   * Create Pino options from resolved config
   * @param config - The resolved IPinoLoggerConfig
   * @returns Pino LoggerOptions object
   */
  static toPinoOptions(config: IPinoLoggerConfig): pino.LoggerOptions {
    return {
      level: config.level || 'info',
      transport: config.transport,
      base: config.base || {}
    };
  }
}
