class SomeComponent extends React.Component<{
        foo: number;
    }, {
        bar: string;
    }> {
    static propTypes = {
        foo: PropTypes.string,
        baz: PropTypes.string.isRequired,
    };
}