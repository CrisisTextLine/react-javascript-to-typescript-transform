type HelloProps = {
    message?: string;
};
const Hello: React.FC<HelloProps> = ({ message }) => {
    return <div>hello {message}</div>;
};
Hello.propTypes = {
    message: React.PropTypes.string,
};
