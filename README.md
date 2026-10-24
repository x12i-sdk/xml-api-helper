# @x12i/xml-api-helper usage example

Thin XML parse/build helpers for Memorix connectors (fast-xml-parser).

This consuming application demonstrates **parse an xml response and read a nested value** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Parse an XML response and read a nested value from a connector.
- Build a supported XML request from structured application data.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/xml-api-helper)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
