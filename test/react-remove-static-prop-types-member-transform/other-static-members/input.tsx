class SomeComponent extends React.Component<{
    foo: number;
}, {
    bar: string;
}> {
    static propTypes = { foo: PropTypes.string };
    static defaultProps = { foo: 'bar' };
}
