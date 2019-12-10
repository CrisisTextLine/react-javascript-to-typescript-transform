import * as React from 'react';

export default class MyComponent extends React.Component {
    static get propTypes() {
        return {
            foo: PropTypes.string.isRequired,
        };
    }
    render() {
        return <div />;
    }
}
