# Tabler React - Typescript Version

> React implementation of [Tabler UI](https://tabler.io/). Loosely based on
> [tabler-react](https://github.com/tabler/tabler-react/) which is no longer
> developed.

<p>
  <a href="https://tabler-react-typescript.jc21.com?utm_source=github">
    <img src="https://img.shields.io/badge/documentation-blue.svg?style=for-the-badge">
  </a>
  <a href="https://www.npmjs.com/package/tabler-react-typescript">
    <img src="https://img.shields.io/npm/v/tabler-react-typescript.svg?style=for-the-badge">
  </a>
  <a href="https://www.npmjs.com/package/tabler-react-typescript">
    <img src="https://img.shields.io/npm/types/tabler-react-typescript.svg?style=for-the-badge">
  </a>
  <a href="https://ci.nginxproxymanager.com/blue/organizations/jenkins/tabler-react-typescript/branches/">
    <img src="https://img.shields.io/jenkins/build?jobUrl=https%3A%2F%2Fci.nginxproxymanager.com%2Fjob%2Ftabler-react-typescript%2Fjob%2Fmaster&style=for-the-badge">
  </a>
</p>

## Install

```bash
npm install --save tabler-react-typescript
```

## Development

```bash
git clone https://github.com/jc21/tabler-react-typescript.git
```

This project used
[this react library template](https://github.com/HarveyD/react-component-library).

### Testing

```bash
yarn test
```

### Building

```bash
yarn build
```

### Generating New Components

```
yarn generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.test.tsx
    YourComponentName.types.ts
    YourComponentName.scss
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.ts` exports if you want the
library to export the component!

## License

MIT © [jc21](https://github.com/jc21) and
[codecalm](https://github.com/codecalm)
