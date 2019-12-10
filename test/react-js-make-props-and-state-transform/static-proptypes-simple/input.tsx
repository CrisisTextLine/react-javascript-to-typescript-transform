import * as React from 'react';

export default class MyComponent extends React.Component {
    static propTypes = {
        foo: PropTypes.string.isRequired,
    };
    render() {
        return <div />;
    }
}