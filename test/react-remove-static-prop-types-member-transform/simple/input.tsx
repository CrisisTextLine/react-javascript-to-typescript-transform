class SomeComponent extends React.Component<{
        foo: number;
    }, {
        bar: string;
    }> {
    static get propTypes() {
        return { foo: PropTypes.string };
    }
}
