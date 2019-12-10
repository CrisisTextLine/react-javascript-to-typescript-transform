# React JavaScript to TypeScript Transform

[![Build Status](https://travis-ci.org/lyft/react-javascript-to-typescript-transform.svg?branch=master)](https://travis-ci.org/lyft/react-javascript-to-typescript-transform)

Transforms React code written in JavaScript to TypeScript.

## Features:

-   Proxies `PropTypes` to `React.Component` generic type and removes PropTypes
-   Provides state typing for `React.Component` based on initial state and `setState()` calls in the component
-   Hoist large interfaces for props and state out of `React.Component<P, S>` into declared types
-   Convert functional components with `PropTypes` property to TypeScript and uses propTypes to generate function type declaration

## Example

**input**

```jsx
class MyComponent extends React.Component {
    static propTypes = {
        prop1: React.PropTypes.string.isRequired,
        prop2: React.PropTypes.number,
    };
    constructor() {
        super();
        this.state = { foo: 1, bar: 'str' };
    }
    render() {
        return (
            <div>
                {this.state.foo}, {this.state.bar}, {this.state.baz}
            </div>
        );
    }
    onClick() {
        this.setState({ baz: 3 });
    }
}
```

**output**

```tsx
type MyComponentProps = {
    prop1: string;
    prop2?: number;
};

type MyComponentState = {
    foo: number;
    bar: string;
    baz: number;
};

class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
    constructor() {
        super();
        this.state = { foo: 1, bar: 'str' };
    }
    render() {
        return (
            <div>
                {this.state.foo}, {this.state.bar}, {this.state.baz}
            </div>
        );
    }
    onClick() {
        this.setState({ baz: 3 });
    }
}
```

## Usage

### Install and configure

This repo currently needs to be cloned and built directly[\*](#original-project)

1. [Install yarn](https://yarnpkg.com/en/docs/install#mac-stable): `brew install yarn`
2. `git clone git@github.com:CrisisTextLine/react-javascript-to-typescript-transform.git`
3. Install dependencies: `yarn install`
4. Build the package `yarn build`
5. Set up an alias by adding this to your .bash_profile (or equivalent for a different shell)
    ```sh
    react-js-to-ts="node <PATH_TO_CLONED_REPO>/dist/cli.js"
    ```
    For `.bash_profile` you should be able to use do this with the following command:
    ```sh
    echo "\nalias react-js-to-ts=\"node `pwd`/dist/cli.js\"" >> $HOME/.bash_profile
    ```

### CLI

```
react-js-to-ts my-react-js-file.js
```

## Development

### Tests

Tests are organized in `test` folder. For each transform there is a folder that contains folders for each test case. Each test case has `input.tsx` and `output.tsx`.

```
npm test
```

#### Watch mode

Pass `-w` to `npm test`

```
npm test -- -w
```

#### Only a single test case

Pass `-t` with transform name and case name space separated to `npm test`

```
npm test -- -t "react-js-make-props-and-state-transform propless-stateless"
```

### Original Project

NOTE: The original version of this project had a package installable from npm (`npm install -g react-js-to-ts`). This could then be used like `react-js-to-ts my-react-js-file.js`. Additionally it had a nifty [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=mohsen1.react-javascript-to-typescript-transform-vscode#overview).

Since the original maintainers archived the original fork, we had to fork it to make updates. If we end up making a bunch of valuable updates, maybe we should publish our version somewhere.
