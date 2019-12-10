class SomeComponent extends React.Component<{
        foo: string;
        baz: string;
    }, {
        bar: string;
    }> {
}
SomeComponent.propTypes = { foo: PropTypes.string };
SomeComponent.propTypes.baz = PropTypes.string.isRequired;


class AnotherComponent extends React.Component<{
        lol: number;
    }> {
}
AnotherComponent.propTypes = { lol: PropTypes.number };
