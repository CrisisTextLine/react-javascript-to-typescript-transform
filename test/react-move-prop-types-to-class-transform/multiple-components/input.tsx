class SomeComponent extends React.Component<{
        foo: number;
    }, {
        bar: string;
    }> {
    render() {
        return null;
    }
}
SomeComponent.propTypes = { foo: PropTypes.string };

class AnotherComponent extends React.Component<{
    baz: number;
}> {
    render() {
        return null;
    }
}
AnotherComponent.propTypes = { baz: PropTypes.string };
