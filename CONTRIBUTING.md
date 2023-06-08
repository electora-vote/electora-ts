# Contribution Guide

Download, install, build, and test with:

```bash
git clone https://github.com/electora-vote/electora-ts
cd electora-ts
yarn install
yarn build
yarn test
```

## Commit Hooks
Commit hooks are handled by [husky](https://typicode.github.io/husky/).
To skip hooks use `--no-verify` flag.

## Publishing

Publish a new release on NPM.

Pay attention to the output of these commands and fix your release if needed.

To build and publish a release, run

```bash
yarn prepare-release
# Or, to publish an alpha release
yarn prepare-release:alpha
```

Follow instructions from the command output to finalize the process.