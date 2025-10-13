# Starter Templates

This directory contains optional starter templates to help you get started
quickly with common TypeScript patterns.

## 🎯 Usage

These are **example starting points** - feel free to use them as-is, modify
them, or delete them entirely and create your own structure.

## 📝 Available Templates

### Basic Application

A simple TypeScript application structure:

```typescript
// src/index.ts
import { App } from './app';

async function main(): Promise<void> {
  const app = new App();
  await app.start();
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
```

### CLI Application

For command-line tools:

```typescript
// src/cli.ts
import { parseArgs } from 'node:util';

function main(): void {
  const { values, positionals } = parseArgs({
    options: {
      help: { type: 'boolean', short: 'h' },
      version: { type: 'boolean', short: 'v' }
    },
    allowPositionals: true
  });

  if (values.help) {
    console.log('Usage: my-cli [options] <command>');
    return;
  }

  // Your CLI logic here
}

main();
```

### Express Server

For web applications:

```typescript
// src/server.ts
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### Library/Package

For creating reusable libraries:

```typescript
// src/index.ts

/**
 * Main library export
 */
export class MyLibrary {
  /**
   * Example method
   */
  public doSomething(): string {
    return 'Hello from MyLibrary';
  }
}

// Export types
export type { MyOptions } from './types';

// Export utilities
export { myUtilityFunction } from './utils';
```

## 🔄 Replacing Example Code

The template currently includes a logging system example. To replace it:

### Option 1: Keep the Structure, Replace Logic

```bash
# Keep the directory structure but replace the logic in:
# - src/core/action.ts
# - src/index.ts
```

### Option 2: Start Completely Fresh

```bash
# Remove all example code
rm -rf src/*

# Create your entry point
touch src/index.ts

# Add your first file
cat > src/index.ts << 'EOF'
console.log('Hello from my new project!');
EOF
```

### Option 3: Keep Useful Parts

```bash
# Keep the logging system
mv src/logging /tmp/logging

# Clean everything else
rm -rf src/*

# Restore logging
mv /tmp/logging src/logging

# Create your new entry point
touch src/index.ts
```

## 📚 Pattern Examples

### Dependency Injection

```typescript
// src/container.ts
export class Container {
  private services = new Map<string, any>();

  register<T>(name: string, service: T): void {
    this.services.set(name, service);
  }

  resolve<T>(name: string): T {
    return this.services.get(name);
  }
}
```

### Configuration Management

```typescript
// src/config.ts
import { z } from 'zod';

const ConfigSchema = z.object({
  port: z.number().default(3000),
  env: z.enum(['development', 'production']).default('development'),
  database: z.object({
    host: z.string(),
    port: z.number()
  })
});

export type Config = z.infer<typeof ConfigSchema>;

export function loadConfig(): Config {
  return ConfigSchema.parse({
    port: Number(process.env.PORT),
    env: process.env.NODE_ENV,
    database: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT)
    }
  });
}
```

### Error Handling

```typescript
// src/errors.ts
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 'VALIDATION_ERROR', 400);
    this.name = 'ValidationError';
  }
}
```

## 💡 Tips

1. **Start Simple**: Begin with a basic structure and add complexity as needed
2. **Test Early**: Write tests as you build features
3. **Follow Patterns**: Maintain consistency in your code organization
4. **Document**: Add JSDoc comments to public APIs
5. **Refactor**: Continuously improve your code structure

## 🎓 Learning Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
