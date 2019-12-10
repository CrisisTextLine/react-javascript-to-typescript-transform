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
