# Express.js Server Template

This template provides a starting point for building an Express.js server using TypeScript.
It is designed to be used with the Node.js runtime and the npm package manager.
By default, it includes dependencies for MongoDB as the database.

## Usage

1. Update `package.json` by replacing the placeholders for `name`, `version`, and `description`.
2. Update git origin
    ```bash
    git remote remove origin
    git remote add origin <url>
    git push -u origin master
    ```
3. Install all required dependencies by running `npm install`.
4. Begin coding in the `src/main.ts` file.
5. Start the server in development mode with `npm run dev`.

## VS-Code Setup

To achieve optimal integration with VS Code, you can use the following settings.
Add the configuration below to your `.vscode/settings.json` file:

```json
{
    "editor.rulers": [120],
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.indentSize": 4
}
```
