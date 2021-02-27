# Tabler React - Typescript Version

> React implementation of [Tabler UI](https://tabler.io/). Loosely based on
> [tabler-react](https://github.com/tabler/tabler-react/) which is no longer
> developed.

[![npm](https://img.shields.io/npm/v/tabler-react-typescript.svg?style=for-the-badge)](https://www.npmjs.com/package/tabler-react-typescript)
[![npm (types)](https://img.shields.io/npm/types/tabler-react-typescript.svg?style=for-the-badge)](https://www.npmjs.com/package/tabler-react-typescript)
[![npm (licence)](https://img.shields.io/npm/l/tabler-react-typescript.svg?style=for-the-badge)](https://www.npmjs.com/package/tabler-react-typescript)

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
