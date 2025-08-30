# WebSocket Project Setup

This project demonstrates WebSocket implementation with TypeScript and Node.js.

## Prerequisites

- Node.js installed on your system
- npm package manager

## Setup Instructions

### 1. Initialize an empty Node.js project

```bash
npm init -y
```

### 2. Install TypeScript

```bash
npm install typescript
```

### 3. Add TypeScript configuration to the project

```bash
npx tsc --init
```

### 4. Update tsconfig.json

Add the following configuration to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    // ... other TypeScript options
  }
}
```

### 5. Install WebSocket library and types

You still need to install the WebSocket library:

```bash
npm i ws @types/ws
```

**Note**: You already have TypeScript installed as a dependency in your `package.json`.

### 6. Add Development Script to package.json

Add the following script to your `package.json`:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "tsc -b && node ./dist/index.js"
},
```

This script does two things:
1. `tsc -b` - Compiles TypeScript files from `src/` to `dist/`
2. `node ./dist/index.js` - Runs the compiled JavaScript file

### 7. Run the Development Server

```bash
npm run dev
```

This command will compile your TypeScript and run the server automatically.

## Project Structure

```
project-root/
├── src/           # TypeScript source files
├── dist/          # Compiled JavaScript files
├── package.json
├── tsconfig.json
└── README.md
```

## Usage

1. Follow the setup instructions above
2. Write your WebSocket server code in the `src/` directory
3. Run `npm run dev` to start the development server
4. Your compiled JavaScript will be output to the `dist/` directory

## WebSocket Features

This project supports:
- Real-time bidirectional communication
- TypeScript for type safety
- Development mode with hot reload
- Proper project structure with source and output directories

## Development

- Source files: `src/`
- Compiled output: `dist/`
- Run development server: `npm run dev`
- TypeScript compilation: Handled automatically

## Notes

- Make sure to add your `dev` script to `package.json` for easy development
- The WebSocket server will handle real-time communication between clients
- TypeScript provides better code quality and developer experience
