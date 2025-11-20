---
title: .env files
---

## What are Environment Files?

Environment files (commonly named `.env`) are configuration files that store environment variables for your application. They contain sensitive information and configuration settings that may vary between different environments (development, staging, production).

### Purpose

Environment files serve several important purposes:

- **Security**: Keep sensitive data (API keys, passwords, tokens) out of your source code
- **Configuration**: Store environment-specific settings that change between development and production
- **Flexibility**: Allow different team members to use their own configurations without conflicts
- **Separation of concerns**: Keep configuration separate from application logic

Common data stored in `.env` files includes:

- Database connection strings
- API keys and secrets
- Third-party service credentials
- Environment-specific URLs
- Feature flags
- Port numbers

## File Structure

Environment files follow a simple key-value pair structure. Each line contains one variable in the format `KEY=value`.

### Basic Syntax

```bash
# This is a comment
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
API_KEY=abc123xyz789
PORT=3000
NODE_ENV=development
```

### Naming Conventions

- Use UPPERCASE for variable names
- Separate words with underscores (snake_case)
- Be descriptive but concise
- Group related variables with common prefixes

```bash
# Database configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp
DB_USER=admin
DB_PASSWORD=secret123

# API configuration
API_BASE_URL=https://api.example.com
API_KEY=your_api_key_here
API_TIMEOUT=5000
```

### Value Types

```bash
# Strings (no quotes needed, but can use them)
APP_NAME=My Application
APP_DESCRIPTION="An awesome app"

# Numbers
PORT=3000
MAX_CONNECTIONS=100

# Booleans (stored as strings)
DEBUG=true
ENABLE_LOGGING=false

# URLs
DATABASE_URL=postgresql://localhost/mydb

# Empty values
OPTIONAL_KEY=

# Multiline values (use quotes)
PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA...
-----END RSA PRIVATE KEY-----"
```

## Git and Version Control

### Never Track `.env` Files

**Important**: `.env` files should **NOT** be tracked by Git because they contain sensitive information.

Add `.env` to your `.gitignore` file:

```bash
# .gitignore
.env
.env.local
.env.*.local
```

### What to Track Instead

Create an `.env.example` or `.env.template` file that shows the structure without sensitive values:

```bash
# .env.example
DATABASE_URL=postgresql://user:password@host:port/database
API_KEY=your_api_key_here
PORT=3000
NODE_ENV=development
```

This file **should be tracked** in Git because it:

- Documents required environment variables
- Helps new developers set up their environment
- Shows the structure without exposing secrets

## Deployment settings

If you are deploying your application to a hosting platform like Combell, you need to set the environment variables there as well. Of course this will differ from your local `.env` file. So make sure you don't just upload your local `.env` file to the server.

Other hosting platforms like GitHub Pages, Vercel, Netlify, Heroku, etc. provide dashboards to set environment variables directly. You typically do this in the project settings and do not upload `.env` files.

## Loading Environment Variables

### Node.js with dotenv

```bash
npm install dotenv
```

```javascript
// At the top of your main file
require('dotenv').config();

// Or with ES modules
import 'dotenv/config';

// Access variables
const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;
```

### Vite

Vite has [built-in support for `.env` files.](https://vite.dev/guide/env-and-mode#env-variables) Only variables prefixed with `VITE_` are exposed to client-side code:

```bash
# .env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
DATABASE_URL=postgresql://...  # Not exposed to client
```

```javascript
// In your Vite app
const apiUrl = import.meta.env.VITE_API_URL;
```
