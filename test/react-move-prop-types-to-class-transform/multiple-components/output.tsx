class SomeComponent extends React.Component<
    {
        foo: number;
    },
    {
        bar: string;
    }
> {
    static propTypes = { foo: PropTypes.string };
    render() {
        return null;
    }
}
SomeComponent.propTypes = { foo: PropTypes.string };
class AnotherComponent extends React.Component<{
    baz: number;
}> {
    static propTypes = { baz: PropTypes.string };
    render() {
        return null;
    }
}
AnotherComponent.propTypes = { baz: PropTypes.string };
